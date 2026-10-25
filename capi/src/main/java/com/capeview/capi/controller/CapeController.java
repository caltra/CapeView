package com.capeview.capi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capeview.capi.service.CapeService;

@RestController 
@RequestMapping("/api/capes")
public class CapeController {
    private final CapeService capeService;

    public CapeController(CapeService capeService) {
        this.capeService = capeService;
    }
}
