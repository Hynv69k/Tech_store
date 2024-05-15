package com.nguyenvanhuy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvanhuy.backend.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
