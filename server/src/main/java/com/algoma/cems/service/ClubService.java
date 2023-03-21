package com.algoma.cems.service;

import com.algoma.cems.model.Club;

import java.util.List;

public interface ClubService {
    public Club saveClub(Club club);
    public List<Club> getAllClub();
}
