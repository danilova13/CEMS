package com.algoma.cems.service;

import com.algoma.cems.model.Club;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface ClubService {
    public Club saveClub(Club club);
    public List<Club> getAllClubs();
    public Club getClub(Integer idClub);
}
