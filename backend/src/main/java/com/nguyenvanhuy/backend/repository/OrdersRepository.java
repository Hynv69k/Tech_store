package com.nguyenvanhuy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvanhuy.backend.entity.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Long> {

}
