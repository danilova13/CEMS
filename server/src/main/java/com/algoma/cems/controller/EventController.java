package com.algoma.cems.controller;

import com.algoma.cems.model.Club;
import com.algoma.cems.model.Event;
import com.algoma.cems.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/event")
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping("/")
    public String add(@RequestBody Event event){
        eventService.saveEvent(event);
        return "Event Saved :" + event.getNameEvent();
    }

    @GetMapping("/")
    public List<Event> getAllEvents(){
        return eventService.getAllEvents();
    }

    @GetMapping("/{idEvent}")
    public Event getEvent(@PathVariable int idEvent){
        Event eventSelected = (Event)eventService.getEvent(idEvent);
        return eventSelected;
    }

}
