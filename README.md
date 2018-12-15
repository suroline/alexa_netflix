# Voice-based Web site and Amazon Alexa Skills

**Welcome!**

These folders contain short code samples that show you how to add features to an Alexa skill react with web-site. 

Let's assume we are going to book Ant-Man and the Wasp movie tickets for two adults. 
Scenario contains how you can book by Alexa skills with better UX compare to website page clicking mouse step by step.  

By voice-based UX, there are two strong points.

1. Asking Alexa to approach to your needs will help you to get the goal easily and won't need to wander to find out by youself clicking repeatedly back and forth.
2. Getting from Alexa the proper recommendation can save the time looking for the best choice you can get and make simple to decide.


## Storyboard and Screenshots

>This prototype is based on assumption if Netflix offers the movie ticketing service.

* <h3>User Persona</h3>

When she watches the movie, mostly she books the movie tickets on week-day after 5pm to watch the movie with her biyfriend at theater that is near where she lives. Oneday she was watching the TV from netflix, she finds out her favorite Marvel has released new movie, Ant-man and the Wasp. She wants to book the movie right away.

* <h3>System Persona</h3>

Alexa is a helper for user to get their goal fast and efficiently. When user gives Alexa proper information for their needs, she will search the right information for user and show to web-browser what she found. Sometimes, Alexa can recommend some nice suggestion so user can decide more easily. 

![scenario](https://user-images.githubusercontent.com/37642778/49683833-8daf7400-fb0e-11e8-9d7b-246c3f54c1f1.jpg)

* <h3>Screenshots</h3>

These are the screenshots which Alexa shows the appropriate information to help user get what they need more fluently.

> <h4>Home</h4>

The main home page consist with the content list of movie playing now and coming soon. Alexa is placed on the right side of the bottom as floating button so user can call anytime they need for help.

![home](https://user-images.githubusercontent.com/37642778/49841954-03605c00-fdfd-11e8-8c04-393f58d62e47.png)

> <h4>Alexa wake-up page</h4>

When user wakes-up Alexa and ask for booking the specific movie ticket, the voice-bar comes out with Alexa's speech script and sample keywords to help user to communicate with Alexa and continue to the next tesk more easily. 

![home-selected](https://user-images.githubusercontent.com/37642778/49684568-cbb19580-fb18-11e8-9896-9f652da91eff.png)

> <h4>List and Detail page</h4>

The page that user filters the information to find out the proper ticket to book. While this flow, Alexa suggests some information so that user won't need to repeat the same action and waste time.

![ticketing01](https://user-images.githubusercontent.com/37642778/49684573-d835ee00-fb18-11e8-8c1f-8c7827069711.png)

![seat payment02](https://user-images.githubusercontent.com/37642778/49684570-d0764980-fb18-11e8-90c1-b9a6eb023746.png)

> <h4>Confirmed Reservation page</h4>

The page that user finally finish the tesk. After complete the tesk, voice-bar go back to where it was and tell user to call back anytime when user need another help.

![ticket](https://user-images.githubusercontent.com/37642778/49841811-5ede1a00-fdfc-11e8-816c-69dadbb25582.png)


## User Scenario Video

Check this video to see the strong point of voice-based web-site usability. 

[![Watch the video](https://user-images.githubusercontent.com/37642778/49875062-6dabe780-fe63-11e8-9ae1-91532b27500e.png)](https://youtu.be/E3y8jG2AI04)




## Design Pattern / Structure

This Prototype is based on VanillaJS and PHP.

1. User wakes up Alexa with skill name Suroline and trigger the intent word to ask the certain tesk.
2. Amazon Skill server finds the right slot that matches to the user intent word.
3. Amazone Skill server send the data back to Echo for the proper feedback speech and to the HTTPS PHP Client Server at the same time.
4. HTTPS PHP Client Server get the data from Amazon skill and change the status to react with web-browser.

  
![unadjustednonraw_thumb_145f](https://user-images.githubusercontent.com/37642778/49697990-5f5e9100-fc01-11e8-9af9-daf78ab3de89.jpg)



## Before Ticketing (pre-requisites)

### Guide

Your server should downloaded this version: 

```
mariaDB : 10.0.25 (https://mariadb.org/)
nginx/1.11.1
PHP version: 7.0.7-4
PHP extension: mysqli, curl, mbstring
```


> <h4>Alexa Skill server</h4>

Put on your own server id and password in here :

```
file name: dbHelper.php

class DBinfo {
    public $host = "localhost";
    public $user = "root";
    public $password = “your_password”;
    public $dbname = “your_id”;
}
```


> <h4>HTTPS PHP Client Server</h4>


Put control.php file on your own server and add address in here : 

```
file name: control.php

function requestAlexaStatusHTTP(){
  if (request_started == false) {
    jQuery.ajax({
      type: "GET",
      dataType: "text",
      url: "your_server_address/control.php",
      success: recieveAlexaStatueResponse,
      error: recieveAlexaStatueError
    })
    request_started = true;
  }
}


function resetAlexaStatusHTTP(){
  if (request_started == false) {
    jQuery.ajax({
      type: "GET",
      dataType: "text",
      url: "your_server_address/control.php?confirm=true",
      success: resetSuccessHTTP,
      error: resetSuccessHTTP

    })
    request_started = true;
  }
}
```


## Recommended
* You should have some experience with scripting or Javascript programming.
* Review and install developer utilities from the [Alexa developer](https://developer.amazon.com/alexa/).


## After Ticketing (testing)
* Review me how you felt after testing this prototype at [Medium](https://medium.com/@cocosince17) or [Youtube](https://youtube.com) where me and my co-worker posted on. It would be really helpful for us to have your great comments! Thanks :)




