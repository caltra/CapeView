package com.capeview.capi.client.McApi;

import java.util.Optional;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component 
public class McApiClient {
    private final RestClient restClient;

    public McApiClient(RestClient.Builder builder) {
        this.restClient = builder
            .baseUrl("https://mc-api.bisai.dev")
            .build();
    }

    public Optional<McApiCape> findExternalCapeByHash(String hash) {
        
        McApiCape cape = restClient.get()
            .uri("/v1/capes/{hash}", hash)
            .retrieve()
            .body(McApiCape.class);

        return Optional.ofNullable(cape);
    }
}
