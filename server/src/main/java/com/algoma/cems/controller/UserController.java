package com.algoma.cems.controller;
import com.algoma.cems.model.Club;
import com.algoma.cems.model.Event;
import com.algoma.cems.model.User;
import com.algoma.cems.model.UserLoginRequest;
import com.algoma.cems.repository.UserRepository;
import com.algoma.cems.service.ClubService;
import com.algoma.cems.service.EventService;
import com.algoma.cems.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private ClubService clubService;
    @Autowired
    private EventService eventService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/")
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

    @GetMapping("/")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @DeleteMapping("/")
    public ResponseEntity<String> deleteAllUsers(){
        userService.deleteAllUsers();
        return ResponseEntity.ok("All users deleted");
    }

    @PutMapping("/{id}/clubs/{idClub}")
    public User userEnrolledInClub(
            @PathVariable int id,
            @PathVariable int idClub
    ){
        return userService.userEnrolledInClub(id,idClub);
    }

    @PutMapping("/{id}/events/{idEvent}")
    public User userEnrolledInEvent(
            @PathVariable int id,
            @PathVariable int idEvent
    ){
        return userService.userEnrolledInEvent(id,idEvent);
    }

    @GetMapping("/{id}/clubs")
    public Set<Club> listOfClub(
            @PathVariable int id
    ){
        return userService.getClubsForUser(id);
    }

    @GetMapping("/{id}/events")
    public Set<Event> listOfEvent(
            @PathVariable int id
    ){
        return userService.getEventForUser(id);
    }
}
