import mongoose, { Schema, model, models } from 'mongoose';

const InquirySchema = new Schema({
    serviceId: { type: String, required: true },
    serviceTitle: { type: String, required: true },
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    budgetTier: { type: String },
    context: { type: String },
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now },
});

// This prevents re-defining the model if it already exists
export const Inquiry = models.Inquiry || model('Inquiry', InquirySchema);