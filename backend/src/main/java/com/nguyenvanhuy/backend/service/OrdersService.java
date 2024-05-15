package com.nguyenvanhuy.backend.service;

import com.nguyenvanhuy.backend.entity.Orders;
import java.util.List;

public interface OrdersService {
    public Orders createOrders(Orders orders);

    public Orders getOrdersById(Long ordersId);

    public List<Orders> getAllOrders();

    public Orders updateOrders(Orders orders);

    public void deleteOrders(Long ordersId);
}
