import "../css/Position.css";
import Menubar from "../components/Menubar.js";
import { FaSearch, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Position() {


  const [items, setItems] = useState([]);

  useEffect(() => {
    UserGet()
  }, [])

  const UserGet = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "x-api-key",
      sessionStorage.getItem('token')
    );
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch("http://47.250.49.41/myproject1/positions", requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
      )

  }

  // const UpdateDepartment = id => {
  //   window.location = '/department'
  // }

  const DelPositon = id => {
    var myHeaders = new Headers();
    myHeaders.append(
      "x-api-key",
      sessionStorage.getItem('token')
    );
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("x-api-key", "")

    var raw = JSON.stringify({
      "pos_name": id
    });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://47.250.49.41/myproject1/delete_position", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result['status'] === 'ok') {
          UserGet()
        }
      })
      .catch(error => console.log('error', error));
  }





// ປູ່ມແກ້ໄຂ-ລົບໃຫ້ດືງ api ໃນຟັງຊັນລູ່ມນີ້

  function SwalAddPosition() {
    (async () => {

      const { value: formValues } = await Swal.fire({
        title: 'ເພີ່ມຂໍ້ມູນຕຳແໜ່ງ',
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="ລຳດັບຊັ້ນ">' +
          '<input id="swal-input2" class="swal2-input" placeholder="ຊື່ຕຳແໜ່ງ">',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ຢືນຢັນ',
        cancelButtonText: 'ຍົກເລີກ',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        }
      })

      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }

    })()
  }

  function SwalUpdatePosition() {
    (async () => {

      const { value: formValues } = await Swal.fire({
        title: 'ແກ້ໄຂຂໍ້ມູນຕຳແໜ່ງ',
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="ລຳດັບຊັ້ນ">' +
          '<input id="swal-input2" class="swal2-input" placeholder="ຊື່ຕຳແໜ່ງ">',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ຢືນຢັນ',
        cancelButtonText: 'ຍົກເລີກ',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        }
      })

      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }

    })()
  }


  const MySwalDeletePosition = withReactContent(Swal);

  return (
    <div className="box-modal-position">
      <div className="box-position">
        <Menubar />
        <div className="bg-position">
          <div className="con-search-position">
            <div className="search-position">
              <label className="lbl-search">
                <input
                  className="search-inp-position"
                  type="text"
                  placeholder="ຄົ້ນຫາ..."
                ></input>
                <FaSearch className="filt-ic-position" />
              </label>
              <button className="btn-search-position">
                ຄົ້ນຫາ
              </button>
            </div>
          </div>
          <div className="tb-position">
            <div className="con-tbl-position">
              <p className="p-man-position">
                ຈັດການຂໍ້ມູນຕຳແໜ່ງ
                <button
                  className="btn-pherm-position"
                  onClick={() => SwalAddPosition()}
                >
                  <label className="lbl-ic-p-position">
                    <FaPlusCircle />
                  </label>
                  ເພີ່ມ
                </button>
                {/* {openModal && <EmCreate closeModal={setOpenModal} />} */}
              </p>
              <div className='box-tbl-position'>
                <table className="tbl-position">
                  <thead>
                    <tr>
                      <th>ລໍາດັບ</th>
                      <th>ລໍາດັບຊັ້ນ</th>
                      <th>ຊື່ຕຳແໜ່ງ</th>
                      <th>ແກ້ໄຂ</th>
                      <th>ລົບ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((row) => (
                      <tr
                        key={row.name}
                      >
                        <td className="tbl-row-no-position"></td>
                        <td></td>
                        <td>{row.dep_name}</td>
                        <td >
                          <button
                            onClick={() => SwalUpdatePosition()}
                            className="btnnn-position"
                          >
                            <label>
                              <FaPencilAlt className="up-position" />
                            </label>
                          </button>
                        </td>
                        <td>
                          <button
                            className="btnnn-position"
                            onClick={() =>
                              MySwalDeletePosition.fire({
                                title: 'ຢືນຢັນການລົບ',
                                html: "ຂໍ້ມູນທີ່ທ່ານລົບຈະບໍ່ສາມາດກູ້ຄືນໄດ້.<br /> ທ່ານແນ່ໃຈທີ່ຈະລົບ ຫຼື ບໍ່?",
                                icon: 'warning',
                                iconColor: 'red',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'ຢືນຢັນ',
                                cancelButtonText: 'ຍົກເລີກ'
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  Swal.fire(
                                    'ລົບຂໍ້ມູນສຳເລັດ!',
                                    'ທ່ານໄດ້ລົບຂໍ້ມູນຕຳແໜ່ງສຳເລັດແລ້ວ.',
                                    'success'
                                  ).then(() => { DelPositon(row.dep_name) })
                                }
                                else {
                                  Swal.fire(
                                    'ລົບຂໍ້ມູນບໍ່ສຳເລັດ!',
                                    'ທ່ານໄດ້ລົບຂໍ້ມູນຕຳແໜ່ງບໍ່ສຳເລັດແລ້ວ.',
                                    'error'
                                  )
                                }
                              })}
                          >
                            <label>
                              <RiDeleteBin6Line className="del-position" />
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
  );
}

