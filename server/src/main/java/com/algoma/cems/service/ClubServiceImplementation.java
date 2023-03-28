package com.algoma.cems.service;

import com.algoma.cems.model.Club;
import com.algoma.cems.model.Event;
import com.algoma.cems.model.User;
import com.algoma.cems.repository.ClubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ClubServiceImplementation implements ClubService{
    @Autowired
    private ClubRepository clubRepository;

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
    public Set<User> getUsersAttendingEvent(Integer idClub) {
        Club club = clubRepository.findById(idClub).get();
        return club.getEnrolledUsers();
    }
}