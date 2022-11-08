import axios from 'axios'
const API_URL = "http://localhost:8201/"


const Token=localStorage.getItem("token")

let axiosConfig ={
    header:{
        'Content-Type':'application/json',
        Authorization:Token
    }
}


export const formnewSignup = async(values)=>{
   console.log(values);
   return axios.post(
    API_URL+"customer/customerSignup",
    {
        firstname:values.first_name,
        lastname:values.last_name,
          add_line1:values.add_line1,
          add_line2:values.add_line2,
          state:values.state,
          city:values.city,
        email:values.email,
        number:values.mobile,
           password:values.password
    },
    axiosConfig
)
}
export const loginCustomer =async (email,password)=>{
    return axios.post(
        API_URL+"customer/customerlogin",
        {
                email,
                password
        },
        axiosConfig
    )
    
    
}
export const formnewUpdate = async(values,_id)=>{
   // console.log(values.firstname,_id,"update");
    //console.log(localStorage.getItem("user.id")); 
    return axios.put(
     API_URL+"customer/updateCustomer",
     {
        _id:_id,
         firstname:values.firstname,
         lastname:values.lastname,
           add_line1:values.add_line1,
           add_line2:values.add_line2,
           state:values.state,
           city:values.city,
         number:values.number,
            password:values.password
     },
     axiosConfig
 )
 }

    