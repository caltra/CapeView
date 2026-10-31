package com.capeview.capi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capeview.capi.model.player.Player;

public interface PlayerRepository extends JpaRepository<Player, String> {
    boolean existsByUsernameIgnoreCase(String username);

    boolean existsByUuid(String uuid);

    Player findByUsername(String username);

    Player findByUuid(String uuid);
}
