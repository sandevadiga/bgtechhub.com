import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";

export async function POST(req: Request) {
    try {
        // 1. Connect to MongoDB
        await connectDB();

        // 2. Parse the body
        const body = await req.json();
        const {
            selectedDate, // Added this
            selectedTime,  // Added this
            fullName,
            workEmail,
            phoneNumber,
            guests,
            budget,
            serviceInterest,
            source,
            specificService,
            projectStatus,
            vision,

        } = body;

        // 3. Validation: Ensure the date and time are provided
        if (!selectedDate || !selectedTime) {
            return NextResponse.json(
                { error: "Missing required fields: selectedDate and selectedTime are mandatory." },
                { status: 400 }
            );
        }

        // 4. Create the document in MongoDB
        const newBooking = await Booking.create({
            fullName,
            workEmail,
            phoneNumber,
            guests,
            serviceInterest,
            source,
            specificService,
            projectStatus,
            vision,
            selectedDate, // Now being saved
            selectedTime, // Now being saved
            budget
        });

        // 5. Return the JSON response including the new data
        return NextResponse.json(
            {
                message: "Booking created successfully",
                data: newBooking
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error", details: error.message },
            { status: 500 }
        );
    }
}