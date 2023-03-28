package com.algoma.cems.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class User {

    // Each user will have an automated Primary Key ID that increments by 1
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @Column(unique = true)
    private String email;
    private String password;
    private String role;

    @ManyToMany
    @JoinTable(name = "clubs_user_in",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "club_id")
    )
    private Set<Club> enrolledClubs = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "event_user_in",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "event_id")
    )
    private Set<Event> attendingEvent = new HashSet<>();


    public User(){

    }
    public User(String name, String email, String password, String role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Set<Club> getEnrolledClubs() {
        return enrolledClubs;
    }

    public void setEnrolledClubs(Set<Club> enrolledClubs) {
        this.enrolledClubs = enrolledClubs;
    }

    public Set<Event> getAttendingEvent() {
        return attendingEvent;
    }

    public void setAttendingEvent(Set<Event> attendingEvent) {
        this.attendingEvent = attendingEvent;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
