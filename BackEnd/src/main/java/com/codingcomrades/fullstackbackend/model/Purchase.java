package com.codingcomrades.fullstackbackend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Purchase {

    @Id
    @GeneratedValue
    @JsonFormat(pattern = "yyyy/mm/dd")

    private Long id;
    private String purchaseorderid;
    private String supname;

    private String productname;
    @Temporal(TemporalType.DATE)
    private Date date;
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

    public String getProductname() {
        return productname;
    }

    public void setProductname(String productname) {
        this.productname = productname;
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
