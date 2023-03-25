package com.algoma.cems.service;

import com.algoma.cems.model.Club;
import com.algoma.cems.model.Event;
import com.algoma.cems.model.User;
import com.algoma.cems.repository.ClubRepository;
import com.algoma.cems.repository.EventRepository;
import com.algoma.cems.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceImplementation implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ClubRepository clubRepository;
    @Autowired
    private EventRepository eventRepository;
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

    @Override
    public void deleteAllUsers() {
        userRepository.deleteAll();
    }

    @Override
    public User userEnrolledInClub(int id, int idClub){
        Set<Club> clubSet = null;
        User user = userRepository.findById(id).get();
        Club club = clubRepository.findById(idClub).get();
        clubSet = user.getEnrolledClubs();
        clubSet.add(club);
        user.setEnrolledClubs(clubSet);
        return userRepository.save(user);
    }

    @Override
    public User userEnrolledInEvent(int id, int idEvent){
        Set<Event> eventSet = null;
        User user = userRepository.findById(id).get();
        Event event = eventRepository.findById(idEvent).get();
        eventSet = user.getAttendingEvent();
        eventSet.add(event);
        user.setAttendingEvent(eventSet);
        return userRepository.save(user);
    }
    @Override
    public Set<Club> getClubsForUser(int id){
        User user = userRepository.findById(id).get();
        return user.getEnrolledClubs();
    }
    @Override
    public Set<Event> getEventForUser(int id){
        User user = userRepository.findById(id).get();
        return user.getAttendingEvent();
    }
}
