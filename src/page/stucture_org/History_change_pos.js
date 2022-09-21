import "../css/History_change_pos.css";
import Menubar from "../components/Menubar.js";
import { FaSearch} from "react-icons/fa";
import React from "react";

function History_change_pos() {



    return (
        <div className="box-modal-change-pos-history">
        <div className="box-change-pos-history">
            <Menubar />
            <div className="bg-change-pos-history">
            <div className="con-search-change-pos-history">
                <div className="search-change-pos-history">
                <label className="lbl-search">
                    <input
                    className="search-inp-change-pos-history"
                    type="text"
                    placeholder="ຄົ້ນຫາ..."
                    ></input>
                    <FaSearch className="filt-ic-change-pos-history" />
                </label>
                <button className="btn-search-change-pos-history">
                    ຄົ້ນຫາ
                </button>
                </div>
            </div>
            <div className="tb-change-pos-history">
                <div className="con-tbl-change-pos-history">
                <p className="p-man-change-pos-history">
                    ປະຫວັດການຍ້າຍຕຳແໜ່ງ
                </p>
                <div className='box-tbl-change-pos-history'>
                    <table className="tbl-change-pos-history">
                    <thead>
                        <tr>
                            <th>ລໍາດັບ</th>
                            <th>ວັນທີຍ້າຍ</th>
                            <th>ລະຫັດພະນັກງານ</th>
                            <th>ຮູບພະນັກງານ</th>
                            <th>ຊື່</th>
                            <th>ນາມສະກຸນ</th>
                            <th>ພະແນກ</th>
                            <th>ຕໍາແໜ່ງ</th>
                            <th>ເອກະສານອ້າງອີງ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tbl-row-no-change-pos-history"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
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

export default History_change_pos;