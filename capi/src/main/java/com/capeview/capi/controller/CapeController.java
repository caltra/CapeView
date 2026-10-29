package com.capeview.capi.controller;

import java.time.Instant;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capeview.capi.model.cape.Cape;
import com.capeview.capi.model.cape.CapeRequest;
import com.capeview.capi.model.util.CapiResponse;
import com.capeview.capi.service.CapeService;

@RestController
@RequestMapping("/api/capes")
public class CapeController {
    private final CapeService capeService;

    public CapeController(CapeService capeService) {
        this.capeService = capeService;
    }

    @PostMapping
    public ResponseEntity<CapiResponse<Cape>> postNewCape(@RequestBody CapeRequest capeRequest) {

        Cape cape = capeService.saveNewCape(capeRequest);

        CapiResponse<Cape> response = new CapiResponse<>(
                cape,
                "New cape saved successfully.",
                null,
                Instant.now());

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(response);
    }
}
