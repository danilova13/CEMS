package com.algoma.cems.controller;

import com.algoma.cems.model.Club;
import com.algoma.cems.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/club")
public class ClubController {
    @Autowired
    private ClubService clubService;

    @PostMapping("/add")
    public String add(@RequestBody Club club){
        clubService.saveClub(club);
        return "Club Saved";
    }

    @GetMapping("/getAll")
    public List<Club> getAllClub(){
        return clubService.getAllClub();
    }
}
