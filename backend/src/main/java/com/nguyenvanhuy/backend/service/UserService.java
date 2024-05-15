package com.nguyenvanhuy.backend.service;

import com.nguyenvanhuy.backend.entity.User;
import java.util.List;

public interface UserService {

    User createUser(User user);

    User getUserById(Long userId);

    List<User> getAllUsers();

    User updateUser(User user);

    void deleteUser(Long userId);
}
