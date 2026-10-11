
export interface ExternalUser {
    id: string;
    name: string;
}

export interface ExternalProfile {
    id: string;
    name: string;
    properties: [
        {
            name: string;
            value: string;
        }
    ],
    profileActions: [];
}

export interface DecodedExternalProperties {
    timestamp: number;
    profileId: string;
    profileName: string;
    textures?: {
        SKIN?: {
            url?: string;
            metatdata?: object[];
        },
        CAPE?: {
            url?: string;
        }
    }
}

export interface InternalProfile {
    id: string;
    name: string;
    skin?: string;
    cape?: string;
}