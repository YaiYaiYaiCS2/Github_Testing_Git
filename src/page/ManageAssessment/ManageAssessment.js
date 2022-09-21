import "../css/ManageAssessment.css";
import Menubar from "../components/Menubar.js";
import { FaSearch, FaPlusCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import React from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function ManageAssessment() {

  const MySwalDeletePosition = withReactContent(Swal);
    
    return (
        <div className="box-modal-manage-ass">
        <div className="box-manage-ass">
            <Menubar />
            <div className="bg-manage-ass">
            <div className="con-search-manage-ass">
                <div className="search-manage-ass">
                <label className="lbl-search">
                    <input
                    className="search-inp-manage-ass"
                    type="text"
                    placeholder="ຄົ້ນຫາ..."
                    ></input>
                    <FaSearch className="filt-ic-manage-ass" />
                </label>
                <button className="btn-search-manage-ass">
                    ຄົ້ນຫາ
                </button>
                </div>
            </div>
            <div className="tb-manage-ass">
                <div className="con-tbl-manage-ass">
                <p className="p-man-manage-ass">
                    ຈັດການຂໍ້ມູນແບບປະເມີນ
                </p>
                <p className="p-history-manage-ass">
                    <a href='/assessment/create'>
                    <button
                        className="btn-pherm-manage-ass"
                        // onClick={() => SwalAddDepart()}
                        >
                        <label className="lbl-ic-p-manage-ass">
                            <FaPlusCircle />
                        </label>
                        ສ້າງແບບປະເມີນ
                    </button>
                    </a>
                </p>
                <div className='box-tbl-manage-ass'>
                    <table className="tbl-manage-ass">
                    <thead>
                        <tr>
                            <th>ລໍາດັບ</th>
                            <th>ຊື່ແບບປະເມີນ</th>
                            <th>ວັນທີສ້າງ</th>
                            <th>ລົບ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tbl-row-no-manage-ass"></td>
                            <td></td>
                            <td></td>
                            <td>
                            <button
                                className="btnnn-manage-ass"
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
                                        'ທ່ານໄດ້ລົບຂໍ້ມູນແບບປະເມີນສຳເລັດແລ້ວ.',
                                        'success'
                                      ) //.then(() => { DelDepartment(row.dep_name) })
                                    }
                                    else {
                                      Swal.fire(
                                        'ລົບຂໍ້ມູນບໍ່ສຳເລັດ!',
                                        'ທ່ານໄດ້ລົບຂໍ້ມູນແບບປະເມີນບໍ່ສຳເລັດແລ້ວ.',
                                        'error'
                                      )
                                    }
                                  })
                                }
                            >
                                <label>
                                <RiDeleteBin6Line className="del-position" />
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

export default ManageAssessment;