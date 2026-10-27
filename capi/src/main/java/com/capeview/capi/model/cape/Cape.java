package com.capeview.capi.model.cape;

import java.time.LocalDate;

import com.capeview.capi.enums.cape.Rarity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity 
public class Cape {
    // Shape
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "texture_hash")
    private String textureHash;

    @Column(name = "release_date")
    private LocalDate releaseDate;

    @Column(name = "owners")
    private Long owners;

    @Enumerated(EnumType.STRING)
    @Column(name = "rarity")
    private Rarity rarity;

    // Constructors
    protected Cape() {
    }

    public Cape(String name, String textureHash, LocalDate releaseDate, Long owners, Rarity rarity) {
        this.name = name;
        this.textureHash = textureHash;
        this.releaseDate = releaseDate;
        this.owners = owners;
        this.rarity = rarity;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getTextureHash() {
        return textureHash;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public Long getOwners() {
        return owners;
    }

    public Rarity getRarity() {
        return rarity;
    }

    // Setters
    public void setName(String name) {
        this.name = name;
    }

    public void setTextureHash(String textureHash) {
        this.textureHash = textureHash;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public void setOwners(Long owners) {
        this.owners = owners;
    }

    public void setRarity(Rarity rarity) {
        this.rarity = rarity;
    }
}
