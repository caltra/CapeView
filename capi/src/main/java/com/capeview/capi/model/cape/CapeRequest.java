package com.capeview.capi.model.cape;

import java.time.Instant;

import com.capeview.capi.enums.cape.Rarity;

public record CapeRequest(
    String hash,
    String name,
    Long wearers,
    Instant firstSeen,
    Rarity rarity
) {}
