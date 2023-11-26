package com.example.hotel.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hotel.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
