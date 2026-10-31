package com.capeview.capi.client.McApi;

import java.time.Instant;

public record McApiCape(
    String texture_key,
    String source,
    String name,
    String url,
    Long wearers,
    Instant first_seen,
    Instant first_worn,
    Instant last_worn
) {}
