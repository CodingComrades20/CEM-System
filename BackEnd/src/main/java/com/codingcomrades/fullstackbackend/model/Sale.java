package com.codingcomrades.fullstackbackend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;


import java.util.Date;

@Entity
public class Sale {


    @Id
    @GeneratedValue
    @JsonFormat(pattern = "yyyy/mm/dd")

    private Long id;
    private String salesorderid;
    private String cusname;
    private String deliveryaddress;


    @Temporal(TemporalType.DATE)
    private Date date;
    private Long cno;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSalesorderid() {
        return salesorderid;
    }

    public void setSalesorderid(String salesorderid) {
        this.salesorderid = salesorderid;
    }

    public String getCusname() {
        return cusname;
    }

    public void setCusname(String cusname) {
        this.cusname = cusname;
    }

    public String getDeliveryaddress() {
        return deliveryaddress;
    }

    public void setDeliveryaddress(String deliveryaddress) {
        this.deliveryaddress = deliveryaddress;
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
