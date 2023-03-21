package com.algoma.cems.service;


import com.algoma.cems.model.Event;
import com.algoma.cems.repository.service.EventRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImplementation implements EventService{
    @Autowired
    private EventRespository eventRespository;

    @Override
    public Event saveEvent(Event event){
        return eventRespository.save(event);
    }
    @Override
    public List<Event> getAllEvent(){
        return eventRespository.findAll();
    }


}