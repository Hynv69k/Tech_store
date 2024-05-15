package com.nguyenvanhuy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvanhuy.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
