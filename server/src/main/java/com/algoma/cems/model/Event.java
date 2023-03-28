package com.algoma.cems.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.sql.Time;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idEvent;
    private String nameEvent;
    private String dateEvent;
    private Time timeEvent;
    private String locationEvent;
    private int costEvent;
    private String eventDescription;

    @JsonIgnore
    @ManyToMany(mappedBy = "attendingEvent")
    private Set<User> userAttending = new HashSet<>();

    @JsonIgnore
    @ManyToMany(mappedBy = "clubevents")
    private Set<Club> eventsInClub = new HashSet<>();

    public Event() {
    }

    public Event(String nameEvent, String dateEvent, Time timeEvent, String locationEvent, int costEvent, String eventDescription) {
        this.nameEvent = nameEvent;
        this.dateEvent = dateEvent;
        this.timeEvent = timeEvent;
        this.locationEvent = locationEvent;
        this.costEvent = costEvent;
        this.eventDescription = eventDescription;
    }

    public int getIdEvent() {
        return idEvent;
    }

    public void setIdEvent(int idEvent) {
        this.idEvent = idEvent;
    }

    public String getNameEvent() {
        return nameEvent;
    }

    public void setNameEvent(String nameEvent) {
        this.nameEvent = nameEvent;
    }

    public String getDateEvent() {
        return dateEvent;
    }

    public void setDateEvent(String dateEvent) {
        this.dateEvent = dateEvent;
    }

    public Time getTimeEvent() {
        return timeEvent;
    }

    public void setTimeEvent(Time timeEvent) {
        this.timeEvent = timeEvent;
    }

    public String getLocationEvent() {
        return locationEvent;
    }

    public void setLocationEvent(String locationEvent) {
        this.locationEvent = locationEvent;
    }

    public int getCostEvent() {
        return costEvent;
    }

    public void setCostEvent(int costEvent) {
        this.costEvent = costEvent;
    }

    public String getEventDescription() {
        return eventDescription;
    }
    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }

    public Set<User> getUserAttending() {
        return userAttending;
    }
    public void setUserAttending(Set<User> userAttending) {
        this.userAttending = userAttending;
    }

}