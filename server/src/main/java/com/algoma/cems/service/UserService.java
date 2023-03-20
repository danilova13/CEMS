package com.algoma.cems.service;

import com.algoma.cems.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);

    public List<User> getAllUsers();
}


