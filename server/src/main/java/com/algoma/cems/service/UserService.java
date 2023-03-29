package com.algoma.cems.service;

import com.algoma.cems.model.Club;
import com.algoma.cems.model.Event;
import com.algoma.cems.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public interface UserService {
    public User saveUser(User user);

    public List<User> getAllUsers();

    public User login(String email, String password);

    public void deleteAllUsers();

    public User userEnrolledInClub(int id, int idClub);

    public User userEnrolledInEvent(int id, int idEvent);

    public Set<Club> getClubsForUser(int id);
    public Set<Event> getEventForUser(int id);
    public void deleteClubFromUser(int id, int idClub);
}


