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
        return NextResponse.json(profile);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch profile" },
            { status: 500 }
        );
    }

}