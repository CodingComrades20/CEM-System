package com.codingcomrades.fullstackbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Purchase {

    @Id
    @GeneratedValue
    private Long id;
    private String purchaseorderid;
    private String supname;
    private Date date; // Using java.util.Date
    private Long cno;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPurchaseorderid() {
        return purchaseorderid;
    }

    public void setPurchaseorderid(String purchaseorderid) {
        this.purchaseorderid = purchaseorderid;
    }

    public String getSupname() {
        return supname;
    }

    public void setSupname(String supname) {
        this.supname = supname;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Long getCno() {
        return cno;
    }

    public void setCno(Long cno) {
        this.cno = cno;
    }




}
