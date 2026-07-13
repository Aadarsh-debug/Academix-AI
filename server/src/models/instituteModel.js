import mongoose from "mongoose";
const institutionSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },

    instituteName:String,

    phone:String,

    website:String,

    address:String,

    description:String,

    logo:String

},{timestamps:true});

const Institutionmodel = mongoose.model('Institution', institutionSchema);
export default Institutionmodel;