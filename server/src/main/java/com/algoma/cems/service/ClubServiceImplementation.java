package com.algoma.cems.service;

import com.algoma.cems.model.Club;
import com.algoma.cems.model.Event;
import com.algoma.cems.model.User;
import com.algoma.cems.repository.ClubRepository;
import com.algoma.cems.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ClubServiceImplementation implements ClubService{
    @Autowired
    private ClubRepository clubRepository;

    @Autowired
    private EventRepository eventRepository;

    @Override
    public Club saveClub(Club club) {
        return clubRepository.save(club);
    }

    @Override
    public List<Club> getAllClubs() {
        return clubRepository.findAll();
    }

    @Override
    public Club getClub(Integer idClub) {
        Optional<Club> clubSelected = clubRepository.findById(idClub);
        Club club = clubSelected.get();
        return club;
    }
    @Override
    public void deleteAllClubs() {
        clubRepository.deleteAll();
    }

    @Override
    public Set<User> getUsersEnrolledInClub(Integer idClub) {
        Club club = clubRepository.findById(idClub).get();
        return club.getEnrolledUsers();
    }

    public Club listOfEventsInClub(int idClub, int idEvent){
        Set<Event> clubEventSet = null;
        Club club = clubRepository.findById(idClub).get();
        Event event = eventRepository.findById(idEvent).get();
        clubEventSet = club.getClubevents();
        clubEventSet.add(event);
        club.setClubevents(clubEventSet);
        return clubRepository.save(club);
    }

    public Set<Event> getEventsForClub(int idClub){
        Club club = clubRepository.findById(idClub).get();
        return club.getClubevents();
    }
    @Override
    public String clubFinancials(int idClub) {
        Set<Event> clubEvents = null;
        Club club = clubRepository.findById(idClub).get();
        clubEvents = club.getClubevents();
        int revenue = 0;
        for (Event event : clubEvents){
            int costPer = event.getCostEvent();
            int membersAttending = (int) event.getUserAttending().stream().count();
            int temp = costPer * membersAttending;
            revenue += temp;
        }
        String s = "The " + club.getNameClub() + " had " + clubEvents.stream().count() + " events that brought in " + revenue + "$";
        return s;
    }
}