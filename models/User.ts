import mongoose, { Schema, mongo } from "mongoose";

interface IUser {
    name: string;
    email: string;
    password: string
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true}
}, {timestamps: true});

const User = mongoose.models.User || mongoose.model("User", userSchema); 
export default User;