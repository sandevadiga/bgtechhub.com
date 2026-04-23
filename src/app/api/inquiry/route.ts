import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db"; // Adjust path to your actual db.ts location
import { Inquiry } from "@/models/Inquiry";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { serviceId, serviceTitle, customerName, email, budgetTier, context } = body;

        // Validation
        if (!customerName || !email || !serviceId) {
            return NextResponse.json({ error: "Required fields are missing" }, { status: 400 });
        }

        await connectDB();

        const newInquiry = await Inquiry.create({
            serviceId,
            serviceTitle,
            customerName,
            email,
            budgetTier,
            context,
        });

        return NextResponse.json({ success: true, data: newInquiry }, { status: 201 });
    } catch (error: any) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
    }
}