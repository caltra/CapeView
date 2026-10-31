package com.capeview.capi.controller;

import java.time.Instant;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capeview.capi.model.player.Player;
import com.capeview.capi.model.util.CapiResponse;
import com.capeview.capi.service.PlayerService;

@RestController
@RequestMapping("/api/players")
public class PlayerController {
    private final PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping("/{username}")
    public ResponseEntity<CapiResponse<Player>> getPlayer(@PathVariable String username) {

        String uuid = playerService.findUuid(username);

        Player player = playerService.findPlayer(uuid);

        CapiResponse<Player> response = new CapiResponse<>(
            player,
            "Player retrieved successfully.",
            null,
            Instant.now());

        return ResponseEntity.ok(response);
    }
}
