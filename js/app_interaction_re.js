
//gloabl varb

var images = ['https://cdn.thetitlemag.com/wp-content/uploads/2018/07/ant-man-wasp-feat-2560x1440-c-default.jpg',
              'https://cnet2.cbsistatic.com/img/4esxNDLcLh0O_gq2VoCyBFDz8us=/1600x900/2018/06/27/6bc321f8-7ba5-4f37-b0a7-8f1559478d24/ant-man-and-the-wasp-concept-art.jpg',
              'https://nerdist.com/wp-content/uploads/2018/07/ant-man-and-the-wasp-spoilers.jpg'
];

var x = 0;
var currentSceneStatus = 0;
var voiceBarStat = false;
var MovieOpened = false;


//page js function


function pageJsInit(status) {
    movieItems = document.querySelectorAll(".first-row .slider-item");
    //console.log(movieItems.innerHTML)

    movieItems.forEach(function(each_movie) {
        each_movie.addEventListener("click", function() {
            openMovieContents(this.className);
        });
    });

    document.querySelector(".alexa-integration").addEventListener("click", function() {
        alexaInteraction(currentSceneStatus);
    });

}


//Alexa interaction function

function alexaInteraction(status) {
    if (voiceBarStat == false) {
        document.querySelector(".voice-bar").classList.add("wakeup");
        document.querySelector(".loader").classList.add("grow");

        voiceBarStat = true;
    }




    switch (status) {
        case 0: //click Alexa floating btn by mouse 

            scriptAnimation('Hi Caroline. Call Alexa if you need any help.', 400);

            document.querySelector(".helper-row").innerHTML =
                '<div class="helper-item item01">“<span class="alexa-color">Alexa,</span> book me Ant-man and the Wasp”</div>\
                <div class="helper-item item02">“<span class="alexa-color">Alexa,</span> show me all the movies playing now"</div>\
                <div class="helper-item item03">“<span class="alexa-color">Alexa,</span> show me my tickets”</div>';

            document.querySelector(".helper-item.item01").classList.add("called");
            document.querySelector(".helper-item.item02").classList.add("called");
            document.querySelector(".helper-item.item03").classList.add("called");

            document.querySelector(".helper-item.item01").addEventListener("click", function() {
                document.querySelector(".helper-item.item01").classList.add("shadowup");
                alexaInteraction(1);
                openMovieContents("slider-item slider-item-2");
            });

            break;

        case 1: //open movie content from main page (Ant-man and the Wasp movie content)
            scriptAnimation('You want to book Ant-man and the Wasp in Seattle. Shall I continue?', 100);

            document.querySelector(".helper-row").innerHTML =
                '<div class="helper-item item01">“Yes, continue please.”</div>\
                <div class="helper-item item02">“No, I want to book in New York"</div>\
                <div class="helper-item item03">“No, I want to book another movie”</div>';

            document.querySelector(".helper-item.item01").classList.add("called");
            document.querySelector(".helper-item.item02").classList.add("called");
            document.querySelector(".helper-item.item03").classList.add("called");



            document.querySelector(".helper-item.item01").addEventListener("click", function() {
                document.querySelector(".helper-item.item01").classList.add("shadowup");
                setTimeout(function() { alexaInteraction(2); }, 200);
                ticketingMovieContents();
            });

            break;

        case 2: //filter information
            scriptAnimation('When, where, with how many people are you planning to watch the movie?', 100);

            document.querySelector(".helper-row").innerHTML =
                '<div class="helper-item item01">“Tomorrow after 5 pm for 2 adults”</div>\
                <div class="helper-item item02">“AMC theater after 4pm for 2 adults”</div>\
                <div class="helper-item item03">“Today anytime for 1 adult and 1 senior”</div>';

            document.querySelector(".helper-item.item01").classList.add("called");
            document.querySelector(".helper-item.item02").classList.add("called");
            document.querySelector(".helper-item.item03").classList.add("called");

            document.querySelector(".helper-item.item01").addEventListener("click", function() {
                document.querySelector(".helper-item.item01").classList.add("shadowup");
                setTimeout(function() { alexaInteraction(3); }, 200);
                selectMoviePerson();
                selectMovieDate();
            });

            break;

        case 3: //recommend the theater
            scriptAnimation('AMC PACIFIC PLACE at 6:15 pm, E row middle seats are left. Shall I continue?', 100);

            document.querySelector(".helper-row").innerHTML =
                '<div class="helper-item item01">“Yes, continue please.”</div>\
             <div class="helper-item item02">“No, I want AMC pacific place at 5:10 pm”</div>';

            document.querySelector(".helper-item.item01").classList.add("called");
            document.querySelector(".helper-item.item02").classList.add("called");

            document.querySelector(".helper-item.item02").addEventListener("click", function() {
                document.querySelector(".helper-item.item02").classList.add("shadowup");
                setTimeout(function() { alexaInteraction(4); }, 200);
                selectMovieTime();
            });

            break;

        case 4: //recommend the seat
            scriptAnimation('All the middle seats are already taken. I recommend I3 and I4. Would you like to book here?', 100);

            document.querySelector(".helper-row").innerHTML =
                '<div class="helper-item item01">“Yes, continue please.”</div>\
             <div class="helper-item item02">“No, tell me the theater that have F13 and F14 as empty seats”</div>';

            document.querySelector(".helper-item.item01").classList.add("called");
            document.querySelector(".helper-item.item02").classList.add("called");

            document.querySelector(".helper-item.item02").addEventListener("click", function() {
                document.querySelector(".helper-item.item02").classList.add("shadowup");
                setTimeout(function() { alexaInteraction(5); }, 200);
                goBackToList();
            });

            break;

        case 5: //recommend the theater with user's required information
            scriptAnimation('Regal the landing stadium has the earliest showtime. Where would you like to book?', 100);

            document.querySelector(".helper-row").innerHTML =
                '<div class="helper-item item01">“I want REGAL THE LANDING STADIUM at 6 pm”</div>\
             <div class="helper-item item02">“Tell me the theater where G13 and G14 seats are left”</div>';

            document.querySelector(".helper-item.item01").classList.add("called");
            document.querySelector(".helper-item.item02").classList.add("called");

            document.querySelector(".helper-item.item01").addEventListener("click", function() {
                document.querySelector(".helper-item.item01").classList.add("shadowup");
                setTimeout(function() { alexaInteraction(6); }, 200);
                selectMovieTimeFInal();
            });

            break;

        case 6: //recommend the theater with user's required information
            scriptAnimation('REGAL THE LANDING STADIUM Aug 9 at 6pm for 2 adults F11 and F12. Ready to book?', 100);

            document.querySelector(".helper-row").innerHTML =
                '<div class="helper-item item01">“Yes, continue please.”</div>\
             <div class="helper-item item02">“No, tell me the theater where G13 and G14 seats are left”</div>';

            document.querySelector(".helper-item.item01").classList.add("called");
            document.querySelector(".helper-item.item02").classList.add("called");

            document.querySelector(".helper-item.item01").addEventListener("click", function() {
                document.querySelector(".helper-item.item01").classList.add("shadowup");
                setTimeout(function() { alexaInteraction(7); }, 200);
                
            });

            break;

        case 7: //recommend payment method 
            scriptAnimation('With Amazon pay, 10% discount price would be $27.72. How would you like to pay?', 100);

            document.querySelector(".helper-row").innerHTML =
                '<div class="helper-item item01">“Amazon pay”</div>\
             <div class="helper-item item02">“Tell me other events that I can get discount from”</div>';

            document.querySelector(".helper-item.item01").classList.add("called");
            document.querySelector(".helper-item.item02").classList.add("called");

            document.querySelector(".helper-item.item01").addEventListener("click", function() {
                document.querySelector(".helper-item.item01").classList.add("shadowup");
                setTimeout(function() { alexaInteraction(8); }, 200);
                selecMoviePayment();
            });

            break;

        case 8: //payment start
            scriptAnimation('Would you like to confirm this reservation by paying now?', 100);

            document.querySelector(".helper-row").innerHTML =
                '<div class="helper-item item01">“Yes, pay now”</div>\
             <div class="helper-item item02">“No. I want to change showtime”</div>';

            document.querySelector(".helper-item.item01").classList.add("called");
            document.querySelector(".helper-item.item02").classList.add("called");

            document.querySelector(".helper-item.item01").addEventListener("click", function() {
                document.querySelector(".helper-item.item01").classList.add("shadowup");
                setTimeout(function() { alexaInteraction(9); }, 200);
                confirmMovieTicketing();
            });

            break;

        case 9: //confirm reservation by paying ticket
            scriptAnimation('All right, here is your confirmed reservation. Do you need anything else?', 100);

            document.querySelector(".helper-row").innerHTML =
                '<div class="helper-item item01">“No, thank you”</div>\
             <div class="helper-item item02">“<span class="alexa-color">Alexa,</span> share these tickets with Min"</div>\
             <div class="helper-item item03">“<span class="alexa-color">Alexa,</span> add this schedule on my calendar”</div>';

            document.querySelector(".helper-item.item01").classList.add("called");
            document.querySelector(".helper-item.item02").classList.add("called");
            document.querySelector(".helper-item.item03").classList.add("called");

            document.querySelector(".helper-item.item01").addEventListener("click", function() {
                document.querySelector(".voice-bar").classList.add("fin");
                document.querySelector(".loader").classList.remove("grow");

                setTimeout(function() {
                    document.querySelector(".voice-bar").classList.remove("wakeup");
                    document.querySelector(".voice-bar").classList.remove("fin");

                }, 500);

                voiceBarStat = false;
            });

            break;

            case 10: //confirm reservation by paying ticket
            
            document.querySelector(".voice-bar").classList.add("fin");
            document.querySelector(".loader").classList.remove("grow");

            setTimeout(function() {
                document.querySelector(".voice-bar").classList.remove("wakeup");
                document.querySelector(".voice-bar").classList.remove("fin");

            }, 500);

            voiceBarStat = false;
            break;
    }

}

