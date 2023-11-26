package com.example.hotel.controller;

// BookingController.java
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.example.hotel.model.Booking;
import com.example.hotel.service.BookingService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping
    public String showBookings(Model model) {
        List<Booking> bookings = bookingService.getAllBookings();
        model.addAttribute("bookings", bookings);
        return "booking/list";
    }

    @GetMapping("/new")
    public String showBookingForm(Model model) {
        model.addAttribute("booking", new Booking());
        return "booking/form";
    }

    @PostMapping("/save")
    public String saveBooking(@ModelAttribute Booking booking) {
        bookingService.saveBooking(booking);
        return "redirect:/bookings";
    }

    @GetMapping("/detail/{id}")
    public String showBookingDetails(@PathVariable Long id, Model model) {
        Booking booking = bookingService.getBookingById(id);
        model.addAttribute("booking", booking);
        return "booking/detail";
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model) {
        Booking booking = bookingService.getBookingById(id);
        model.addAttribute("booking", booking);
        return "booking/form";
    }

    @GetMapping("/delete/{id}")
    public String deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return "redirect:/bookings";
    }
}
