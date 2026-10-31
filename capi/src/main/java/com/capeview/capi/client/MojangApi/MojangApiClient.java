package com.capeview.capi.client.MojangApi;

import java.util.Optional;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component 
public class MojangApiClient {
    private final RestClient restClient;

    public MojangApiClient(RestClient.Builder builder) {
        this.restClient = builder
            .baseUrl("https://api.mojang.com")
            .build();
    }

    public Optional<MojangApiPlayer> findExternalPlayerByUsername(String username) {

        MojangApiPlayer player = restClient.get()
            .uri("/users/profiles/minecraft/{username}", username)
            .retrieve()
            .body(MojangApiPlayer.class);

        return Optional.ofNullable(player);
    }
}
