"use server";

import { DecodedExternalProperties, ExternalProfile, ExternalUser, InternalProfile } from "@/types/userTypes";


export async function findProfile(input: string): Promise<InternalProfile | undefined> {
    const uuidApi = process.env.MOJANG_UUID_ENDPOINT;
    const profileApi = process.env.MOJANG_PROFILE_ENDPOINT;

    if (!uuidApi || !profileApi || !input) throw new Error("Missing API config or username");

    try {
        const uuidResponse = await fetch(`${uuidApi}/${input}`);
        if (!uuidResponse.ok) {
            console.error(`UUID API response failed in findProfile() with status: ${uuidResponse.status}`);
            return undefined;
        } 
        
        const uuidData: ExternalUser = await uuidResponse.json();
        
        // Find profile with supplied UUID
        if (uuidData.id) {
            try {
                const profileResponse = await fetch(`${profileApi}/${uuidData.id}`);
                if (!profileResponse.ok) {
                    console.error(`Profile API response failed in findProfile() with status: ${profileResponse.status}`);
                    return undefined;
                }
                    
    
                const profileData: ExternalProfile = await profileResponse.json();

                // Decode base64 response
                const decodedValue: string = Buffer.from(profileData.properties[0].value, 'base64').toString('utf-8');
                const decodedObj: DecodedExternalProperties = JSON.parse(decodedValue);
                
                const decodedProfile: InternalProfile = {
                    id: profileData.id,
                    name: profileData.name,
                    skin: decodedObj.textures?.SKIN?.url,
                    cape: decodedObj.textures?.CAPE?.url
                }
    
                return decodedProfile;
            } catch (error) {
                if (error instanceof Error) throw error;
                else throw new Error(String(error));
            }
        }
    } catch (error) {
        if (error instanceof Error) throw error;
        else throw new Error(String(error));
    }
}