import mongoose, { Schema } from "mongoose";

interface IUser {
    name: string;
    email: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
}, {timestamps: true});

export default mongoose.model("User", userSchema);