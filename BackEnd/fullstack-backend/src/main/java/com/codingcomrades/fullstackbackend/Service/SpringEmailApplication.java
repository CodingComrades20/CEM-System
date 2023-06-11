//package com.codingcomrades.fullstackbackend.Service;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.boot.context.event.ApplicationReadyEvent;
//import org.springframework.context.event.EventListener;
//import org.springframework.scheduling.annotation.EnableScheduling;
//
//@SpringBootApplication
//@EnableScheduling
//public class SpringEmailApplication {
//
//    @Autowired
//    private  EmailService senderService;
//
//    public static void main(String[] args) {
//        SpringApplication.run(SpringEmailApplication.class, args);
//
//
//
////        SpringEmailApplication app = new SpringEmailApplication();
////        app.triggerMail();
//    }
//
//    // @Scheduled(cron = "0 0 12 * * ?") // Runs every day at 12 PM
//
//   // @EventListener(ApplicationReadyEvent.class)
//    public  void triggerMail(){
//        senderService.sendEmail("naseefnuzky1999@gmail.com",
//                "This is email body",
//                "This is email subject");
//
//    }
//}
