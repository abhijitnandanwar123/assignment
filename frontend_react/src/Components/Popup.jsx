import React, { useEffect, useState } from "react";
//import "./Dashboard.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
//import { userLogout, userUpdate } from "../services/auth.service";
import { useFormik } from "formik";
import { PopupValidations } from "./Validations";
import { formnewUpdate } from "../Services/auth.service";
const Popup = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const initial = {
    _id: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    add_line1: user.address?.add_line1,
    add_line2: user.address?.add_line2,
    state: user.address?.state,
    city: user.address?.city,
    number: user.number,
    email: user.email,
  };

  const [show, setShow] = useState(false);
  const { values, errors, touched, 
    handleChange, handleSubmit } = useFormik({
    initialValues: initial,
    validationSchema: PopupValidations,
    onSubmit: async (values) => {
      const apiResponse=await formnewUpdate(values,values._id)
      //console.log("dfdf",apiResponse.data.result)
      if(apiResponse.data.status){
          localStorage.setItem("user",JSON.stringify(apiResponse.data.result))
          //setmodal(false)
          handleClose()
      }
    },
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login")
    
  };
  console.log("mobile",values.mobile);


  return (
    <>
      <div className="text-right mt-3 mr-3">
        <Button variant="primary" onClick={handleShow}>
          Update Profile
        </Button>{" "}
        <Button variant="danger" onClick={() => handleLogout()}>
          Logout
        </Button>{" "}
      </div>
      <br />
      <br />
      <br />
      <br />

      <p>Welcome {values.firstname} {values.lastname}</p>
      {/* -------------------------Popup------------------------------------- */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={values?.firstname}
                  name="firstname"
                  onChange={handleChange}
                />
                {errors.first_name && touched.first_name ? (
                  <p className="text-danger">{errors.first_name}</p>
                ) : null}
                <Form.Label>Address Line1</Form.Label>
                <Form.Control
                  type="text"
                  value={values?.add_line1}
                  name="add_line1"
                  onChange={handleChange}
                />
                {errors.add_line1 && touched.add_line1 ? (
                  <p className="text-danger">{errors.add_line1}</p>
                ) : null}
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  value={values?.state}
                  name="state"
                  onChange={handleChange}
                />
                {errors.state && touched.state ? (
                  <p className="text-danger">{errors.state}</p>
                ) : null}
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="number"
                  value={values?.number}
                  name="number"
                  onChange={handleChange}
                />
                {errors.number && touched.number ? (
                  <p className="text-danger">{errors.number}</p>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={values?.lastname}
                  name="lastname"
                  onChange={handleChange}
                />
                {errors.last_name && touched.last_name ? (
                  <p className="text-danger">{errors.last_name}</p>
                ) : null}
                <Form.Label>Address Line2 </Form.Label>
                <Form.Control
                  type="text"
                  value={values?.add_line2}
                  name="add_line2"
                  onChange={handleChange}
                />
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  value={values?.city}
                  name="city"
                  onChange={handleChange}
                />
                {errors.city && touched.city ? (
                  <p className="text-danger">{errors.city}</p>
                ) : null}
                <Form.Label>Email </Form.Label>
                <Form.Control type="text" value={values?.email} readOnly />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
