import "../css/Change_position.css";
import Menubar from "../components/Menubar.js";
import { FaSearch, FaPencilAlt, FaPlusCircle, FaExchangeAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Change_Pos() {

// ປູ່ມຍ້າຍຈຳແໜ່ງໃຫ້ດືງ api ໃນຟັງຊັນລູ່ມນີ້

  function SwalUpdateDepart() {

    (async () => {

        const { value: formValues } = await Swal.fire({
            title: 'ຈັດການຍ້າຍຕຳແໜ່ງ',
            html:
                '<input id="swal-input1" class="swal2-input" placeholder="ລະຫັດພະນັກງານ">' +
                '<input id="swal-input2" class="swal2-input" placeholder="ຊື່">' +
                '<input id="swal-input3" class="swal2-input" placeholder="ນາມສະກຸນ">'+
                `<select swal2-select
                >
                    <option selected disabled>ເລືອກຕຳແໜ່ງ...</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
                </select>`+
            `<select swal2-select
                >
                    <option selected disabled>ເລືອກພະແນກ...</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>`,
            input: 'select',
            input: 'file',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ຢືນຢັນ',
            cancelButtonText: 'ຍົກເລີກ',
            focusConfirm: false,
            preConfirm: () => {
                return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value,
                document.getElementById('swal-input3').value
                ]
            }
            })
  
        if (formValues) {
          Swal.fire(JSON.stringify(formValues))
        }
  
      })()

    // (async () => {

    //   const { value: ipAddress } = await Swal.fire({
    //     title: 'ຈັດການຍ້າຍຕຳແໜ່ງ',
    //     input: 'text',
    //     inputPlaceholder: 'ປ້ອນຊື່ພະແນກ',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'ຢືນຢັນ',
    //     cancelButtonText: 'ຍົກເລີກ',
    //     inputValidator: (value) => {
    //       if (!value) {
    //         return 'ກະລຸນາປ້ອນຂໍ້ມູນທີ່ທ່ານຕ້ອງການເພີ່ມ!'
    //       }
    //     }
    //   })

    //   if (ipAddress) {
    //     Swal.fire(
    //       `ແກ້ໄຂພະແນກ: ${ipAddress} ສຳເລັດ!`,
    //       ``,
    //       `success`
    //     )
    //   }

    // })()
  }


  const MySwalDeleteDepart = withReactContent(Swal);

    return (
        <div className="box-modal-change-pos">
        <div className="box-change-pos">
            <Menubar />
            <div className="bg-change-pos">
            <div className="con-search-change-pos">
                <div className="search-change-pos">
                <label className="lbl-search">
                    <input
                    className="search-inp-change-pos"
                    type="text"
                    placeholder="ຄົ້ນຫາ..."
                    ></input>
                    <FaSearch className="filt-ic-change-pos" />
                </label>
                <button className="btn-search-change-pos">
                    ຄົ້ນຫາ
                </button>
                </div>
            </div>
            <div className="tb-change-pos">
                <div className="con-tbl-change-pos">
                <p className="p-man-change-pos">
                    ຈັດການຂໍ້ມູນການຍ້າຍຕຳແໜ່ງ
                </p>
                <div className='box-tbl-change-pos'>
                    <table className="tbl-change-pos">
                    <thead>
                        <tr>
                            <th>ລໍາດັບ</th>
                            <th>ລະຫັດພະນັກງານ</th>
                            <th>ຮູບພະນັກງານ</th>
                            <th>ຊື່</th>
                            <th>ນາມສະກຸນ</th>
                            <th>ຕໍາແໜ່ງ</th>
                            <th>ພະແນກ</th>
                            <th className="column-mov-pos">ຍ້າຍຕຳແໜ່ງ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tbl-row-no-change-pos"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="column-mov-pos">
                            <button
                                onClick={() => SwalUpdateDepart()}
                                className="btnnn-change-pos"
                            >
                                <label>
                                <FaExchangeAlt className="up-change-pos" />
                                </label>
                            </button>
                            </td>
                        </tr>
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

export default Change_Pos;