//Alexa voice-bar script animation function

function scriptAnimation(scriptValue, delay) {

    var txt = scriptValue.split("");

    var alexa_speaking = document.querySelector(".alexa-speaking");
    alexa_speaking.innerHTML = "&nbsp;";

    setTimeout(function() {
        function voice_animation() {
            if (txt.length > 0) {
                alexa_speaking.innerHTML += txt.shift();
                setTimeout(voice_animation, 16);
            }
        }
        voice_animation();
    }, delay);

}

//start booking function (main home -> movie list page)

function ticketingMovieContents(){
    //delete rotating img
    clearInterval(myInterval);
    ticketingPage();

}

//start booking function (main home -> movie list page)

function selectMoviePerson(){
    ticketingPage_person();
}

// select movie date function (movie list page)

function selectMovieDate(){
    ticketingPage_date();
}

//select movie time function (movie list page)

function selectMovieTime(){
    ticketingPage_time();
}

//go back to list function (movie theater detail page -> movie list page)

function goBackToList(){
    goBackTicketingPage ();
}

//start booking

function selectMovieTimeFinal(){
    ticketingPage_finalTime();
}

//select movie payment function

function selecMoviePayment(){   
    ticketingPage_payment();
    document.querySelector(".payment-list").classList.add("bg-notice");
}

