import mongoose from "mongoose";

export interface User {
    name: string;
    email: string;
    isGoogleUser?: boolean;
    password: string;
    jobTitle?: string;
    createdAt?: Date;
}

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isGoogleUser: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model<User & mongoose.Document>("User", userSchema);
export default UserModel;