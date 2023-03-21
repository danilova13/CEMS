package com.algoma.cems.service;

import com.algoma.cems.model.Club;
import com.algoma.cems.repository.service.ClubRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClubServiceImplementation implements ClubService{
    @Autowired
    private ClubRespository clubRespository;
    @Override
    public Club saveClub(Club club) {
        return clubRespository.save(club);
    }

    @Override
    public List<Club> getAllClub() {
        return clubRespository.findAll();
    }
}
