package com.algoma.cems.service;

import com.algoma.cems.model.Event;

import java.util.List;

public interface EventService {
    public Event saveEvent(Event event);
    public List<Event> getAllEvents();
    public Event getEvent(Integer idEvent);
    public void deleteAllEvents();
}
