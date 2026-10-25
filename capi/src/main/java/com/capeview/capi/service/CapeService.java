package com.capeview.capi.service;

import org.springframework.stereotype.Service;

import com.capeview.capi.repository.CapeRepository;

@Service 
public class CapeService {
    private final CapeRepository capeRepository;

    public CapeService (CapeRepository capeRepository) {
        this.capeRepository = capeRepository;
    }
}