export default Position;
















// import "../css/Employee.css";
// import Menubar from "../components/Menubar.js";
// import { FaSearch, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import React, { useState, useEffect } from "react";

// function Position() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//       UserGet()
//     }, [])

//     const UserGet = () => {
//       fetch("http://47.250.49.41/myproject1/position")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             setItems(result);
//           },
//         )

//     }

//     const UpdatePosition = id => {
//       window.location = '/position'
//     }

//     const DelPositon = id => {
//       var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
// "pos_ID": id
// });

// var requestOptions = {
// method: 'DELETE',
// headers: myHeaders,
// body: raw,
// redirect: 'follow'
// };

// fetch("http://47.250.49.41/myproject1/delete_position", requestOptions)
// .then(response => response.json())
// .then(result => {
//   alert(result['message'])
//   if(result['status'] === 'ok') {
//     UserGet()
//   }
// })
// .catch(error => console.log('error', error));
//     }


//   return (
//     <div>
//       <Menubar />
//       <div className="bg-em">
//         <div className="con-em">
//           <div className="header-em">
//             <label className="lbl-search">
//               <input
//                 className="search-inp-em"
//                 type="text"
//                 placeholder="ຄົ້ນຫາ..."
//               ></input>
//               <FaSearch className="filt-ic-em" />
//             </label>
//             <a href="/home">
//               <button className="bnt-search-em">
//                 {/* <label className='ic-search-em'><FaSearch /></label> */}
//                 ຄົ້ນຫາ
//               </button>
//             </a>
//           </div>
//         </div>
//         <div className="tb-em">
//           <p className="p-man-em">
//             ຈັດການຂໍ້ມູນຕໍາແໜ່ງ
//             <button className="btn-pherm">
//               <label>
//                 <FaPlusCircle />
//               </label>
//               ເພີ່ມຂໍ້ມູນຕໍາແໜ່ງ
//             </button>
//           </p>
//           <table className="tb-dep">
//             <tr>
//               <td>ລະຫັດ</td>
//               <td>ຕໍາແໜ່ງ</td>
//               <td>ແກ້ໄຂ</td>
//               <td>ລົບ</td>
//             </tr>
//             <tbody>
//               {items.map((row) => (
//                 <tr
//                   key={row.name}
//                 >
//                   <td>{row.pos_ID}</td>
//                   <td>{row.pos_name}</td>
//                         <td>
//                       <button
//                         onClick={() => UpdatePosition(row.dep_name)}
//                         className="btnnn"
//                       >
//                         <label>
//                           <FaPencilAlt className="up-em" />
//                         </label>
//                       </button>
//                       </td>
//                       <td>
//                       <button
//                         onClick={() => DelPositon(row.dep_name)}
//                         className="btnnn"
//                       >
//                         <label>
//                           <RiDeleteBin6Line className="del-em" />
//                         </label>
//                       </button>
//                       </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Position;
