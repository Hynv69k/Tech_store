package com.nguyenvanhuy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvanhuy.backend.entity.OrderDetail;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {

}
