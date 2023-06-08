package com.codingcomrades.fullstackbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Supplier {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String address;
    private Long cno;
    private String email;

    public Long getId() {

        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public String getName() {

        return name;
    }

    public void setName(String name) {

        this.name = name;
    }

    public String getAddress() {

        return address;
    }

    public void setAddress(String address) {

        this.address = address;
    }

    public Long getCno() {

        return cno;
    }

    public void setCno(Long cno) {

        this.cno = cno;
    }

    public String getEmail() {

        return email;
    }

    public void setEmail(String email) {

        this.email = email;
    }

}
