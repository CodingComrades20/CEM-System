package com.codingcomrades.fullstackbackend.controller;
import com.codingcomrades.fullstackbackend.exception.PaymentNotFoundException;
import com.codingcomrades.fullstackbackend.model.Payment;
import com.codingcomrades.fullstackbackend.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class PaymentController {
    @Autowired
    private PaymentRepository paymentRepository;

    @PostMapping("/payment")
    Payment newPayment(@RequestBody Payment newPayment)  {

        return paymentRepository.save(newPayment);
    }
    @GetMapping("/payment")
    List<Payment> getallPayments(){
        return paymentRepository.findAll();
    }


    @GetMapping("/payment/{id}")
    Payment getPaymentById(@PathVariable Long id){
        return paymentRepository.findById(id)
                .orElseThrow(()->new PaymentNotFoundException(id));
    }
    @PutMapping("/payment/{id}")
    Payment updatePayment(@RequestBody Payment newPayment,@PathVariable Long id)  {
        return paymentRepository.findById(id)
                .map(payment->{
                    payment.setInvoiceno(newPayment.getInvoiceno());
                    payment.setStatus(newPayment.getStatus());
                    payment.setDuedate(newPayment.getDuedate());
                    payment.setAmount(newPayment.getAmount());
                    payment.setPaymentmethod(newPayment.getPaymentmethod());
                    payment.setPaymentdate(newPayment.getPaymentdate());
                    payment.setDueamount(newPayment.getDueamount());
                    payment.setSupplier(newPayment.getSupplier());
                    return paymentRepository.save(payment);

                }).orElseThrow(()->new PaymentNotFoundException(id));
    }

    @DeleteMapping("/payment/{id}")
    String deletePayment(@PathVariable Long id){
        if(!paymentRepository.existsById(id)){
            throw new PaymentNotFoundException(id);

        }
        paymentRepository.deleteById(id);
        return "Payment with id "+id+"has been deleted success.";

    }



}
