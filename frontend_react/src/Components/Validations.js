import * as Yup from 'yup'



export const SignupValidations = Yup.object({

   
    email:Yup.string().email('Enter a valid email!!!').required("Email is required*"),
    add_line1:Yup.string().required('Address Line1 is required*'),
    state:Yup.string().required('State is required*'),
    city:Yup.string().required('City is required*'),
    mobile:Yup.string().required('Mobile is required*').matches('^((\\+91-?)|0)?[0-9]{10}$','Enter 10 digit phone' ),
    password:Yup.string().required('Password is required*').min(8),

})

export const PopupValidations = Yup.object({
    email:Yup.string().email('Enter a valid email!!!').required("Email is required*"),
    add_line1:Yup.string().required('Address Line1 is required*'),
    state:Yup.string().required('State is required*'),
    city:Yup.string().required('City is required*'),
    number:Yup.string().required('Mobile is required*').matches('^((\\+91-?)|0)?[0-9]{10}$','Enter 10 digit phone' ),
   
})