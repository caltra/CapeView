"use server";

import { findPlayerProfile } from "@/lib/service/players/findPlayerProfile";
import { ProfileProperties } from "@/types/responseTypes";

type SearchState = {
    error?: string;
    result?: ProfileProperties;
};

export async function searchPlayer(
    _previousState: SearchState,
    formData: FormData
): Promise<SearchState> {

    const username = formData.get("username");

    if (typeof username !== "string" || !username.trim()) {
        return { error: "enter a username." };
    }

    // Fetch service
    const profileResponse = await findPlayerProfile(username);

    if (profileResponse.error) return { error: profileResponse.error };

    return { result: profileResponse.player }
}