import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Student', 'Teacher','Institution'] ,required: true },
    profileCompleted: {
    type: Boolean,
    default: false
},
    verified: { type: Boolean, default: false }
}, { timestamps: true });

const Usermodel = mongoose.model('Usermodel', userSchema);

export default Usermodel;