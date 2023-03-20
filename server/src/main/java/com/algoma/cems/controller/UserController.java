package com.algoma.cems.controller;

import com.algoma.cems.model.User;
import com.algoma.cems.model.UserLoginRequest;
import com.algoma.cems.repository.UserRepository;
import com.algoma.cems.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return user.getFirst_Name() + " " + user.getLast_Name() + " has been added into DB";
    }

    // This method will get the endpoints from the user and check with the database to ensure correct log in

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody UserLoginRequest userLoginRequest) {

        User user = userService.login(userLoginRequest.getEmail(), userLoginRequest.getPassword());

        if(user == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok(user);
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
}
