package com.capeview.capi.model.cape;

import java.time.Instant;

import com.capeview.capi.enums.cape.Rarity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;

@Entity 
public class Cape {
    // Shape
    @Id 
    private String hash;

    @Column(name = "name")
    private String name;

    @Column(name = "wearers")
    private Long wearers;

    @Column(name = "first_seen")
    private Instant firstSeen;

    @Enumerated(EnumType.STRING)
    @Column(name = "rarity")
    private Rarity rarity;

    // Constructors
    protected Cape() {
    }

    public Cape(String hash, String name, Long wearers, Instant firstSeen, Rarity rarity) {
        this.hash = hash;
        this.name = name;
        this.wearers = wearers;
        this.firstSeen = firstSeen;
        this.rarity = rarity;
    }

    // Getters
    public String getHash() {
        return hash;
    }

    public String getName() {
        return name;
    }

    public Long getWearers() {
        return wearers;
    }

    public Instant getFirstSeen() {
        return firstSeen;
    }

    public Rarity getRarity() {
        return rarity;
    }

    // Setters
    public void setHash(String hash) {
        this.hash = hash;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setWearers(Long wearers) {
        this.wearers = wearers;
    }

    public void setFirstSeen(Instant firstSeen) {
        this.firstSeen = firstSeen;
    }

    public void setRarity(Rarity rarity) {
        this.rarity = rarity;
    }
}
