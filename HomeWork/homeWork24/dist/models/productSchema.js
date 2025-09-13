import { Schema, model } from "mongoose";
;
const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number },
    createdAt: { type: Date, default: Date.now },
});
const User = model('User', userSchema);
export default User;
//# sourceMappingURL=productSchema.js.map