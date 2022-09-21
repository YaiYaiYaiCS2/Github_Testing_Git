import "../css/Employee.css";
import Menubar from "../components/Menubar.js";
import EmCreate from "./EmCreate.js";
import EmUpdate from "./EmUpdate.js";
import { FaSearch, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Employee() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  
  

  const UserGet = () => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", sessionStorage.getItem("token"));

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("http://192.168.0.155:1000/test/myproject1/employees", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  };



  useEffect(() => {
    UserGet();
  }, []);

  // const UpdateEmployee = (emp_ID) => {
  //   window.location = "/update/" + emp_ID;
  // };

  const DelEmployee = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", sessionStorage.getItem("token"));

    var raw = JSON.stringify({
      emp_ID: id,
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://192.168.0.155:1000/test/myproject1/delete_employee", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result["status"] === "ok") {
          UserGet();
        }
      })
      .catch((error) => console.log("error", error));
  };

  // const [modal, setModal] = useState(false);
  // const toggleModal = () => {
  //   setModal(!modal)
  // };

  const [openModal, setOpenModal] = useState(false);
  const [openModalUp, setOpenModalUp] = useState(false);
  const [selectData, setSelectData] = useState("");
  const MySwal = withReactContent(Swal);

  return (
    <div className="box-modal-em">
      <div className="box-em">
        <Menubar />

        <div className="bg-em">
          <div className="con-search-em">
            <div className="search-em">
              <label className="lbl-search">
                <input
                  className="search-inp-em"
                  type="text"
                  placeholder="ຄົ້ນຫາ..."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                ></input>
                <FaSearch className="filt-ic-em" />
              </label>
              <button className="btn-search-em">ຄົ້ນຫາ</button>
            </div>
          </div>
          <div className="tb-em">
            <div className="con-tbl-em">
              <p className="p-man-em">
                ຈັດການຂໍ້ມູນພະນັກງານ
                <button
                  className="btn-pherm"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <label className="lbl-ic-p">
                    <FaPlusCircle />
                  </label>
                  ເພີ່ມ
                </button>
                {openModal && <EmCreate closeModal={setOpenModal} />}
                {/*button no loop*/
                /* <button
                  className="btnnn"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <label>
                    <FaPencilAlt className="up-em" />
                  </label>
                </button>
                {openModalUp && <EmUpdate closeModalUp={setOpenModalUp} />} */}
              </p>
              <div className="box-tbl-em">
                <table className="tbl-em">
                  <thead>
                    <tr>
                      <th>ລະຫັດພະນັກງານ</th>
                      <th>ຮູບພະນັກງານ</th>
                      <th>ເພດ</th>
                      <th>ຊື່</th>
                      <th>ນາມສະກຸນ</th>
                      <th>ເບີໂທ</th>
                      <th>ພາກສ່ວນ</th>
                      <th>ຕໍາແໜ່ງ</th>
                      <th>ພະແນກ</th>
                      <th>ແກ້ໄຂ</th>
                      <th>ລົບ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items != null ? 
                    items?.filter((val) => {
                        if (searchTerm === "") {
                          return val;
                        } else if (
                          val.emp_ID
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          val.gender
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          val.emp_name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          val.emp_surname
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          val.emp_tel
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          // val.session_name
                          //   .toLowerCase()
                          //   .includes(searchTerm.toLowerCase()) ||
                          val.pos_name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          val.dep_name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((formData) => (
                        <tr key={formData.name}>
                          <td>{formData.emp_ID}</td>
                          <td>
                            <Avatar src={formData.profilepic} />
                          </td>
                          <td>{formData.gender}</td>
                          <td>{formData.emp_name}</td>
                          <td>{formData.emp_surname}</td>
                          <td>{formData.emp_tel}</td>
                          <td>{formData.session_name}</td>
                          <td>{formData.pos_name}</td>
                          <td>{formData.dep_name}</td>
                          <td>
                            <button
                              onClick={() => {
                                setOpenModalUp(true);
                                // console.log(formData.profilepic)
                                setSelectData(formData);
                              }}
                              className="btnnn"
                            >
                              <label>
                                <FaPencilAlt className="up-em" />
                              </label>
                            </button>
                            {openModalUp && (
                              <EmUpdate
                                closeModalUp={setOpenModalUp}
                                data={selectData}
                              />
                            )}
                          </td>
                          <td>
                            <button
                              className="btnnn"
                              onClick={() =>
                                MySwal.fire({
                                  title: "ຢືນຢັນການລົບ",
                                  html: "ຂໍ້ມູນທີ່ທ່ານລົບຈະບໍ່ສາມາດກູ້ຄືນໄດ້.<br /> ທ່ານແນ່ໃຈທີ່ຈະລົບ ຫຼື ບໍ່?",
                                  icon: "warning",
                                  iconColor: "red",
                                  showCancelButton: true,
                                  confirmButtonColor: "#3085d6",
                                  cancelButtonColor: "#d33",
                                  confirmButtonText: "ຢືນຢັນ",
                                  cancelButtonText: "ຍົກເລີກ",
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    Swal.fire(
                                      "ລົບຂໍ້ມູນສຳເລັດ!",
                                      "ທ່ານໄດ້ລົບຂໍ້ມູນພະນັກງານສຳເລັດແລ້ວ.",
                                      "success"
                                    ).then(() => {
                                      DelEmployee(formData.emp_ID);
                                    });
                                  } else {
                                    Swal.fire(
                                      "ລົບຂໍ້ມູນບໍ່ສຳເລັດ!",
                                      "ທ່ານໄດ້ລົບຂໍ້ມູນພະນັກງານບໍ່ສຳເລັດແລ້ວ.",
                                      "error"
                                    );
                                  }
                                })
                              }
                            >
                              <label>
                                <RiDeleteBin6Line className="del-em" />
                              </label>
                            </button>
                          </td>
                        </tr>
                      )): ""}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
