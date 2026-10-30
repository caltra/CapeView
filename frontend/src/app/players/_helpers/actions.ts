"use server";

import { findPlayerCape } from "@/lib/service/players/findPlayerCape";
import { findPlayerProfile } from "@/lib/service/players/findPlayerProfile";
import { ProfileProperties } from "@/types/responseTypes";

type SearchState = {
    error?: string;
    result?: string;
};

export async function searchPlayer(
    _previousState: SearchState,
    formData: FormData
): Promise<SearchState> {

    const username = formData.get("username");

    if (typeof username !== "string" || !username.trim()) {
        return { error: "enter a username." };
    }

    // Fetch player properties
    const profileResponse = await findPlayerProfile(username);

    if (profileResponse.error || !profileResponse.player) return { error: profileResponse.error };

    const profileProperties: ProfileProperties = profileResponse.player;

    // Fetch player's current cape
    const capeResponse = await findPlayerCape(profileProperties);

    if (!capeResponse?.data) return { error: "Player does not have a cape equipped."};

    return { result: capeResponse.data.name }
}