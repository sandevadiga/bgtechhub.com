import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  type?: string;
  phone?: string;
  budget?: string;
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema: Schema<IContact> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String },
    phone: { type: String },
    budget: { type: String },
  },
  { timestamps: true }
);

const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);

export default Contact;
