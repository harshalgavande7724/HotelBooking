package com.example.hotel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.example.hotel.model.Contact;
import com.example.hotel.service.ContactService;

import java.util.List;

@Controller
@RequestMapping("/contacts")
// @CrossOrigin(origins = "http://localhost:4200")
// @RestController
// @RequestMapping("/contacts")

public class ContactController {

    @Autowired
    private ContactService contactService;

    @GetMapping
    public String showContacts(Model model) {
        List<Contact> contacts = contactService.getAllContacts();
        model.addAttribute("contacts", contacts);
        return "contact/list";
    }

    @GetMapping("/new")
    public String showContactForm(Model model) {
        model.addAttribute("contact", new Contact());
        return "contact/form";
    }

    @PostMapping("/save")
    public String saveContact(@ModelAttribute Contact contact) {
        contactService.saveContact(contact);
        return "redirect:/contacts";
    }

    @GetMapping("/detail/{id}")
    public String showContactDetails(@PathVariable Long id, Model model) {
        Contact contact = contactService.getContactById(id);
        model.addAttribute("contact", contact);
        return "contact/detail";
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model) {
        Contact contact = contactService.getContactById(id);
        model.addAttribute("contact", contact);
        return "contact/form";
    }

    @GetMapping("/delete/{id}")
    public String deleteContact(@PathVariable Long id) {
        contactService.deleteContact(id);
        return "redirect:/contacts";
    }
}
