package com.nguyenvanhuy.backend.service;

import com.nguyenvanhuy.backend.entity.Role;
import java.util.List;

public interface RoleService {
    public Role createRole(Role role);

    public Role getRoleById(Long roleId);

    public List<Role> getAllRoles();

    public Role updateRole(Role role);

    public void deleteRole(Long roleId);
}
