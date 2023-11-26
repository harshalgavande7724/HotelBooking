package com.example.hotel.repository;

// UserRepository.java
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hotel.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}
