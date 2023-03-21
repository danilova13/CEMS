package com.algoma.cems.repository.service;

import com.algoma.cems.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRespository extends JpaRepository<Event,Integer> {
}
