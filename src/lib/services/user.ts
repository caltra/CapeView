"use server";

import { ExternalUser } from "@/types/userTypes";


export async function findProfile(input: string): Promise<ExternalUser | undefined> {
    const baseUrl = process.env.MOJANG_PROFILE_API_ENDPOINT;

    if (!baseUrl || !input) {
        throw new Error("Missing API config or username");
    }

    const response = await fetch(`${baseUrl}/${input}`);

    if (!response.ok) {
        throw new Error(`External API in findProfile() responded with status: ${response.status}`);
    }

    return response.json();
}