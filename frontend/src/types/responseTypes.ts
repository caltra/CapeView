

export interface UuidResponse {
    id: string;
    name: string;
}

export interface ProfileResponse {
    id: string;
    name: string;
    properties: [
        {
            name: string;
            value: string;
        }
    ];
    profileActions: [];
}

export interface ProfileProperties {
    timestamp: number;
    profileId: string;
    profileName: string;
    textures: {
        SKIN?: {
            url?: string;
            metadata?: {
                model?: string;
            };
        };
        CAPE?: {
            url?: string;
        };
    };
}

export interface CapeProperties {
    texture_key: string;
    source: string;
    name: string;
    url: string;
    wearers: number;
    first_seen: Date;
    first_worn: Date;
    last_worn: Date;
}