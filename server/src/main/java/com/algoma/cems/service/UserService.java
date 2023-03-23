package com.algoma.cems.service;

import com.algoma.cems.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface UserService {
    public User saveUser(User user);

    public List<User> getAllUsers();

    public User login(String email, String password);

    public void deleteAllUsers();
}


