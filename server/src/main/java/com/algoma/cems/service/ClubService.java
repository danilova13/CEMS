package com.algoma.cems.service;

import com.algoma.cems.model.Club;
import com.algoma.cems.model.Event;
import com.algoma.cems.model.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Component
public interface ClubService {
    public Club saveClub(Club club);
    public List<Club> getAllClubs();
    public Club getClub(Integer idClub);
    public void deleteAllClubs();
    public Set<User> getUsersEnrolledInClub(Integer idClub);
    public Club listOfEventsInClub(int idClub, int idEvent);
    public String clubFinancials(int idClub);
    public Set<Event> getEventsForClub(int idClub);
}
