package com.algoma.cems.repository.service;

import com.algoma.cems.model.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClubRespository extends JpaRepository<Club,Integer> {
}

