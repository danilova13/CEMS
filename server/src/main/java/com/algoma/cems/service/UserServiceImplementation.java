package com.algoma.cems.service;

import com.algoma.cems.model.User;
import com.algoma.cems.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("UserService")

public class UserServiceImplementation implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User login(String email, String password) {
        User person = userRepository.findByEmail(email);
        if (person.getPassword().equals(password)){
            return person;
        }
        return null;
    }
}
