# Scope
This web site has been designed for a physical therapist. 
It holds a numerous amount of pages showing images, text, videos, tables and google maps.

The design is responsive:
 - The _menu_'s size is shrinking and a _button_ appears to be clicked and display the hidden buttons.
 - Google maps in page _individual_ lessons is responsive, the marker stays in the center of the page.

Interactivity can be tested with several pages:
  - _contact_: see register for the newsletter at the bottom. 
    The http POST request code is written but disabled. In order to simulate the interaction, an alert is displayed on the screen with the provided email address.  
  - _blog_: add text and it will be displayed on the same page


# End user Features.
The project features have been discussed with the end user (stakeholder) at the beginning of the project.
They are described below. Several of these features have not been completed because they require transactions with a web server.

 1. Service Presentation
 
 2. Contact Information
  
 3. Group classes  
  3.1. Group classes schedule  
      Use the Google calendar API  
  3.2. Sign up for classes  
      Form for sign-up (drop down of classes + submit click + customized for which class)  
  3.3. Buy a class pass  
      Form for buying and paying. Provide a voucher to be printed.  
  3.4. Group classes location.  
      Google map API  
    
 4. Workshops  
  4.0. Upcoming workshops  
       Carousel with pictures with workshop titles and dates and locations and amount of available seats.  
  4.1 Offer workshop registration. Update the number of seats available.  
  4.2. Past workshops  
       Another carousel with the pictures and description.  
  
 5. Individual Sessions  
  5.0 Location  
     Google map API  
  5.1 Make an appointment  
     Form for appointment  

 6. Newsletter  
     A customer needs to be able to register for the newsletter.
  
 7. The end user needs to be able to write a blog by signing in to the site.  
 
 8. Resources  
  8.1 Book references  
    8.1.1 In English  
    8.1.2 In French  
  8.2 Audio records  
  8.3 Video records  

# Todo (for the fullstack Javascript class)
1- Finalize the blog page to connect to a web server and process the content.   
   At this time, the blog entered is added to the current page but disappears when the page is refreshed.
2- Finalize the contact page with the newsletter registration information to be sent to a web server.
3- Add google calendar and an authentication window for the administrator to write into the calendar.
4- Add registration and payment transactions.

# How to add Google Map to your web site
Go to https://developers.google.com/maps/documentation/javascript/ and select a map style.  
Then request for an API key

# How to add Google Calendar to your web site
Register to the google calendar api for developers site  
https://developers.google.com/google-apps/calendar/quickstart/js



