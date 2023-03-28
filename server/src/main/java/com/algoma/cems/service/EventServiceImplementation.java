package com.algoma.cems.service;


import com.algoma.cems.model.Event;
import com.algoma.cems.model.User;
import com.algoma.cems.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class EventServiceImplementation implements EventService{
    @Autowired
    private EventRepository eventRepository;

    @Override
    public Event saveEvent(Event event){
        return eventRepository.save(event);
    }
    @Override
    public List<Event> getAllEvents(){
        return eventRepository.findAll();
    }

    @Override
    public Event getEvent(Integer idEvent){
        Optional<Event> eventSelected = eventRepository.findById(idEvent);
        Event event = eventSelected.get();
        return event;
    }
    @Override
    public void deleteAllEvents() {
        eventRepository.deleteAll();
    }

    @Override
    public Set<User> getUsersAttendingEvent(Integer idEvent) {
        Event event = eventRepository.findById(idEvent).get();
        return event.getUserAttending();
    }
}