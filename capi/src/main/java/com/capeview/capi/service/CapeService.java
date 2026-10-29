package com.capeview.capi.service;

import org.springframework.stereotype.Service;

import com.capeview.capi.model.cape.Cape;
import com.capeview.capi.model.cape.CapeRequest;
import com.capeview.capi.repository.CapeRepository;

@Service
public class CapeService {
    private final CapeRepository capeRepository;

    public CapeService(CapeRepository capeRepository) {
        this.capeRepository = capeRepository;
    }

    // Save a new cape to the 'cape' table if no matching cape is found
    public Cape saveNewCape(CapeRequest capeRequest) {
        Cape foundCape = capeRepository.findByHash(capeRequest.hash());

        if (foundCape != null) {
            throw new IllegalArgumentException("Cape with hash: [ " + foundCape.getHash() + " ] already exists.");
        }

        Cape newCape = new Cape(
                capeRequest.hash(),
                capeRequest.name(),
                capeRequest.wearers(),
                capeRequest.firstSeen(),
                capeRequest.rarity());

        capeRepository.save(newCape);

        return newCape;
    }
}
