import mongoose, { Schema, Document } from "mongoose";

export interface IAcademyApplication extends Document {
    fullName: string;
    email: string;
    phoneNumber: string;
    location: string; // City, State
    collegeName: string;
    currentStatus: "Student" | "Graduate" | "Working Professional";
    skillLevel: "Beginner" | "Intermediate" | "Advanced";
    reasons: string[]; // Job, Projects, Career Switch, etc.
    preferredDomain: string; // Web, App, AI/ML, etc.
    projectName: string;
    projectDescription: string;
    createdAt: Date;
}

const AcademyApplicationSchema: Schema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    location: { type: String, required: true },
    collegeName: { type: String, required: true },
    currentStatus: { 
        type: String, 
        enum: ["Student", "Graduate", "Working Professional"], 
        required: true 
    },
    skillLevel: { 
        type: String, 
        enum: ["Beginner", "Intermediate", "Advanced"], 
        required: true 
    },
    reasons: { type: [String], required: true },
    preferredDomain: { type: String, required: true },
    projectName: { type: String, required: true },
    projectDescription: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const AcademyApplication = mongoose.models.AcademyApplication || mongoose.model<IAcademyApplication>("AcademyApplication", AcademyApplicationSchema);

export default AcademyApplication;
