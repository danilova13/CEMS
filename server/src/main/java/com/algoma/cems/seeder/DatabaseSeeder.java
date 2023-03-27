package com.algoma.cems.seeder;

import com.algoma.cems.controller.ClubController;
import com.algoma.cems.controller.EventController;
import com.algoma.cems.controller.UserController;
import com.algoma.cems.model.Club;
import com.algoma.cems.model.Event;
import com.algoma.cems.model.User;
import com.algoma.cems.repository.UserRepository;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Time;

@Component
public class DatabaseSeeder implements CommandLineRunner {
    @Autowired
    private final UserController userController;
    @Autowired
    private final EventController eventController;
    @Autowired
    private final ClubController clubController;
    @PersistenceContext
    private final EntityManager entityManager;

    public DatabaseSeeder(UserController userController,EventController eventController, ClubController clubController, EntityManager entityManager) {
        this.userController = userController;
        this.eventController = eventController;
        this.clubController = clubController;
        this.entityManager = entityManager;
    }

    long now = System.currentTimeMillis();
    Time sqlTime = new Time(now);

    /*  this function runs with the springboot application. As soon as the application starts
        firstly deletes all users, events and clubs
        changes the autoincrement back to 1 for users, events and clubs
        repopulates the database with 5 users, 10 clubs and 1 event each club
    */
    @Override
    @Transactional
    public void run(String... args) throws Exception{
        userController.deleteAllUsers();
        eventController.deleteAllEvents();
        clubController.deleteAllClubs();

        String sqlUsers = "ALTER TABLE user AUTO_INCREMENT = 1";
        entityManager.createNativeQuery(sqlUsers).executeUpdate();

        String sqlClubs = "ALTER TABLE club AUTO_INCREMENT = 1";
        entityManager.createNativeQuery(sqlClubs).executeUpdate();

        String sqlEvents = "ALTER TABLE event AUTO_INCREMENT = 1";
        entityManager.createNativeQuery(sqlClubs).executeUpdate();

        userController.add(new User("Jimmy", "Phan", "Student1@algomau.ca", "Student1", "student"));
        userController.add(new User("Anna", "D", "Student2@algomau.ca", "Student2", "student"));
        userController.add(new User("Ahmed", "Elmolla", "CM1@algomau.ca", "CM1", "clubmanager"));
        userController.add(new User("Cathy", "Tanya", "Admin1@algomau.ca", "Admin1", "admin"));
        userController.add(new User("Lev", "On", "Admin2@algomau.ca", "Admin2", "admin"));

        clubController.add(new Club("Computer Science Club", "This is the Computer Science Club", "science.png"));
        clubController.add(new Club("Photography Club", "This is the Photography Club", "photography.png"));
        clubController.add(new Club("Basketball Club", "This is the Basketball Club", "basketball.png"));
        clubController.add(new Club("Chess Club", "This is the Chess Club", "chessclub.png"));
        clubController.add(new Club("Finance Club", "This is the Finance Club", "finance.png"));
        clubController.add(new Club("Rock Climbing Club", "This is the Rock Climbing Club", "rockclimbing.png"));
        clubController.add(new Club("Winter Sports Club", "This is the Winter Sports Club", "wintersports.png"));
        clubController.add(new Club("Nature Club", "This is the Nature Club", "nature.png"));
        clubController.add(new Club("Scuba diving Club", "This is the Scuba Diving Club", "scuba.png"));
        clubController.add(new Club("Travel Club", "This is the Travel Club", "travel.png"));

        eventController.add(new Event("CS Club Orientation", "Saturday April 15, 2023", sqlTime , "Algoma University SSM", 0, "Meet and greet everyone!"));
        eventController.add(new Event("Photography Headshots", "Tuesday April 21, 2023", sqlTime , "Algoma University Brampton", 50, "Come for a lesson on photography with Ahmed!"));
        eventController.add(new Event("Raptors vs Lakers Watch Party", "Friday April 14, 2023", sqlTime , "Algoma University SSM", 20, "20$ entry to come watch at student hall!"));
        eventController.add(new Event("Watchparty! Chess Club Finals", "Sunday April 16, 2023", sqlTime , "Remote via Zoom", 0, "Lets watch the masters duke it out!"));
        eventController.add(new Event("Stock Seminar", "Tuesday April 25, 2023", sqlTime , "Algoma University Brampton", 30, "Lets watch how Bill Gates chooses his stocks."));
        eventController.add(new Event("Rock Climbing Outing!", "Monday April 24, 2023", sqlTime , "North York Bouldering Gym", 25, "Exams are over lets do some bouldering!"));
        eventController.add(new Event("Blue Mountain Before Spring!", "Monday May 1, 2023", sqlTime , "Blue Mountain", 150, "Lets hit the slopes one last time"));
        eventController.add(new Event("British Colombia Nature Analysis", "March 31, 2023", sqlTime , "Algoma University Brampton", 0, "Lets take a deep dive into what British Colombia has to offer!"));
        eventController.add(new Event("Scuba Diving Orientation", "Monday May 1, 2023", sqlTime , "Remote", 0, "Scuba Diving is among us lets get ready for a great season!"));
        eventController.add(new Event("Summer Plans", "Friday March 31, 2023", sqlTime , "Remote", 0, "Does anyone need a last minute partner? Come join and see who is going where!"));

        // Student 1's clubs & events enrolled in
        userController.userEnrolledInClub(1, 1);
        userController.userEnrolledInClub(1,3);

        // Student 2's clubs & events enrolled in
        userController.userEnrolledInClub(2,2);
        userController.userEnrolledInClub(2, 8);
    }
}
