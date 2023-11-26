package com.example.hotel.controller;

// UserController.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.hotel.model.User;
import com.example.hotel.service.UserService;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    // Other code...

    @GetMapping("/signup")
    public String showSignupForm(Model model) {
        model.addAttribute("user", new User());
        return "signup";
    }

    @PostMapping("/signup")
    public String signup(@ModelAttribute User user, RedirectAttributes redirectAttributes) {
        userService.saveUser(user);
        redirectAttributes.addFlashAttribute("signupSuccessMessage", "Signup successful! Please login.");
        return "redirect:/login";
    }

    @GetMapping("/login")
    public String showLoginForm(@RequestParam(name = "error", required = false) String error, Model model) {
        if (error != null) {
            model.addAttribute("loginErrorMessage", "Invalid credentials. Please try again.");
        }
        model.addAttribute("user", new User());
        return "login";
    }

    @PostMapping("/login")
    public String login(@ModelAttribute User user, Model model) {
        User existingUser = userService.findByUsername(user.getUsername());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return "redirect:/index";
        } else {
            return "redirect:/login?error";
        }
    }
    
    @GetMapping("/profile")
    public String showProfile(@ModelAttribute User user, Model model) {
        model.addAttribute("username", user.getUsername());
        return "profile";
    }
}
