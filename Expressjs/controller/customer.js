import mongoose from 'mongoose'
import Customer from '../model/customer'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import  genSaltSync  from 'bcryptjs'
import { _makeLong } from 'path'
const salt = bcrypt.genSaltSync(10);

export const customerSignup = async(req,res) => {
    console.log(req.body.password);
    const customerdata = new Customer({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        address: {
          add_line1:req.body.add_line1,
          add_line2:req.body.add_line2,
          state:req.body.state,
          city:req.body.city,
          
        },
        email:req.body.email,
        number:req.body.number,
        password:bcrypt.hashSync(req.body.password,8 )
    })
    
const  result= await customerdata.save()
console.log(result);
    //res.send({status:"200",message:"Successfully Added", result:result})
    try{
    if (result) {
      let payload = {};
      payload._id = result._id;

      jwt.sign(
        payload,
        "SECRET_KEY",
        {
          expiresIn: "24h",
        },
        (err, token) => {
          res.send({
            token: token,
            status: true,
            statusCode: 200,
            message: "Registerd Successfully",
            result: result,
          });
        }
      );
    }
  } catch (error) {
    throw error;
  }
}

export const customerLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(password);
      const result = await Customer.findOne({ email });
      const isValid = bcrypt.compareSync(password, result.password);
  
      let payload = {};
      payload.id = result.id;
      payload.email = result.email;
  
  
      jwt.sign(payload, 'SECRET_KEY', {
        "expiresIn": "24h"
      },
        (err, token) => {
          if (isValid) {
            return res.send({ status: 200, message: "Login Success", token: token,result:result })
          } else {
            return res.send({ status: 401, message: "Login Failed", result: err })
          }
        }
      )
    } 
    catch (e) {
      throw e
    }
  }

  export const getCustomerbyid = async (req, res) => {
    try {
      var id = req.body.id;
      console.log(id,"od");
      var result = await Customer.findById(id)
      console.log(result);
      res.send({ "status": 200, "message": "Success", result: result })
     // console.log(result)
    }
    catch (e) {
      throw e
    }
  }

  export const updateUser = async (req, res) => {
    console.log(req.body.firstname,req.body.lastname);
    try {
      let data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address:{
          add_line1: req.body.add_line1,
          add_line2: req.body.add_line2,
          city: req.body.city,
          state: req.body.state,
        },
        number: req.body.number,
      };
      
      console.log(req.body._id);
      const result = await Customer.findByIdAndUpdate(
        { _id: mongoose.Types.ObjectId(req.body._id) },
        { $set: data },
        { new:true }
      );
  
      if (!result) {
        res.send({
          status: false,
          statusCode: 400,
          message: `Updation Failed!!
  Something went wrong`,
          result: result,
        });
      } else {
        res.send({
          status: true,
          statusCode: 200,
          message: "Successfully Updated",
          result: result,
        });
      }
    } catch (e) {
      throw e;
    }
  };