import React from "react";
import { useFormik } from "formik";
import { SignupValidations } from "./Validations";
import './Formnew.css'
import { formnewSignup } from "../Services/auth.service";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const initialValues = {
    first_name: "",
    last_name: "",
    add_line1:"",
    add_line2:"",
    state:"",
    city:"",
    mobile:"",
    password:"",
    email: "",
};
export const Formnew = () => {
  const navigate = useNavigate()

    const {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleReset,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: SignupValidations,
        onSubmit:async (values) => {
            console.log("submitted", values);
            const apiResponse = await formnewSignup(values)
            console.log(apiResponse);
            if(apiResponse.data.status){
                navigate("/Popup")
                localStorage.setItem("user",JSON.stringify(apiResponse.data.result))
        }
        },
    });
    return (
        <>
        <h2>
  <Link class="nav-link" to="/login">Login</Link>

        </h2>
            <section class="vh-100 gradient-custom">
                <div class="container py-5 h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-12 col-lg-9 col-xl-7">
                            <div class="card shadow-2-strong card-registration" border-radius="15px">
                                <div class="card-body p-4 p-md-5">
                                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form </h3>
                                    <form onSubmit={handleSubmit}>

                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input
                                                        type="text"
                                                        value={values?.first_name}
                                                        name="first_name"
                                                        onChange={handleChange}
                                                    /><br />
                                                    <label class="form-label">First Name</label>
                                                </div>
                                               
                                            </div>
                                            <div class="col-md-6 mb-4">
                                                <input
                                                    type="text"
                                                    value={values?.last_name}
                                                    name="last_name"
                                                    onChange={handleChange}
                                                /><br />
                                                <label class="form-label">Last Name</label>
                                                
                                                
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input
                                                        type="text"
                                                        value={values?.add_line1}
                                                        name="add_line1"
                                                        onChange={handleChange}
                                                    /><br />
                                                    <label class="form-label">add_line1</label>
                                                </div>
                                                {errors.add_line1 && touched.add_line1 ? (
                                                    <p className="text-danger">{errors.add_line1}</p>
                                                ) : null}
                                            </div>
                                            <div class="col-md-6 mb-4">
                                               
                                                <input
                                                    type="text"
                                                    value={values?.add_line2}
                                                    name="add_line2"
                                                    onChange={handleChange}
                                                /><br />
                                                <label class="form-label">add_line2</label>
                                                {errors.add_line2 && touched.add_line2 ? (
                                                    <p className="text-danger">{errors.add_line2}</p>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input
                                                        type="text"
                                                        value={values?.state}
                                                        name="state"
                                                        onChange={handleChange}
                                                    /><br />
                                                    <label class="form-label">state</label>
                                                </div>
                                                {errors.state && touched.state ? (
                                                    <p className="text-danger">{errors.state}</p>
                                                ) : null}
                                            </div>
                                            <div class="col-md-6 mb-4">
                                               
                                                <input
                                                    type="text"
                                                    value={values?.city}
                                                    name="city"
                                                    onChange={handleChange}
                                                /><br />
                                                <label class="form-label">city</label>
                                                {errors.city && touched.city ? (
                                                    <p className="text-danger">{errors.city}</p>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input
                                                        type="text"
                                                        value={values?.mobile}
                                                        name="mobile"
                                                        onChange={handleChange}
                                                    /><br />
                                                    <label class="form-label">mobile</label>
                                                </div>
                                                {errors.mobile && touched.mobile ? (
                                                    <p className="text-danger">{errors.mobile}</p>
                                                ) : null}
                                            </div>
                                            <div class="col-md-6 mb-4">
                                               
                                                <input
                                                    type="text"
                                                    value={values?.email}
                                                    name="email"
                                                    onChange={handleChange}
                                                /><br />
                                                <label class="form-label">email</label>
                                                {errors.email && touched.email ? (
                                                    <p className="text-danger">{errors.email}</p>
                                                ) : null}
                                            </div>
                                        </div>

                                        <input
                                            type="text"
                                            value={values?.password}
                                            name="password"
                                            onChange={handleChange}
                                        /><br/>
                                         <label>Password</label>
                                        {errors.password && touched.password ? (
                                            <p className="text-danger">{errors.password}</p>
                                        ) : null}<br/>


                                       
                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                             <button className="btn btn-primary btn-lg" type="submit" >
                                            Submit
                                        </button>
                                        </div>
                                        <div class="col-md-6 mb-4">

                                        <button className="btn btn-info btn-lg" onClick={handleReset}>
                                            Reset
                                        </button>
                    </div>
                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}