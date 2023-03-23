package com.algoma.cems.controller;

import com.algoma.cems.model.Club;
import com.algoma.cems.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clubs")
public class ClubController {
    @Autowired
    private ClubService clubService;

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
}