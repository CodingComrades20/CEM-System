//package com.codingcomrades.fullstackbackend.controller;
//import com.codingcomrades.fullstackbackend.Service.EmailService;
//import com.codingcomrades.fullstackbackend.Service.SpringEmailApplication;
//import jakarta.mail.MessagingException;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/email")
//public class EmailController {
//
//    @PostMapping("/send")
//    public ResponseEntity<String> sendEmail() throws MessagingException {
//        SpringEmailApplication.triggerMail();
//        return ResponseEntity.ok("Email sent successfully");
//    }
//}
package com.codingcomrades.fullstackbackend.controller;

import com.codingcomrades.fullstackbackend.Service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/send")
public class EmailController {

    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/email")
    public ResponseEntity<String> sendEmail(@RequestBody(required = false) String emailBody) {
        try {
            // Provide default email body, recipient, and subject (modify as needed)
            String defaultRecipient = "naseefnuzky1999@gmail.com";
            String defaultSubject = "Default Subject";
            String defaultEmailBody = "Default Email Body";

            // If the email body is not provided in the request, use the default email body
            if (emailBody == null || emailBody.isEmpty()) {
                emailBody = defaultEmailBody;
            }

            emailService.sendEmail(defaultRecipient, emailBody, defaultSubject);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send email: " + e.getMessage());
        }
    }
}
