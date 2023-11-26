package com.example.hotel.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String guestName;
    private String roomType;
    private int numNights;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getGuestName() {
        return guestName;
    }
    public void setGuestName(String guestName) {
        this.guestName = guestName;
    }
    public String getRoomType() {
        return roomType;
    }
    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }
    public int getNumNights() {
        return numNights;
    }
    public void setNumNights(int numNights) {
        this.numNights = numNights;
    }
    @Override
    public String toString() {
        return "Booking [id=" + id + ", guestName=" + guestName + ", roomType=" + roomType + ", numNights=" + numNights
                + "]";
    }

    // Getters and setters
}
