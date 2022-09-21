import "../css/department.css";
import Menubar from "../components/Menubar.js";
import { FaSearch, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Department() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [dep_name, setDname] = useState("");

  useEffect(() => {
    UserGet();
    UpdateGet();
  }, []);

  const UserGet = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "x-api-key",
      sessionStorage.getItem('token')
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("http://47.250.49.41/myproject1/departments", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  };

  const UpdateGet = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://47.250.49.41/myproject1/departments", requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result['status'] === 'ok') {
          setDname(result['department']['dep_name'])
        }
    
      })
      .catch(error => console.log('error', error));
      }

  const CreateDepartment = (id) => {
      var myHeaders = new Headers();
      myHeaders.append(
        "x-api-key",
        sessionStorage.getItem('token')
      );
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        dep_name: id,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://47.250.49.41/myproject1/create_department", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          alert(result["message"]);
          if (result["status"] === "ok") {
            window.location.href = "/department";
          }
        })
        .catch((error) => console.log("error", error));   
      window.location = "/department";
  };

  const UpdateDepartment = (id) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "x-api-key",
      sessionStorage.getItem('token')
    );
      myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "dep_name": id,
    });
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://47.250.49.41/myproject1/update_department", requestOptions)
      .then(response => response.json())
      .then(result => {
        alert(result['message'])
        if(result['status']==='ok'){
            window.location.href='/department'
        }
      })
      .catch(error => console.log('error', error));
  }

  const DelDepartment = id => {
    var myHeaders = new Headers();
    myHeaders.append(
      "x-api-key",
      sessionStorage.getItem('token')
    );
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("x-api-key", "")

    var raw = JSON.stringify({
      "dep_name": id
    });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://47.250.49.41/myproject1/delete_department", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result['status'] === 'ok') {
          UserGet()
        }
      })
      .catch(error => console.log('error', error));
  }


  // ປູ່ມແກ້ໄຂ-ລົບໃຫ້ດືງ api ໃນຟັງຊັນລູ່ມນີ້

  function SwalAddDepart() {
    (async () => {
      const { value: ipAddress } = await Swal.fire({
        title: "ຊື່ພະແນກ",
        input: "text",
        inputPlaceholder: "ປ້ອນຊື່ພະແນກ",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ຢືນຢັນ",
        cancelButtonText: "ຍົກເລີກ",
        inputValidator: (value) => {
          if (!value) {
            return "ກະລຸນາປ້ອນຂໍ້ມູນທີ່ທ່ານຕ້ອງການເພີ່ມ!";
          }
        },
      });

      if (ipAddress) {
        Swal.fire(`ເພີ່ມພະແນກ: ${ipAddress} ສຳເລັດ!`, ``, `success`)
        .then((result) => {
          if (result.ipAddress) {
            Swal.fire(
              "ລົບຂໍ້ມູນສຳເລັດ!",
              "ທ່ານໄດ້ລົບຂໍ້ມູນພະແນກສຳເລັດແລ້ວ.",
              "success"
            ).then(() => {
              CreateDepartment(ipAddress.dep_name);
            });
          } 
        })
      }
    })();
  }

  function SwalUpdateDepart() {
    (async () => {
      const { value: ipAddress } = await Swal.fire({
        title: "ຊື່ພະແນກ",
        input: "text",
        inputPlaceholder: "ປ້ອນຊື່ພະແນກ",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ຢືນຢັນ",
        cancelButtonText: "ຍົກເລີກ",
        inputValidator: (value) => {
          if (!value) {
            return "ກະລຸນາປ້ອນຂໍ້ມູນທີ່ທ່ານຕ້ອງການເພີ່ມ!";
          }
        },
      });

      if (ipAddress) {
        Swal.fire(`ແກ້ໄຂພະແນກ: ${ipAddress} ສຳເລັດ!`, ``, `success`)
        .then((result) => {
          if (result.ipAddress) {
            Swal.fire(
              "ລົບຂໍ້ມູນສຳເລັດ!",
              "ທ່ານໄດ້ລົບຂໍ້ມູນພະແນກສຳເລັດແລ້ວ.",
              "success"
            ).then(() => {
              UpdateDepartment(ipAddress.dep_name);
            });
          } 
        })
      }
    })();
  }

  const MySwalDeleteDepart = withReactContent(Swal);

  return (
    <div className="box-modal-depart">
      <div className="box-depart">
        <Menubar />
        <div className="bg-depart">
          <div className="con-search-depart">
            <div className="search-depart">
              <label className="lbl-search">
                <input
                  className="search-inp-depart"
                  type="text"
                  placeholder="ຄົ້ນຫາ..."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                ></input>
                <FaSearch className="filt-ic-depart" />
              </label>
              <button className="btn-search-depart">ຄົ້ນຫາ</button>
            </div>
          </div>
          <div className="tb-depart">
            <div className="con-tbl-depart">
              <p className="p-man-depart">
                ຈັດການຂໍ້ມູນພະແນກ
                <button
                  className="btn-pherm-depart"
                  onClick={() => SwalAddDepart()}
                  onChange={(e) => setDname(e.target.value)}
                >
                  <label className="lbl-ic-p-depart">
                    <FaPlusCircle />
                  </label>
                  ເພີ່ມ
                </button>
                {/* {openModal && <EmCreate closeModal={setOpenModal} />} */}
              </p>
              <div className="box-tbl-depart">
                <table className="tbl-depart">
                  <thead>
                    <tr>
                      <th>ລໍາດັບ</th>
                      <th>ຊື່ພະແນກ</th>
                      <th>ແກ້ໄຂ</th>
                      <th>ລົບ</th>
                    </tr>
                  </thead>
                  <tbody>
                  {items
                    .filter((val) => {
                      if (searchTerm === "") {
                        return val;
                      } else if (            
                        val.dep_name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((row) => (
                      <tr key={row.name}>
                        <td className="tbl-row-no-depart"></td>
                        <td>{row.dep_name}</td>
                        <td>
                          <button
                            onClick={() => SwalUpdateDepart()}
                            className="btnnn-depart"
                          >
                            <label>
                              <FaPencilAlt className="up-depart" />
                            </label>
                          </button>
                        </td>
                        <td>
                          <button
                            className="btnnn-depart"
                            onClick={() =>
                              MySwalDeleteDepart.fire({
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
                                    "ທ່ານໄດ້ລົບຂໍ້ມູນພະແນກສຳເລັດແລ້ວ.",
                                    "success"
                                  ).then(() => {
                                    DelDepartment(row.dep_name);
                                  });
                                } else {
                                  Swal.fire(
                                    "ລົບຂໍ້ມູນບໍ່ສຳເລັດ!",
                                    "ທ່ານໄດ້ລົບຂໍ້ມູນພະແນກບໍ່ສຳເລັດແລ້ວ.",
                                    "error"
                                  );
                                }
                              })
                            }
                          >
                            <label>
                              <RiDeleteBin6Line className="del-depart" />
                            </label>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <Menubar />
    //   <div className="bg-depart">
    //     <div className="con-depart">
    //       <div className="header-depart">
    //         <label className="lbl-search">
    //           <input
    //             className="search-inp-depart"
    //             type="text"
    //             placeholder="ຄົ້ນຫາ..."
    //           ></input>
    //           <FaSearch className="filt-ic-depart" />
    //         </label>
    //         <a href="/home">
    //           <button className="bnt-search-depart">

    //             ຄົ້ນຫາ
    //           </button>
    //         </a>
    //       </div>
    //     </div>
    //     <div className="tb-depart">
    //       <p className="p-man-depart">
    //         ຈັດການຂໍ້ມູນພະແນກ
    //         <button className="btn-pherm">
    //           <label>
    //             <FaPlusCircle />
    //           </label>
    //           ເພີ່ມຂໍ້ມູນພະແນກ
    //         </button>
    //       </p>
    //       <table className="tb-dep">
    //         <tr>
    //           <td>ລໍາດັບ</td>
    //           <td>ຊື່ພະແນກ</td>
    //           <td>ແກ້ໄຂ</td>
    //           <td>ລົບ</td>
    //         </tr>
    //         <tbody>
    //           {items.map((row) => (
    //             <tr
    //               key={row.name}
    //             >
    //               <td>
    //                 {row.dep_level}
    //               </td>
    //               <td>{row.dep_name}</td>
    //                     <td>
    //                   <button
    //                     onClick={() => UpdateDepartment(row.dep_name)}
    //                     className="btnnn"
    //                   >
    //                     <label>
    //                       <FaPencilAlt className="up-depart" />
    //                     </label>
    //                   </button>
    //                   </td>
    //                   <td>
    //                   <button
    //                     onClick={() => DelDepartment(row.dep_name)}
    //                     className="btnnn"
    //                   >
    //                     <label>
    //                       <RiDeleteBin6Line className="del-depart" />
    //                     </label>
    //                   </button>
    //                   </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Department;
