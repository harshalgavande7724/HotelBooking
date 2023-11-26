package com.example.hotel.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hotel.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
