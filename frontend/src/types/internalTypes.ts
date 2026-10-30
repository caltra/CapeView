

type Rarity = "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY" | "UNIQUE";

export interface CapiResponse<T> {
    data: T;
    message: string;
    error: string | null;
    timestamp: Date;
}

export interface InternalCape {
    hash: string;
    name: string;
    wearers: number;
    firstSeen: Date;
    rarity: Rarity;
}