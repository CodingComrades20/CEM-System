package com.codingcomrades.fullstackbackend.controller;
import com.codingcomrades.fullstackbackend.exception.PaymentNotFoundException;
import com.codingcomrades.fullstackbackend.model.Payment;
import com.codingcomrades.fullstackbackend.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    private final JavaMailSender mailSender;

    @Autowired
    public PaymentController(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @PostMapping("/payment")
    Payment newPayment(@RequestBody Payment newPayment) {
        Payment savedPayment = paymentRepository.save(newPayment);

        // Send email to the customer if the payment status is "unpaid"
        if (savedPayment.getStatus().equalsIgnoreCase("unpaid")) {
            sendPaymentReminderEmail(savedPayment.getCustomerEmail());
        }

        return savedPayment;
    }

    @GetMapping("/payment")
    List<Payment> getallPayments() {
        return paymentRepository.findAll();
    }

    @GetMapping("/payment/{id}")
    Payment getPaymentById(@PathVariable Long id) {
        return paymentRepository.findById(id)
                .orElseThrow(() -> new PaymentNotFoundException(id));
    }

    @PutMapping("/payment/{id}")
    Payment updatePayment(@RequestBody Payment newPayment, @PathVariable Long id) {
        return paymentRepository.findById(id)
                .map(payment -> {
                    payment.setInvoiceNo(newPayment.getInvoiceNo());
                    payment.setStatus(newPayment.getStatus());
                    payment.setDueDate(newPayment.getDueDate());
                    payment.setAmount(newPayment.getAmount());
                    payment.setPaymentMethod(newPayment.getPaymentMethod());
                    payment.setPaymentDate(newPayment.getPaymentDate());
                    payment.setDueAmount(newPayment.getDueAmount());
                    payment.setSupplier(newPayment.getSupplier());
                    payment.setCustomerEmail(newPayment.getCustomerEmail());

                    // Send email to the customer if the payment status is "unpaid"
                    if (newPayment.getStatus().equalsIgnoreCase("unpaid")) {
                        sendPaymentReminderEmail(payment.getCustomerEmail());
                    }

                    return paymentRepository.save(payment);
                }).orElseThrow(() -> new PaymentNotFoundException(id));
    }

    @DeleteMapping("/payment/{id}")
    String deletePayment(@PathVariable Long id) {
        if (!paymentRepository.existsById(id)) {
            throw new PaymentNotFoundException(id);
        }
        paymentRepository.deleteById(id);
        return "Payment with id " + id + " has been deleted successfully.";
    }

    private void sendPaymentReminderEmail(String customerEmail) {
        if (customerEmail != null) {
            // Create a simple email message
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(customerEmail);
            message.setSubject("Payment Reminder");
            message.setText("Dear customer,\n\n" +
                    "This is a payment reminder for your unpaid invoice.\n" +
                    "Please make the payment as soon as possible.\n\n" +
                    "Thank you,\n" +
                    "Your Company");

            // Send the email
            mailSender.send(message);
        } else {
            // Handle the case when the email address is null
            // You can log an error message or take appropriate action
            System.out.println("Email address is null. Unable to send payment reminder.");
        }
    }
}


