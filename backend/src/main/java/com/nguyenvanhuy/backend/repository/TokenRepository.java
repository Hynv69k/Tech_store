package com.nguyenvanhuy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvanhuy.backend.entity.Token;

public interface TokenRepository extends JpaRepository<Token, Long> {

}
