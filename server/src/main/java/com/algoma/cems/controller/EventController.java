package com.algoma.cems.controller;

import com.algoma.cems.model.Club;
import com.algoma.cems.model.Event;
import com.algoma.cems.model.User;
import com.algoma.cems.service.ClubService;
import com.algoma.cems.service.EmailSenderService;
import com.algoma.cems.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/events")
@CrossOrigin
public class EventController {

    @Autowired
    private EventService eventService;
    @Autowired
    private EmailSenderService emailSenderService;
    @Autowired
    private ClubService clubService;

    @PostMapping("/")
    public String add(@RequestBody Event event){
        eventService.saveEvent(event);
            if (event.getIdEvent() > 10) {
                    emailSenderService.sendEmail("jphan@algomau.ca", event.getNameEvent(), event.getEventDescription());
            }
        return "Event Saved : " + event.getNameEvent();
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

    @DeleteMapping("/")
    public ResponseEntity<String> deleteAllEvents(){
        eventService.deleteAllEvents();
        return ResponseEntity.ok("All events deleted");
    }

    @GetMapping("/{idEvent}/users")
    public Set<User> listOfUsers(@PathVariable int idEvent){
        return eventService.getUsersAttendingEvent(idEvent);
    }
}
