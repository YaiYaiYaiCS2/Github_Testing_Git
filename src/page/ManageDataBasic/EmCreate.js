import { FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "../css/EmCreate.css";
import { RiCloseLine } from "react-icons/ri";

import axios from "axios";

export default function CreateEmployee({ closeModal }) {
  const [emp_ID, setEID] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const [gender, setGender] = useState("");
  const [emp_name, setEname] = useState("");
  const [emp_surname, setESurname] = useState("");
  const [emp_tel, setETel] = useState("");
  const [pos_name, setPosition] = useState([]);
  const [dep_name, setDepartment] = useState();
  const [village, setVillage] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState([]);
  const [session_name, setSession] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  const handleSubmit = async (e) => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", sessionStorage.getItem("token"));

    var formdata = new FormData();
    formdata.append("emp_ID", emp_ID);
    formdata.append("emp_name", emp_name);
    formdata.append("emp_surname", emp_surname);
    formdata.append("emp_tel", emp_tel);
    formdata.append("dep_name", dep_name ?? "");
    formdata.append("district", district);
    formdata.append("village", village);
    formdata.append("pos_name", pos_name ?? "");
    formdata.append("gender", gender);
    formdata.append("province", province);
    formdata.append("session_name", session_name);
    formdata.append("file", profilepic[0], profilepic[0].name);

    var requestOptions = {
      method: "POST",
      body: formdata,
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://47.250.49.41/test/myproject1/create_employee", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/employee";
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(async () => {
    const provinces = await axios.get(
      "http://192.168.0.155:1000/test/myproject1/province",
      {
        headers: {
          "x-api-key": sessionStorage.getItem("token"),
        },
      }
    );
    console.log({ provinces });
    const sessions = await axios.get(
      "http://192.168.0.155:1000/test/myproject1/session",
      {
        headers: {
          "x-api-key": sessionStorage.getItem("token"),
        },
      }
    );
    console.log({ sessions });
    const positions = await axios.get(
      "http://192.168.0.155:1000/test/myproject1/positions",
      {
        headers: {
          "x-api-key": sessionStorage.getItem("token"),
        },
      }
    );
    console.log({ positions });
    const departments = await axios.get(
      "http://192.168.0.155:1000/test/myproject1/departments",
      {
        headers: {
          "x-api-key": sessionStorage.getItem("token"),
        },
      }
    );
    console.log({ departments });

    if (profilepic.length < 1) return;
    const newImageUrls = [];
    profilepic.forEach((image) =>
      newImageUrls.push(URL.createObjectURL(image))
    );
    setImageURLs(newImageUrls);
  }, [], [profilepic]);

  function onImageChange(e) {
    setProfilepic([e.target.files[0]]);
  }

  return (
    <div className="myModal-cre-em">
      <div className="modal-content-cre-em">
        <button onClick={() => closeModal(false)} className="close-cre-em">
          <RiCloseLine />
        </button>
        <p className="header-cre-em">
          <p className="h6-data-cre-em">ປ້ອນຂໍ້ມູນພະນັກງານ</p>
        </p>
        <div className="div-picture-cre-em">
          <p className="p-con-lbl-picture-cre-em">
            <label
              className="lbl-img-click-cre-em"
              htmlFor="id-img-click-cre-em"
            >
              <FaUserCircle
                className="img-click-cre-em"
                htmlFor="id-img-click-cre-em"
              />
            </label>
          </p>
          <p className="p-con-picture-cre-em">
            <input
              className="inp-img-none"
              id="id-img-click-cre-em"
              type="file"
              multiple
              accept="image/*"
              onChange={onImageChange}
            />
            {imageURLs != null
              ? imageURLs?.map((imageSrc, idx) => (
                  <img className="img-cre-em" key={idx} src={imageSrc} alt="" />
                ))
              : ""}
          </p>
        </div>
        <div className="box-con-box-inp-cre-em">
          <div className="box-input-cre-em">
            <p className="p-inp-id-cre-em">
              <label className="lbl-head-cre-em">ລະຫັດພະນັກງານ:</label>
              <input
                onChange={(e) => setEID(e.target.value)}
                className="inp-cre-em"
                type="text"
                placeholder="ປ້ອນລະຫັດພະນັກງານ*"
              ></input>
            </p>
            <p className="p-gender-cre-em">
              <label className="lbl-head-cre-em">ເພດ:</label>
              <p className="p-phed-cre-em">
                <p className="p-soud-cre-em">
                  <label className="lbl-nnnn-cre-em">
                    <input
                      className="inp-radio"
                      id="male"
                      onChange={(e) => setGender(e.target.value)}
                      type="radio"
                      value="ຍິງ"
                      name="g"
                    />
                    <label className="btn-radio-cre-em" htmlFor="male">
                      ຍິງ
                    </label>
                  </label>
                  <label className="lbl-nnnn-cre-em">
                    <input
                      className="inp-radio"
                      type="radio"
                      id="female"
                      onChange={(e) => setGender(e.target.value)}
                      value="ຊາຍ"
                      name="g"
                    />
                    <label className="btn-radio-cre-em" htmlFor="female">
                      ຊາຍ
                    </label>
                  </label>
                </p>
              </p>
            </p>
            <p className="pppp-cre-em">
              <label className="lbl-head-cre-em">ຊື່:</label>
              <input
                onChange={(e) => setEname(e.target.value)}
                className="inp-cre-em"
                type="text"
                placeholder="ປ້ອນຊື່*"
              ></input>
            </p>
            <p className="pppp-cre-em">
              <label className="lbl-head-cre-em">ນາມສະກຸນ:</label>
              <input
                onChange={(e) => setESurname(e.target.value)}
                className="inp-cre-em"
                type="text"
                placeholder="ປ້ອນນາມສະກຸນ*"
              ></input>
            </p>
            <p className="pppp-cre-em">
              <label className="lbl-head-cre-em">ເບີໂທ:</label>
              <input
                onChange={(e) => setETel(e.target.value)}
                className="inp-cre-em"
                type="tel"
                pattern="[0-9]*{8}"
                placeholder="ປ້ອນເບີໂທ*"
              ></input>
            </p>
            <p className="pppp-cre-em">
              <label id="position" className="lbl-head-cre-em">
                ພາກສ່ວນ:
              </label>
              <select className="sel-cre-em">
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                {/* {session_name != null
                  ? session_name?.map((val) => (
                      <option key={val.session_name} value={val.session_name}>
                        {val.session_name}
                      </option>
                    ))
                  : ""} */}
              </select>
            </p>
            <p className="pppp-cre-em">
              <label id="position" className="lbl-head-cre-em">
                ຕໍາແໜ່ງ:
              </label>
              <select className="sel-cre-em">
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                {/* {pos_name != null
                  ? pos_name?.map((val) => (
                      <option key={val.pos_name} value={val.pos_name}>
                        {val.pos_name}
                      </option>
                    ))
                  : ""} */}
              </select>
            </p>
            <p className="pppp-cre-em">
              <label className="lbl-head-cre-em">ພະແນກ:</label>
              <select className="sel-cre-em">
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                {/* {dep_name != null
                  ? dep_name?.map((val) => (
                      <option key={val?.dep_name} value={val?.dep_name}>
                        {val?.dep_name}
                      </option>
                    ))
                  : ""} */}
              </select>
            </p>
            <p className="pppp-cre-em">
              <label className="lbl-head-cre-em">ບ້ານຢູ່ປັດຈຸບັນ:</label>
              <input
                onChange={(e) => setVillage(e.target.value)}
                className="inp-cre-em"
                type="text"
                placeholder="ປ້ອນບ້ານຢູ່ປັດຈຸບັນ*"
              ></input>
            </p>
            <p className="pppp-cre-em">
              <label className="lbl-head-cre-em">ເມືອງຢູ່ປັດຈຸບັນ:</label>
              <input
                onChange={(e) => setDistrict(e.target.value)}
                className="inp-cre-em"
                type="text"
                placeholder="ປ້ອນເມືອງຢູ່ປັດຈຸບັນ*"
              ></input>
            </p>
            <p className="pppp-cre-em">
              <label className="lbl-head-cre-em">ແຂວງຢູ່ປັດຈຸບັນ:</label>
              <select className="sel-cre-em">
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                {/* {province != null
                  ? province?.map((val) => (
                      <option key={val.province} value={val.province}>
                        {val.province}
                      </option>
                    ))
                  : ""} */}
              </select>
            </p>

            <p className="p-btn-save-cancle-cre-em">
              <button
                onClick={() => closeModal(false)}
                className="btn-cancle-cre-em"
              >
                ຍົກເລີກ
              </button>
              <button onClick={handleSubmit} className="btn-save-cre-em">
                ບັນທຶກ
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
