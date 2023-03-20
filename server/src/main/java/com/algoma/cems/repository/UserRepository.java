package com.algoma.cems.repository;

import com.algoma.cems.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface UserRepository extends JpaRepository<User,Integer> {
    User findByEmailAndPassword(String email_address, String password);

}
