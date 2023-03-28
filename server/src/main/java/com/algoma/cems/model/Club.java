package com.algoma.cems.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Club {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idClub;
    private String nameClub;
    private String clubDescription;
    private String imageString;

    @JsonIgnore
    @ManyToMany(mappedBy = "enrolledClubs")
    private Set<User> enrolledUsers = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "events_in_club",
            joinColumns = @JoinColumn(name = "club_id"),
            inverseJoinColumns = @JoinColumn(name = "event_id")
    )
    private Set<Event> clubevents = new HashSet<>();
    public Club() {
    }

    public Club(String nameClub, String clubDescription, String imageString){
        this.nameClub = nameClub;
        this.clubDescription = clubDescription;
        this.imageString = imageString;
    }

    public int getIdClub() {
        return idClub;
    }
    public void setIdClub(int idClub) {
        this.idClub = idClub;
    }

    public String getNameClub() {
        return nameClub;
    }
    public void setNameClub(String nameClub) {
        this.nameClub = nameClub;
    }

    public String getClubDescription() {
        return clubDescription;
    }
    public void setClubDescription(String clubDescription) {
        this.clubDescription = clubDescription;
    }

    public String getImageString() {
        return imageString;
    }
    public void setImageString(String imageString) {
        this.imageString = imageString;
    }

    public Set<User> getEnrolledUsers() {
        return enrolledUsers;
    }
    public void setEnrolledUsers(Set<User> enrolledUsers) {
        this.enrolledUsers = enrolledUsers;
    }

    public Set<Event> getClubevents() {
        return clubevents;
    }

    public void setClubevents(Set<Event> clubevents) {
        this.clubevents = clubevents;
    }
}
