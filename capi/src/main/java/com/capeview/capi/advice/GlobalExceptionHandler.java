package com.capeview.capi.advice;

import java.time.Instant;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.capeview.capi.model.util.CapiResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<CapiResponse<Void>> handleIllegalArgumentException(IllegalArgumentException ex) {

        CapiResponse<Void> response = new CapiResponse<>(
                null,
                "Invalid argument(s) received.",
                ex.getMessage(),
                Instant.now());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(response);
    }
}
