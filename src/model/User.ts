import { Schema, Document } from "mongoose";

// MESSAGE TYPE
export interface IMessage extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<IMessage> = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

// USER TYPES
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isAcceptingMessage: boolean;
  message: IMessage[];
}

// USER SCHEMA
const UserSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^[^@]+@[^@]+\.[^@]+$/, "please enter valid mail"],
  },
  password: { type: String, required: [true, "password is required"] },
  verifyCode: { type: String, required: [true, "Verify code is required"] },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "verify code expiry is required"],
  },
  isAcceptingMessage: { type: Boolean },
  message: MessageSchema
});
