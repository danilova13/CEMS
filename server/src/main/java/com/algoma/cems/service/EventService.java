package com.algoma.cems.service;

import com.algoma.cems.model.Event;
import com.algoma.cems.model.User;

import java.util.List;
import java.util.Set;

public interface EventService {
    public Event saveEvent(Event event);
    public List<Event> getAllEvents();
    public Event getEvent(Integer idEvent);
    public void deleteAllEvents();
    public Set<User> getUsersAttendingEvent(Integer idEvent);
}
