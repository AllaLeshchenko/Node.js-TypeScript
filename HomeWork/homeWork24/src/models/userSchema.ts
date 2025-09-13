import { Schema, model, Document } from "mongoose";

interface UserInt extends Document {
  name: string;
  age?: number;
  createdAt: Date;
};

const userSchema = new Schema<UserInt> ({
  name: { type: String, required: true },
  age: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

const User = model<UserInt>('User', userSchema);

export default User;