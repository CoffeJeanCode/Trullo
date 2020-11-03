import { Document, Schema, model } from "mongoose";
import bcrypt from "bcrypt";

interface UserSchema extends Document {
  username: string;
  email: string;
  password: string;
  encrypPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}

const schema = new Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

schema.methods.encrypPassword = async function (
  password: string
): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

schema.methods.validatePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export default model<UserSchema>("User", schema);
