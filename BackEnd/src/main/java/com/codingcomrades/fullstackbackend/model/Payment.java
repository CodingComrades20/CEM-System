package com.codingcomrades.fullstackbackend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.util.Date;

@Table(name="payment")
@Entity
public class Payment {
    @Id
    @GeneratedValue
    @JsonFormat(pattern = "yyyy/MM/dd")
    private Long id;
    private String invoiceno;
    private String status;
    private  String amount;
    @Temporal(TemporalType.DATE)
    private Date duedate;
    @Temporal(TemporalType.DATE)
    private Date paymentdate;
    private String paymentmethod;
    private  String dueamount;

    private  String supplier;
    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInvoiceno() {
        return invoiceno;
    }

    public void setInvoiceno(String invoiceno) {
        this.invoiceno = invoiceno;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public Date getDuedate() {
        return duedate;
    }

    public void setDuedate(Date duedate) {
        this.duedate = duedate;
    }

    public Date getPaymentdate() {
        return paymentdate;
    }

    public void setPaymentdate(Date paymentdate) {
        this.paymentdate = paymentdate;
    }

    public String getPaymentmethod() {
        return paymentmethod;
    }

    public void setPaymentmethod(String paymentmethod) {
        this.paymentmethod = paymentmethod;
    }

    public String getDueamount() {
        return dueamount;
    }

    public void setDueamount(String dueamount) {
        this.dueamount = dueamount;
    }
}
