package com.nguyenvanhuy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvanhuy.backend.entity.Gallery;

public interface GalleryRepository extends JpaRepository<Gallery, Long> {

}