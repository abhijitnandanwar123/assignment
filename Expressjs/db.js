import mongoose from "mongoose";
const config = require("./config/config");
const configValue =config.get("local");

const DB = configValue["DB"];

const option = {

    user:DB.userName,
    pass:DB.Password,

}

const MONGOURL = `mongodb://${DB.HOST}:${DB.PORT}/${DB.DATABASE}`
console.log(MONGOURL)
export const mongoconnecton = async ()=>{
try{
await mongoose.connect(MONGOURL,option);
console.log ("connected to DB");
}
catch(e)
{
console.log(e)
throw e
}
}