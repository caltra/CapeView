package com.capeview.capi.client.MojangSessionServer;

import com.fasterxml.jackson.annotation.JsonProperty;

public record DecodedTextures(
        long timestamp,
        String profileId,
        String profileName,
        Textures textures) {

    public record Textures(
            @JsonProperty ("SKIN") Texture skin,
            @JsonProperty("CAPE") Texture cape) {
    }

    public record Texture(
            String url,
            Metadata metadata) {
    }

    public record Metadata(String model) {
    }
}
