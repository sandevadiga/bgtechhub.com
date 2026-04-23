import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
    fullName: string;
    workEmail: string;
    phoneNumber: string;
    guests?: string;
    serviceInterest?: string;
    source?: string;
    specificService: string;
    projectStatus: string;
    vision: string;
    budget?: string; // 1. Added to Interface
    // New fields for the call booking
    selectedDate: Date;
    selectedTime: string;
    createdAt: Date;
}

const BookingSchema: Schema = new Schema({
    fullName: { type: String, required: true },
    workEmail: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    guests: { type: String },
    serviceInterest: { type: String },
    source: { type: String },
    specificService: { type: String, required: true },
    projectStatus: { type: String, required: true },
    vision: { type: String, required: true },
    budget: { type: String }, // 2. Added to Schema
    // Added these to the schema so they persist in the database
    selectedDate: { type: Date, required: true },
    selectedTime: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Check if the model exists before creating a new one (important for Next.js HMR)
const Booking = mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);

export default Booking;