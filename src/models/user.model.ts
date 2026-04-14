import mongoose, { Document, Schema } from "mongoose";

export enum UserRole {
  PATIENT = "PATIENT",
  DOCTOR = "DOCTOR",
  ADMIN = "ADMIN",
}

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  age?: number;
  gender?: string;
  profilePicture?: string;
  role: UserRole[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // security 🔥
    },
    phoneNumber: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE"],
    },
    profilePicture: {
      type: String,
    },
    role: {
      type: [String],
      enum: Object.values(UserRole),
      default: [UserRole.PATIENT],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export const userModel = mongoose.model<IUser>("User", userSchema);
