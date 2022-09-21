import React, { useState } from 'react'
import Menubar from "../components/Menubar.js";
import "../css/CreateAssessment.css";
import { FaPlusCircle } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";


function CreateAssessment() {

  // const [num, setNum]=useState([1]);
  // const plusNum=()=>{
  //   const numTitle=[...num,[]]
  //   setNum(numTitle+1)
  // }

  const [val,setVal]=useState([]);
  const handleAddInp=()=>{
    const addInput=[...val,[]]
    setVal(addInput)
    
  }

  const btnHandleChange=(onChangeValueTitleOne,i)=>{
    const inputDataTitleOne=[...val]
    inputDataTitleOne[i]=onChangeValueTitleOne.target.value;
    setVal(inputDataTitleOne)
  }




  const handleDeleteInp=(i)=>{
    const deleteInput=[...val]
    deleteInput.splice(i,1)
    setVal(deleteInput)
  }


  // ເບີີ່ງຂໍ້ມູນໃນ console
  console.log(val,"data-")

  return (
    <div className="box-modal-create-ass">
        <div className="box-create-ass">
            <Menubar />
            <div className="bg-create-ass">
              <div className='box-tag-create-ass'>
              <div className="box-tag-create-ass">
                  <p className="p-man-create-ass">
                    ສ້າງແບບປະເມີນ
                  </p>
                  <div className="con-title-create-ass">
                      <div className="box-title-create-ass">
                          <IoDocumentText className="file-ic-create-ass" />
                            <input
                            className="title-inp-create-ass"
                            type="text"
                            placeholder="ປ້ອນຊື່ແບບປະເມີນ..."
                            >
                            </input>
                      </div>
                      <div className="box-btn-save-create-ass">
                        <button
                            className="btn-save-create-ass"
                            
                            >
                            <label className="lbl-ic-p-create-ass">
                                <IoIosSave className='btn-save-title'/>
                            </label>
                            ບັນທຶກແບບປະເມີນ
                        </button>
                      </div>
                      <div className="box-title-1-create-ass">
                        <div className='title-1-create-ass'>
                          <label className='lbl-big-title'>1.</label>
                          <input className='inp-title-1-create-ass'
                            type="text"
                            placeholder="ປ້ອນຊື່ຫົວຂໍ້ໃຫຍ່ແບບປະເມີນ..."
                          >
                          </input>
                        </div>
                        <div className='title-1_1-create-ass'>
                        {val.map((data,i)=>{
                          
                          return(
                            <div className="box-inp-title-1_1-create-ass" key={i}>
                              <span className='num-title-1_1-create-ass'>1-1.</span>
                              <input className='inp-title-1_1-create-ass'
                                type="text"
                                value={data}
                                placeholder="ປ້ອນຊື່ຫົວຂໍ້ຍ່ອຍແບບປະເມີນ"
                                onChange={e=>btnHandleChange(e,i) }
                              >
                              </input>
                              <button className='btn-delete-title-1_1-create-ass'
                              onClick={()=>handleDeleteInp(i)}
                              >
                                <RiDeleteBin6Line className='icon-delete-title-1_1-create-ass'/>
                              </button>
                            </div>
                            
                            )
                        })}
                        <div className='box-btn-plus-title-create-ass'>
                          <button
                            className="btn-plus-title-create-ass"
                            onClick={() => {handleAddInp()}}
                            >
                            <label className="lbl-ic-plt-create-ass">
                                <FaPlusCircle />
                            </label>
                            ເພີ່ມຫົວຂໍ້ຍ່ອຍ
                          </button>
                        </div>
                        
                        </div>
                      </div>

                  </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CreateAssessment