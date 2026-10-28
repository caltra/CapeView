import { ProfileProperties, ProfileResponse, UuidResponse } from "@/types/responseTypes";


export async function findPlayerProfile(username: string) {
    // Find user UUID
    const uuidResponse = await fetch(
        `https://api.mojang.com/users/profiles/minecraft/${username}`
    );

    if (!uuidResponse.ok) return { error: "Invalid username." };

    const uuidData: UuidResponse = await uuidResponse.json();


    // Find user profile
    const profileResponse = await fetch(
        `https://sessionserver.mojang.com/session/minecraft/profile/${uuidData.id}`
    );

    if (!profileResponse) return { error: "Invalid UUID response." };

    const profileData: ProfileResponse = await profileResponse.json();


    // Decode base64 response
    const profileProperties = profileData.properties[0].value;

    const buffer = Buffer.from(profileProperties, 'base64');

    const decodedProfileProperties: ProfileProperties = JSON.parse(buffer.toString('utf8'));

    return { player: decodedProfileProperties };
}