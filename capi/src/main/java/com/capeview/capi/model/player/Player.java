package com.capeview.capi.model.player;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

@Entity
public class Player {
    // Shape
    @Id
    @Column(name = "uuid")
    private String uuid;

    @Column(name = "username")
    private String username;

    // Skin
    @Column(name = "current_skin_hash")
    private String currentSkinHash;

    @ElementCollection
    @CollectionTable(name = "player_skin_history", joinColumns = @JoinColumn(name = "player_uuid"))
    @Column(name = "skin_hash")
    private Set<String> knownSkinHashes = new HashSet<>();

    // Cape
    @Column(name = "current_cape_hash")
    private String currentCapeHash;

    @ElementCollection
    @CollectionTable(name = "player_cape_history", joinColumns = @JoinColumn(name = "player_uuid"))
    @Column(name = "cape_hash")
    private Set<String> knownCapeHashes = new HashSet<>();

    // Constructors
    protected Player() {
    }

    public Player(String uuid, String username, String currentSkinHash, Set<String> knownSkinHashes,
            String currentCapeHash, Set<String> knownCapeHashes) {

        this.uuid = uuid;
        this.username = username;
        this.currentSkinHash = currentSkinHash;
        this.knownSkinHashes = knownSkinHashes;
        this.currentCapeHash = currentCapeHash;
        this.knownCapeHashes = knownCapeHashes;
    }

    // Getters
    public String getUuid() {
        return uuid;
    }

    public String getUsername() {
        return username;
    }

    public String getCurrentSkinHash() {
        return currentSkinHash;
    }

    public Set<String> getKnownSkinHashes() {
        return knownSkinHashes;
    }

    public String getCurrentCapeHash() {
        return currentCapeHash;
    }

    public Set<String> getKnownCapeHashes() {
        return knownCapeHashes;
    }

    // Setters
    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setCurrentSkinHash(String currentSkinHash) {
        this.currentSkinHash = currentSkinHash;
    }

    public void setKnownSkinHashes(Set<String> knownSkinHashes) {
        this.knownSkinHashes = knownSkinHashes;
    }

    public void setCurrentCapeHash(String currentCapeHash) {
        this.currentCapeHash = currentCapeHash;
    }

    public void setKnownCapeHashes(Set<String> knownCapeHashes) {
        this.knownCapeHashes = knownCapeHashes;
    }
}
