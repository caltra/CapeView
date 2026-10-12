"use server";

import { findProfile } from "@/lib/services/user";
import { NextRequest, NextResponse } from "next/server";


type RouteParams = {
    params: Promise<{ name: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
    const { name } = await params;

    if (!name) {
        return NextResponse.json({ error: "Missing user name" }, { status: 400 });
    }

    try {
        const profile = await findProfile(name);

        if (profile) return NextResponse.json(profile);

        else return new NextResponse(null, { status: 204 })
    } catch (error) {
        console.error("findProfile route failed:", error)
        return NextResponse.json(
            { error: "Failed to fetch profile" },
            { status: 500 }
        );
    }

}