//pay the ticket function

function confirmMovieTicketing(){
    ticketingPage_confirm();
}


//main-home: movie img rotation function

var myInterval
var rotateImage_x = 0;

function rotateImages() {
console.log(images.length)
  if (rotateImage_x + 1 > images.length) {
    rotateImage_x = 0;
  }
  document.querySelector(".image-rotator").innerHTML = '<div style = "background-image: url(' + images[rotateImage_x] + '); z-index: 2; opacity: 1; transition-duration: 750ms;"></div>';
  rotateImage_x++; 

}

//main-home: open movie content function

function openMovieContents(movie_name) {
    
    //main-home with the list of subnails are closed
    if (MovieOpened == false) {
        document.querySelector(".jaw-bone-content").classList.add("opened");
        document.querySelector(".row-container").classList.add("clicked");

        document.querySelector(".jaw-bone-container").classList.add("height-transition");
        document.querySelector(".jaw-bone-title").classList.add("transition");
        document.querySelector(".jaw-bone-overview-info").classList.add("transition");
        document.querySelector(".jaw-bone-pane").classList.add("pane-interaction");

        MovieOpened = true;
    }

    //diactivate other subnail movie
    document.querySelector(".slider-item-0").classList.add("clicked");
    document.querySelector(".slider-item-1").classList.add("clicked");
    document.querySelector(".slider-item-2").classList.add("clicked");
    document.querySelector(".slider-item-3").classList.add("clicked");
    document.querySelector(".slider-item-4").classList.add("clicked");
    document.querySelector(".slider-item-5").classList.add("clicked");
    document.querySelector(".slider-item-6").classList.add("clicked");
    //delete rotate img
    clearInterval(myInterval);


    //console.log("Get:" + movie_name);

    switch (movie_name) {
        case "slider-item slider-item-0":
        case "slider-item slider-item-0 clicked":
            document.querySelector(".slider-item-0").classList.remove("clicked");
            document.querySelector(".slider-item-0").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie01.png" class="slider-card-container-img"></div></a>\
            <div class="card-focused-0"></div>';
            
            document.querySelector(".card-focused-0").style.opacity = 1;

            document.querySelector(".jaw-bone-title").innerHTML = '<div class="title-text" style="opacity: 1;">Mission: Imposible Fallout</div>';
            document.querySelector(".jaw-bone-overview .jaw-bone-overview-info").innerHTML = 
                '<div class="meta">\
                    <span class="year text-transition" style="opacity: 1;">July 27, 2018 released</span>\
                    <span class="duration text-transition" style="opacity: 1;">2h 27m</span>\
                    <span class="rate text-transition" style="opacity: 1;>&#x02605;</span>\
                    <span class="rate-num text-transition" style="opacity: 1;">(139,328)</span>\
                </div>\
                <div class="synopsis">Ethan Hunt is assigned to intercept three stolen plutonium cores in Berlin before the Apostles can sell them to fundamentalist John Lark.</div>\
                <div class="jaw-bone-action"><a href="#"><span class="ticketing-btn">Ticketing</span></a></div>';

            document.querySelector(".image-rotator").innerHTML =
                '<div style="background-image: URL(https://vignette.wikia.nocookie.net/missionimpossible/images/c/cf/Mission_Impossible_Fallout_poster.jpg/revision/latest?cb=20180202011058); z-index: 2; opacity: 1;"></div>'

            document.querySelector(".slider-item-1").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie02.png" class="slider-card-container-img"></div></a>';            
            document.querySelector(".slider-item-2").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie03.png" class="slider-card-container-img"></div></a>';                
            document.querySelector(".slider-item-3").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie04.png" class="slider-card-container-img"></div></a>';
            document.querySelector(".slider-item-4").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie05.png" class="slider-card-container-img"></div></a>'; 
            document.querySelector(".slider-item-5").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie06.png" class="slider-card-container-img"></div></a>';



            break;


        case "slider-item slider-item-1":
        case "slider-item slider-item-1 clicked":
            document.querySelector(".slider-item-1").classList.remove("clicked");
            document.querySelector(".slider-item-1").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie02.png" class="slider-card-container-img"></div></a>\
            <div class="card-focused-1"></div>';

            document.querySelector(".card-focused-1").style.opacity = 1;

            document.querySelector(".jaw-bone-title").innerHTML = '<div class="title-text" style="opacity: 1; ">The Darkest Minds</div>';
            document.querySelector(".jaw-bone-overview .jaw-bone-overview-info").innerHTML = 
                '<div class="meta">\
                    <span class="year text-transition" style="opacity: 1;">August 3, 2018 released</span>\
                    <span class="duration text-transition" style="opacity: 1;">1h 45m</span>\
                    <span class="rate text-transition" style="opacity: 1;>&#x02605;</span>\
                    <span class="rate-num text-transition" style="opacity: 1;">(14,325)</span>\
                </div>\
                <div class="synopsis">A sudden disease kills over 90% of the children throughout the world, leaving the survivors with unusual abilities. </div>\
                <div class="jaw-bone-action"><a href="#"><span class="ticketing-btn">Ticketing</span></a></div>';
            

            document.querySelector(".image-rotator").innerHTML =
                '<div style="background-image: URL(https://pmcvariety.files.wordpress.com/2018/07/the-darkest-minds-2.jpg?w=1000); z-index: 2; opacity: 1;"></div>'


            document.querySelector(".slider-item-0").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie01.png" class="slider-card-container-img"></div></a>';          
            document.querySelector(".slider-item-2").innerHTML =
            '<a href="#"><div class="slider-card-container"><img src="./img/movie03.png" class="slider-card-container-img"></div></a>';
            document.querySelector(".slider-item-3").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie04.png" class="slider-card-container-img"></div></a>'; 
            document.querySelector(".slider-item-4").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie05.png" class="slider-card-container-img"></div></a>';              
            document.querySelector(".slider-item-5").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie06.png" class="slider-card-container-img"></div></a>';

            

            break;

        case "slider-item slider-item-2":
        case "slider-item slider-item-2 clicked":
            document.querySelector(".slider-item-2").classList.remove("clicked");
            document.querySelector(".slider-item-2").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie03.png" class="slider-card-container-img"></div></a>\
            <div class="card-focused-2"></div>';

            document.querySelector(".card-focused-2").style.opacity = 1;

            document.querySelector(".jaw-bone-title").innerHTML = '<div class="title-text" style="opacity: 1; ">ANT-MAN and the WASP</div>';
            document.querySelector(".jaw-bone-overview .jaw-bone-overview-info").innerHTML = 
                '<div class="meta">\
                    <span class="year text-transition" style="opacity: 1;">JULY 6, 2018 released</span>\
                    <span class="duration text-transition" style="opacity: 1;">1h 57m</span>\
                    <span class="rate text-transition" style="opacity: 1;></span>\
                    <span class="rate-num text-transition" style="opacity: 1;">(19,987)</span>\
                </div>\
                <div class="synopsis">Scott Lang is grappling with the consequences of his choices as both a super hero and a father. Approached by Hope and Dr. Hank Pym, Lang must fight alongside the Wasp.</div>\
                <div class="jaw-bone-action"><a href="#"><span class="ticketing-btn">Ticketing</span></a></div>';

            document.querySelector(".image-rotator").innerHTML ='<div style="z-index: 2; opacity: 1;"></div>'
            rotateImages();
            myInterval = setInterval(rotateImages, 3000);    


            document.querySelector(".slider-item-0").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie01.png" class="slider-card-container-img"></div></a>';
            document.querySelector(".slider-item-1").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie02.png" class="slider-card-container-img"></div></a>';           
            document.querySelector(".slider-item-3").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie04.png" class="slider-card-container-img"></div></a>'; 
            document.querySelector(".slider-item-4").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie05.png" class="slider-card-container-img"></div></a>';
            document.querySelector(".slider-item-5").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie06.png" class="slider-card-container-img"></div></a>';

            document.querySelector(".ticketing-btn").addEventListener("click", ()=> { 
                ticketingMovieContents();
            });

            break;

        case "slider-item slider-item-3":
        case "slider-item slider-item-3 clicked":
            document.querySelector(".slider-item-3").classList.remove("clicked");
            document.querySelector(".slider-item-3").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie04.png" class="slider-card-container-img"></div></a>\
            <div class="card-focused-3"></div>';

            document.querySelector(".card-focused-3").style.opacity = 1;

            document.querySelector(".jaw-bone-title").innerHTML = '<div class="title-text" style="opacity: 1; ">Mile 22</div>';
            document.querySelector(".jaw-bone-overview .jaw-bone-overview-info").innerHTML = 
                '<div class="meta">\
                    <span class="year text-transition" style="opacity: 1;">August 17, 2018 released</span>\
                    <span class="duration text-transition" style="opacity: 1;">1h 34m</span>\
                    <span class="rate text-transition" style="opacity: 1;></span>\
                    <span class="rate-num text-transition" style="opacity: 1;">(8,325)</span>\
                </div>\
                <div class="synopsis">American black operations agent James Silva leads a strike team code-named Overwatch to infiltrate a Russian FSB safe house in the United States.</div>\
                <div class="jaw-bone-action"><a href="#"><span class="ticketing-btn">Ticketing</span></a></div>';

            document.querySelector(".image-rotator").innerHTML =
                '<div style="background-image: URL(https://www.thenews.com.pk//assets/uploads/updates/2018-06-29/335315_110637_updates.jpg); z-index: 2; opacity: 1;"></div>'

            document.querySelector(".slider-item-0").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie01.png" class="slider-card-container-img"></div></a>';
            document.querySelector(".slider-item-1").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie02.png" class="slider-card-container-img"></div></a>';        
            document.querySelector(".slider-item-2").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie03.png" class="slider-card-container-img"></div></a>'; 
            document.querySelector(".slider-item-4").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie05.png" class="slider-card-container-img"></div></a>';
            document.querySelector(".slider-item-5").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie06.png" class="slider-card-container-img"></div></a>';

            

            break;

        case "slider-item slider-item-4":
        case "slider-item slider-item-4 clicked":
            document.querySelector(".slider-item-4").classList.remove("clicked");
            document.querySelector(".slider-item-4").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie05.png" class="slider-card-container-img"></div></a>\
            <div class="card-focused-4"></div>';

            document.querySelector(".card-focused-4").style.opacity = 1;

            document.querySelector(".jaw-bone-title").innerHTML = '<div class="title-text" style="opacity: 1;">Incredibles 2</div>';
            document.querySelector(".jaw-bone-overview .jaw-bone-overview-info").innerHTML = 
                '<div class="meta">\
                    <span class="year text-transition" style="opacity: 1;">June 5, 2018 released</span>\
                    <span class="duration text-transition" style="opacity: 1;">1h 35m</span>\
                    <span class="rate text-transition" style="opacity: 1;></span>\
                    <span class="rate-num text-transition" style="opacity: 1;">(25,823)</span>\
                </div>\
                <div class="synopsis">The Parrs, a family of superheroes, pursue the Underminer. Although he robs the Metroville Bank and escapes, they stop his drill tank from destroying City Hall with help from Lucius Best.</div>\
                <div class="jaw-bone-action"><a href="#"><span class="ticketing-btn">Ticketing</span></a></div>';

            document.querySelector(".image-rotator").innerHTML =
                '<div style="background-image: URL(https://boygeniusreport.files.wordpress.com/2018/02/incredibles-2.jpg?quality=98&strip=all&w=782); z-index: 2; opacity: 1;"></div>'

            document.querySelector(".slider-item-0").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie01.png" class="slider-card-container-img"></div></a>';
            document.querySelector(".slider-item-1").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie02.png" class="slider-card-container-img"></div></a>';           
            document.querySelector(".slider-item-2").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie03.png" class="slider-card-container-img"></div></a>'; 
            document.querySelector(".slider-item-3").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie04.png" class="slider-card-container-img"></div></a>';         
            document.querySelector(".slider-item-5").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie06.png" class="slider-card-container-img"></div></a>';

            

            break;

        case "slider-item slider-item-5":
        case "slider-item slider-item-5 clicked":
            document.querySelector(".slider-item-5").classList.remove("clicked");
            document.querySelector(".slider-item-5").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie06.png" class="slider-card-container-img"></div></a>\
            <div class="card-focused-5"></div>';

            document.querySelector(".card-focused-5").style.opacity = 1;

            document.querySelector(".jaw-bone-title").innerHTML = '<div class="title-text" style="opacity: 1; ">Puzzle</div>';
            document.querySelector(".jaw-bone-overview .jaw-bone-overview-info").innerHTML = 
                '<div class="meta">\
                    <span class="year text-transition" style="opacity: 1;">July 27, 2018 released</span>\
                    <span class="duration text-transition" style="opacity: 1;">1h 23m</span>\
                    <span class="rate text-transition" style="opacity: 1;></span>\
                    <span class="rate-num text-transition" style="opacity: 1;">(9,802)</span>\
                </div>\
                <div class="synopsis">Agnes, taken for granted as a suburban wife and mother, discovers a passion for solving jigsaw puzzles which unexpectedly draws her into a new world where her life unfolds in ways she could never have imagined.</div>\
                <div class="jaw-bone-action"><a href="#"><span class="ticketing-btn">Ticketing</span></a></div>';

            document.querySelector(".image-rotator").innerHTML =
                '<div style="background-image: URL(https://www.hisradio.com/sites/hisradio/userfiles/family_calendar/web-69262-DirectoryPhoto1-hero_puzzle-20.jpg); z-index: 2; opacity: 1;"></div>'

            document.querySelector(".slider-item-0").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie01.png" class="slider-card-container-img"></div></a>';
            document.querySelector(".slider-item-1").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie02.png" class="slider-card-container-img"></div></a>';          
            document.querySelector(".slider-item-2").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie03.png" class="slider-card-container-img"></div></a>'; 
            document.querySelector(".slider-item-3").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie04.png" class="slider-card-container-img"></div></a>'; 
            document.querySelector(".slider-item-4").innerHTML =
                '<a href="#"><div class="slider-card-container"><img src="./img/movie05.png" class="slider-card-container-img"></div></a>'; 

            

            break;
    }
    console.log(movie_name);
}

pageJsInit();