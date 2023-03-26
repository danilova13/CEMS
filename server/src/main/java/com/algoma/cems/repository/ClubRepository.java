package com.algoma.cems.repository;

import com.algoma.cems.model.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClubRepository extends JpaRepository<Club,Integer> {
    void deleteAll();

}

