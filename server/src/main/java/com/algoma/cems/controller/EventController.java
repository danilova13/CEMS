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

    @PostMapping("/add")
    public String add(@RequestBody Event event){
        eventService.saveEvent(event);
        return "Event Saved";
    }

    @GetMapping("/getAll")
    public List<Event> getAllEvent(){
        return eventService.getAllEvent();
    }

}
