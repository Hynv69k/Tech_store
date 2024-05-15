package com.nguyenvanhuy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvanhuy.backend.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
