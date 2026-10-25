package com.capeview.capi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capeview.capi.model.cape.Cape;

public interface CapeRepository extends JpaRepository<Cape, Long> {
}
