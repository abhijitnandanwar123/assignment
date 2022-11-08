import React from 'react'
import { useEffect,useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Modal, ModalHeader } from "reactstrap"
import { formnewUpdate } from '../Services/auth.service'
export default function Dashboard() {
    const [show, setShow] = useState({})
    const [modal, setmodal] = useState(false)
    const navigate=useNavigate()
    useEffect(() => {
        // setShow(localStorage.getItem("user"))
        setShow(JSON.parse(localStorage.getItem('user') ))
    }, [])

    // const [input,setInput]=useState({
    //     firstname:" ",
    //     lastname:" ",
    //     add_line1:" ",
    //     add_line2:" ",
    //     state:" ",
    //     city:" ",
    //     number:" ",
    //     email:" ",
    //     password:" "
    //   })
     
    const user = JSON.parse(localStorage.getItem("user"));
  const initial = {
    _id: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    add_line1: user.address.add_line1,
    add_line2: user.address.add_line2,
    state: user.address.state,
    city: user.address.city,
    number: user.number,
    email: user.email,
  };
      console.log(initial);
      const updateuser = async (e) =>{
        e.preventDefault();
        const apiResponse=await formnewUpdate(show,show._id)
        console.log(apiResponse.data.result)
        if(apiResponse.data.status){
            localStorage.setItem("user",JSON.stringify(apiResponse.data.result))
            setmodal(false)
        }
      }
    
      const inputHandler= (e)=>{

        const {name,value}=e.target

        setShow((preValue)=>({
          ...preValue,
          [name]:value
        }))
      }

      const logout= ()=>{
        localStorage.clear()
        navigate("/login")
      }
      const closePopup = ()=>{
        console.log("inside popclose");
        setShow(JSON.parse(localStorage.getItem('user') ))

        setmodal(false)
      }
  return (
    <>
    <h1>welcome {show.firstname} {show.lastname}</h1>
         <Modal
                size=""
                isOpen={modal}
                toggle={() =>closePopup() }
            >
                <ModalHeader
                
                     //toggle={() => setmodal(!modal)}
                     toggle={() =>closePopup() }
                >

                    </ModalHeader>
                    <div>
                        <form type="submit" >

                        <div class="row form-group">
                         <div class="col-md-6 mb-4 form-group">
                                <div class="form-outline form-group">
                                    <input type="text" className="form-control form-control-lg" value={show.firstname} name="firstname" onChange={(e)=>inputHandler(e)}/>
                                    <label class="form-label" for="firstname">First Name</label>
                                </div>
                        </div>
                        <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" name="lastname" className="form-control form-control-lg" value={show.lastname} onChange={(e)=>inputHandler(e)} />
                                    <label class="form-label" >lastname</label>
                                </div>
                        </div>
                        </div>

                        <div class="row">
                         <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" name="add_line1" class="form-control form-control-lg" value={show.address.add_line1}  onChange={(e)=>inputHandler(e)} />
                                    <label class="form-label" for="add_line1">add_line1</label>
                                </div>
                        </div>
                        <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" id="add_line2" name="add_line2" class="form-control form-control-lg" value={show.address.add_line2}   onChange={(e)=>inputHandler(e)} />
                                    <label class="form-label" >add_line2</label>
                                </div>
                        </div>
                        </div>

                        <div class="row">
                         <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" name="state" class="form-control form-control-lg" value={initial.state} onChange={(e)=>inputHandler(e)} />
                                    <label class="form-label" for="state">state</label>
                                </div>
                        </div>
                        <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" name="city" class="form-control form-control-lg" value={initial.city}   onChange={(e)=>inputHandler(e)} />
                                    <label class="form-label" >city</label>
                                </div>
                        </div>
                        </div>

                        <div class="row">
                         <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" name="number" class="form-control form-control-lg" value={show.number} onChange={(e)=>inputHandler(e)} />
                                    <label class="form-label" for="mobile">mobile</label>
                                </div>
                        </div>
                        <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" name="email" class="form-control form-control-lg" value={show.email}  onChange={(e)=>inputHandler(e)} readOnly/>
                                    <label class="form-label" >email</label>
                                </div>
                        </div>
                        </div>


                        {/* <div class="row">
                         <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" name="passwaord" class="form-control form-control-lg" onChange={(e)=>inputHandler(e)}  />
                                    <label class="form-label" for="passwaord">Passwaord</label>
                                </div>
                        </div>

                        </div> */}


                           
                        <div class="row">
                         <div class="col-md-6 mb-4">
                            <button type="submit" class="btn btn-outline-success btn-rounded" onClick={updateuser}>Update</button>
                        </div>
                        <div class="col-md-6 mb-4">
                        </div>
                        </div>

                        </form>
                    </div>
               
            </Modal>
            <div align="right">
            <button class="btn btn-outline-success btn-rounded" data-mdb-ripple-color="dark" onClick={() => setmodal(true)}>
                Update Profile
            </button>

            <button class="btn btn-outline-danger btn-rounded" data-mdb-ripple-color="dark" onClick={() => logout()}>
                Logout
            </button>
            </div>
    </>
  )
}
