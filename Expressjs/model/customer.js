
import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
    {
        firstname:{
            type:String,
            // required:true
        },
        lastname:{
            type:String,
            //required:true
        },
        address: {
            add_line1: {
              type: String,
            },
            add_line2: {
              type: String,
            },
            state: {
              type: String,
            },
            city: {
              type: String,
            },
          },
        email:{
            type:String,
            //required:true,
        },
        number:{
            type:Number,
           // required: true,
        },
        password:{
            type:String,
            //required:true
        }


    }
)
const Customer = mongoose.model("customer",customerSchema);
export default Customer