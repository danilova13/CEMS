package com.algoma.cems.controller;

import com.algoma.cems.model.Club;
import com.algoma.cems.model.Event;
import com.algoma.cems.model.Financials;
import com.algoma.cems.model.User;
import com.algoma.cems.repository.ClubRepository;
import com.algoma.cems.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/clubs")
@CrossOrigin
public class ClubController {
    @Autowired
    private ClubService clubService;

    @Autowired
    private ClubRepository clubRepository;

    @Autowired
    public ClubController(ClubService clubService){
        this.clubService=clubService;
    }
    @PostMapping("/")
    public String add(@RequestBody Club club){
        clubService.saveClub(club);
        return "Club Saved " + club.getNameClub();
    }

    @GetMapping("/")
    public List<Club> getAllClubs(){
        return clubService.getAllClubs();
    }


    @PutMapping("/")
    public Optional<Club> updateClub(@RequestBody Club updateClub){
        clubRepository.save(updateClub);
        return clubRepository.findById(updateClub.getIdClub());
    }

    @GetMapping("/{idClub}")
    public Club getClub(@PathVariable int idClub){
        Club clubSelected = (Club)clubService.getClub(idClub);
        return clubSelected;
    }

    @DeleteMapping("/")
    public ResponseEntity<String> deleteAllClubs(){
        clubService.deleteAllClubs();
        return ResponseEntity.ok("All clubs deleted");
    }

    @GetMapping("/{idClub}/events")
    public Set<Event> listOfClubEvents(@PathVariable int idClub){
        return clubService.getEventsForClub(idClub);
    }
    @GetMapping("/{idClub}/users")
    public Set<User> listOfUsers(@PathVariable int idClub){
        return clubService.getUsersEnrolledInClub(idClub);
    }
    @PutMapping("/{idClub}/events/{idEvent}")
    public Club listOfEventsInClub(
            @PathVariable int idClub,
            @PathVariable int idEvent
    ){
        return clubService.listOfEventsInClub(idClub,idEvent);
    }

    @GetMapping("/{idClub}/financials")
    public Financials clubFinancials(@PathVariable int idClub){
        Financials financeReport = new Financials("");
        financeReport.setFinanceReport(clubService.clubFinancials(idClub));
        return financeReport;
    }
}