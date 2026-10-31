package com.capeview.capi.service;

import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.capeview.capi.client.MojangApi.MojangApiClient;
import com.capeview.capi.client.MojangApi.MojangApiPlayer;
import com.capeview.capi.client.MojangSessionServer.DecodedTextures;
import com.capeview.capi.client.MojangSessionServer.MojangSessionServerClient;
import com.capeview.capi.client.MojangSessionServer.MojangSessionServerPlayer;
import com.capeview.capi.model.player.Player;
import com.capeview.capi.repository.PlayerRepository;

import tools.jackson.databind.DatabindException;
import tools.jackson.databind.json.JsonMapper;

@Service
public class PlayerService {
    private final PlayerRepository playerRepository;
    private final MojangApiClient mojangApiClient;
    private final MojangSessionServerClient mojangSessionServerClient;
    private final JsonMapper jsonMapper;

    public PlayerService(
            PlayerRepository playerRepository,
            MojangApiClient mojangApiClient,
            MojangSessionServerClient mojangSessionServerClient,
            JsonMapper jsonMapper) {

        this.playerRepository = playerRepository;
        this.mojangApiClient = mojangApiClient;
        this.mojangSessionServerClient = mojangSessionServerClient;
        this.jsonMapper = jsonMapper;
    }

    // Find player by username
    public String findUuid(String username) {

        // Check if player exists in internal database
        if (playerRepository.existsByUsernameIgnoreCase(username)) {
            return playerRepository.findByUsername(username).getUuid();
        } else {
            // If not, fetch UUID
            MojangApiPlayer player = mojangApiClient
                .findExternalPlayerByUsername(username)
                .orElseThrow(() -> new NullPointerException("Username does not exist."));

            return player.id();
        }
    }

    // Find player by uuid
    public Player findPlayer(String uuid) {

        // Check if player exists in internal database
        if (playerRepository.existsByUuid(uuid)) {
            Player player = playerRepository.findByUuid(uuid);

            return player;

        } else {
            // Fetch player info from Mojang API
            MojangSessionServerPlayer sessionServerPlayer = mojangSessionServerClient
                    .findExternalPlayerByUuid(uuid)
                    .orElseThrow(() -> new NullPointerException("Supplied UUID does not exist."));

            // Decode player properties from base64
            Optional<String> texturesValue = sessionServerPlayer.properties().stream()
                    .filter(property -> property.name().equals("textures"))
                    .map(property -> property.value())
                    .findFirst();

            String encodedTextures = texturesValue.orElseThrow(
                    () -> new IllegalStateException("Player's profile contains no textures."));

            String decodedTextures = new String(
                    Base64.getDecoder().decode(encodedTextures),
                    StandardCharsets.UTF_8);

            DecodedTextures textures;
            try {
                textures = jsonMapper.readValue(decodedTextures, DecodedTextures.class);
            } catch (DatabindException ex) {
                throw new IllegalStateException("Could not parse Mojang texture response.");
            }

            // Extract skin hash
            String skinTextureUrl = textures.textures().skin().url();

            String skinPath = URI.create(skinTextureUrl).getPath();
            String skinHash = skinPath.substring(skinPath.lastIndexOf('/') + 1);

            // Extract cape hash
            String capeTextureUrl = textures.textures().cape().url();

            String capePath = URI.create(capeTextureUrl).getPath();
            String capeHash = capePath.substring(capePath.lastIndexOf('/') + 1);

            // Create new player entity
            Set<String> knownSkinHashes = new HashSet<>();
            if (skinHash != null) {
                knownSkinHashes.add(skinHash);
            }

            Set<String> knownCapeHashes = new HashSet<>();
            if (capeHash != null) {
                knownCapeHashes.add(capeHash);
            }

            Player newPlayer = new Player(
                    sessionServerPlayer.id(),
                    sessionServerPlayer.name(),
                    skinHash,
                    knownSkinHashes,
                    capeHash,
                    knownCapeHashes);

            // Save player entity
            playerRepository.save(newPlayer);

            return newPlayer;
        }
    }
}
