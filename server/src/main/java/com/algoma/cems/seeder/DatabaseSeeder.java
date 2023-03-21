package com.algoma.cems.seeder;

import com.algoma.cems.controller.UserController;
import com.algoma.cems.model.User;
import com.algoma.cems.repository.UserRepository;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class DatabaseSeeder implements CommandLineRunner {
    @Autowired
    private final UserController userController;
    @PersistenceContext
    private final EntityManager entityManager;

    public DatabaseSeeder(UserController userController, EntityManager entityManager) {
        this.userController = userController;
        this.entityManager = entityManager;
    }

    /*  this function runs with the springboot application. As soon as the application starts
        firstly deletes all users
        changes the autoincrement back to 1
        populates the database
    */
    @Override
    @Transactional
    public void run(String... args) throws Exception{
        userController.deleteAllUsers();

        String sql = "ALTER TABLE user AUTO_INCREMENT = 1";
        entityManager.createNativeQuery(sql).executeUpdate();

        userController.add(new User("Jimmy", "Phan", "Student1@algomau.ca", "Student1", "student"));
        userController.add(new User("Anna", "D", "Student2@algomau.ca", "Student2", "student"));
        userController.add(new User("Ahmed", "Elmolla", "CM1@algomau.ca", "CM1", "clubmanager"));
        userController.add(new User("Cathy", "Tanya", "Admin1@algomau.ca", "Admin1", "admin"));
        userController.add(new User("Lev", "On", "Admin2@algomau.ca", "Admin2", "admin"));
    }
}
