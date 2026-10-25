package com.capeview.capi.model.cape;

import com.capeview.capi.enums.cape.Rarity;

public record CapeRequest(
    String name,
    String textureHash,
    String releaseDate,
    Long owners,
    Rarity rarity
) {}
