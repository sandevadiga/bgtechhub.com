import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import AcademyApplication from "@/models/AcademyApplication";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { 
            fullName, 
            email, 
            phoneNumber, 
            location, 
            collegeName, 
            currentStatus, 
            skillLevel, 
            reasons, 
            preferredDomain, 
            projectName,
            projectDescription 
        } = body;

        // Validation
        if (!fullName || !email || !phoneNumber || !location || !collegeName || !currentStatus || !skillLevel || !reasons || !preferredDomain || !projectName || !projectDescription) {
            return NextResponse.json({ error: "Required fields are missing" }, { status: 400 });
        }

        await connectDB();

        const newApplication = await AcademyApplication.create({
            fullName,
            email,
            phoneNumber,
            location,
            collegeName,
            currentStatus,
            skillLevel,
            reasons,
            preferredDomain,
            projectName,
            projectDescription,
        });

        return NextResponse.json({ success: true, data: newApplication }, { status: 201 });
    } catch (error: any) {
        console.error("Academy API Error:", error);
        return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
    }
}
