import { CapeProperties, ProfileProperties } from "@/types/responseTypes";


export async function findPlayerCape(profile: ProfileProperties) {
    // Check for cape hash
    if (!profile.textures.CAPE?.url) return;

    // Extract hash
    const url = new URL(profile.textures.CAPE.url);

    const hash = url.pathname.split("/").pop();

    // Request cape data from mc-api endpoint with extracted hash
    const capeResponse = await fetch(
        `https://mc-api.bisai.dev/v1/capes/${hash}`
    );

    if (!capeResponse.ok) {
        console.error("Failed to fetch cape data from external source.");
        return;
    }

    const capeProperties: CapeProperties = await capeResponse.json();

    return { data: capeProperties };
}