package com.capeview.capi.client.MojangSessionServer;

import java.util.Optional;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component 
public class MojangSessionServerClient {
    private final RestClient restClient;

    public MojangSessionServerClient(RestClient.Builder builder) {
        this.restClient = builder
            .baseUrl("https://sessionserver.mojang.com")
            .build();
    }

    public Optional<MojangSessionServerPlayer> findExternalPlayerByUuid(String uuid) {
        
        MojangSessionServerPlayer player = restClient.get()
            .uri("/session/minecraft/profile/{uuid}", uuid)
            .retrieve()
            .body(MojangSessionServerPlayer.class);

        return Optional.ofNullable(player);
    }
}
