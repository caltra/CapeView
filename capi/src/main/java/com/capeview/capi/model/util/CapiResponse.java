package com.capeview.capi.model.util;

import java.time.Instant;

public record CapiResponse<T> (
    T data,
    String message,
    String error,
    Instant timestamp
) {}
