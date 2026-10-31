package com.capeview.capi.client.MojangSessionServer;

import java.util.List;

import com.fasterxml.jackson.databind.JsonNode;

public record MojangSessionServerPlayer(
        String id,
        String name,
        List<ProfileProperty> properties,
        List<JsonNode> profileActions) {

    public record ProfileProperty(String name, String value) {}
}
