
//global varb

var request_started = false;
var request_ended = false;

//page function

function ticketingPage () {

  //menu
  document.querySelector(".movies").classList.remove("current");
  document.querySelector(".ticketing").classList.add("current");
  //sub-menu
  document.querySelector(".sub-header-wrapper").innerHTML = 
    '<span class="title">Ticketing</span><span class="title sub-title">Seattle | Ant-man and the Wasp</span>';

  //main-view : disappear
  document.querySelector(".slider-mask.first-row").classList.add("hidden");
  document.querySelector(".row.movie-row.second").classList.add("hidden");
  document.querySelector(".bone-container").remove();
  
  //main-view : come out
  document.querySelector("body").style = 'overflow: hidden';
  document.querySelector(".slider-item-2 .slider-card-container-img").classList.add("movie-card-img");
  document.querySelector(".vignette").classList.add("big");
  document.querySelector(".image-rotator").classList.add("big");

  document.querySelector(".jaw-bone-content").classList.add("scale-up");
  document.querySelector(".jaw-bone-container").style = 'height: 88.8vh';
  document.querySelector(".image-rotator").style = 'opacity:0.15';
  document.querySelector(".row-container").style = 'overflow: visible';

  document.querySelector(".jaw-bone").classList.add("ticketing-container");

                                
  document.querySelector(".jaw-bone").innerHTML = 
    '<div class="person-select-container"> \
      <div class="ticketing-poster-img"> \
        <img src="./img/movie03.png" class="slider-card-container-img"> \
      </div> \
      <div class="ticketing-person"> \
        <div class="person-select-group"> \
          <div class="label-title">Adult($14.00)</div> \
          <div class="person-select-label"> \
            <div class="person-select-label-container adult"> \
              <div class="label">0</div> \
              <span class="arrow"></span> \
            </div> \
            <div class="person-select-num">\
              <ul class="person-select-num-container"> \
                <li class="person-select-num-list">1</li>\
                <li class="person-select-num-list select">2</li>\
                <li class="person-select-num-list">3</li>\
                <li class="person-select-num-list">4</li>\
                <li class="person-select-num-list">5</li>\
              </ul> \
            </div>\
          </div> \
        </div> \
        <div class="person-select-group"> \
          <div class="label-title">Child($10.00)</div> \
          <div class="person-select-label"> \
            <div class="person-select-label-container"> \
              <div class="label">0</div> \
              <span class="arrow"></span> \
            </div> \
          </div> \
        </div> \
        <div class="person-select-group"> \
          <div class="label-title">Senior($11.00)</div> \
          <div class="person-select-label"> \
            <div class="person-select-label-container"> \
              <div class="label">0</div> \
              <span class="arrow"></span> \
            </div> \
          </div> \
        </div> \
      </div> \
    </div> \
    <div class="select-date-container"> \
      <ul class="select-date-menu"> \
        <li class="select-date-menu-list current">Aug 8 (Today)</li> \
        <li class="select-date-menu-list">Aug 9 (Weds)</li> \
        <li class="select-date-menu-list">Aug 10 (Thurs)</li> \
        <li class="select-date-menu-list">Aug 11 (Fri)</li> \
        <li class="select-date-menu-list">Aug 12 (Sat)</li> \
        <li class="select-date-menu-list">Aug 13 (Sun)</li> \
        <li class="select-date-menu-list">Aug 14 (Mon)</li> \
      </ul> \
    </div> \
    <div class="select-cinema-container">\
      <div class="selected">' + selected_container_svg + '</div>\
      <div class="select-cinema-menu-box">\
        <div class="select-cinema-menu row01"> \
          <div class="select-cinema-item">\
            <div class="select-cinema-item-title"> \
              <span class="item-cinema-name">Cinemark Lincoln Square</span>\
              <span class="item-cinema-noti">15 min from your location by car</span>\
              <span class="item-cinema-place-icon">' + adress_pin_icon_svg + '</span>\
            </div>\
            <div class="select-cinema-item-adress"><span>700 Bellevue Way NE, Bellevue, WA 98004</span></div>\
            <ul class="select-cinema-item-showtimes">\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">11:30 am</span><span class="seat-zone"><span class="seat-left">35</span> / 230 seats</span></a></li>\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">1:30 pm</span><span class="seat-zone"><span class="seat-left">50</span> / 230 seats</span></a></li>\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">5:30 pm</span><span class="seat-zone"><span class="seat-left">210</span> / 230 seats</span></a></li>\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">10:10 pm</span><span class="seat-zone"><span class="seat-left">200</span> / 230 seats</span></a></li>\
            </ul>\
          </div>\
        </div> \
        <div class="select-cinema-menu row02"> \
          <div class="select-cinema-item">\
            <div class="select-cinema-item-title"> \
              <span class="item-cinema-name">AMC PACIFIC PLACE 11</span>\
              <span class="item-cinema-noti">20 min from your location by car</span>\
              <span class="item-cinema-place-icon">' + adress_pin_icon_svg + '</span>\
            </div>\
            <div class="select-cinema-item-adress"><span>3505 Factoria Blvd. SE, Bellevue, WA 98006</span></div>\
            <ul class="select-cinema-item-showtimes">\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">10:50 am</span><span class="seat-zone"><span class="seat-left">40</span> / 230 seats</span></a></li>\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">11:30 am</span><span class="seat-zone"><span class="seat-left">100</span> / 230 seats</span></a></li>\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">1:30 pm</span><span class="seat-zone"><span class="seat-left">135</span> / 230 seats</span></a></li>\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">3:45 pm</span><span class="seat-zone"><span class="seat-left">50</span> / 230 seats</span></a></li>\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">5:10 pm</span><span class="seat-zone"><span class="seat-left">100</span> / 230 seats</span></a></li>\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">6:15 pm</span><span class="seat-zone"><span class="seat-left">200</span> / 230 seats</span></a></li>\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">9:15 pm</span><span class="seat-zone"><span class="seat-left">110</span> / 230 seats</span></a></li>\
            </ul>\
          </div>\
        </div> \
        <div class="select-cinema-menu row03"> \
          <div class="select-cinema-item">\
            <div class="select-cinema-item-title"> \
              <span class="item-cinema-name">REGAL THORNTON PLACE STADIUM 14 & IMAX</span>\
              <span class="item-cinema-noti">22 min from your location by car</span>\
              <span class="item-cinema-place-icon">' + adress_pin_icon_svg + '</span>\
            </div>\
            <div class="select-cinema-item-adress"><span>316 NE Thorton Place, Seattle, WA 98125</span></div>\
            <ul class="select-cinema-item-showtimes">\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">10:10 am</span><span class="seat-zone"><span class="seat-left">100</span> / 230 seats</span></a></li>\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">1:50 pm</span><span class="seat-zone"><span class="seat-left">55</span> / 230 seats</span></a></li>\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">4:30 pm</span><span class="seat-zone"><span class="seat-left">35</span> / 230 seats</span></a></li>\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">6:30 pm</span><span class="seat-zone"><span class="seat-left">75</span> / 230 seats</span></a></li>\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">8:50 pm</span><span class="seat-zone"><span class="seat-left">94</span> / 230 seats</span></a></li>\
            </ul>\
          </div>\
        </div> \
      </div> \
      <ul class="select-cinema-page">\
        <li class="page-list current">1<span></span></li>\
        <li class="page-list">2<span></span></li>\
        <li class="page-list">3<span></span></li>\
        <li class="page-list">4<span></span></li>\
      </ul>\
    </div>\
    <div class="last-select-container-right"></div>\
    <div class="last-select-container"></div>\
    <div class="confirmed-container"></div>'
    ;
  //selecting num of person

  document.querySelector(".person-select-label").addEventListener("click", ()=> {
    document.querySelector(".person-select-num").classList.add("clicked");
  });
  
  //select num list

  document.querySelector(".person-select-num-list.select").addEventListener("click", ()=> {
    document.querySelector(".person-select-label-container.adult").innerHTML='<div class="label">2</div><span class="arrow"></span>';
    document.querySelector(".person-select-num").classList.add("click-hidden");  
  });

  document.querySelector(".select-date-menu-list:nth-child(2)").addEventListener("click", ()=> {
    ticketingPage_date();
  });
        
}

function ticketingPage_person(){
  setTimeout(function(){
    document.querySelector(".person-select-label-container.adult").innerHTML='<div class="label adult">2</div><span class="arrow"></span>';
    document.querySelector(".label.adult").classList.add("alexa-selected");   
  }, 800);
}

function ticketingPage_date(){
  
  //remove
  document.querySelector(".select-date-menu-list:first-child").classList.remove("current");

  //show
  document.querySelector(".select-date-menu-list:nth-child(2)").classList.add("current");
  document.querySelector(".selected").classList.add("second");

  document.querySelector(".select-cinema-menu-box").style.opacity=0;


  setTimeout(function(){
    document.querySelector(".select-cinema-menu-box").innerHTML = 
      '<div class="select-cinema-menu row01"> \
        <div class="select-cinema-item">\
          <div class="select-cinema-item-title"> \
            <span class="item-cinema-name">Cinemark Lincoln Square</span>\
            <span class="item-cinema-noti">15 min from your location by car</span>\
            <span class="item-cinema-place-icon">' + adress_pin_icon_svg + '</span>\
          </div>\
          <div class="select-cinema-item-adress"><span>700 Bellevue Way NE, Bellevue, WA 98004</span></div>\
          <ul class="select-cinema-item-showtimes">\
            <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">5:30 pm</span><span class="seat-zone"><span class="seat-left">210</span> / 230 seats</span></a></li>\
            <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">10:10 pm</span><span class="seat-zone"><span class="seat-left">200</span> / 230 seats</span></a></li>\
          </ul>\
        </div>\
      </div>\
      <div class="select-cinema-menu row02"> \
        <div class="select-cinema-item">\
          <div class="select-cinema-item-title"> \
            <span class="item-cinema-name">AMC PACIFIC PLACE 11</span>\
            <span class="item-cinema-noti">20 min from your location by car</span>\
            <span class="item-cinema-place-icon">' + adress_pin_icon_svg + '</span>\
          </div>\
          <div class="select-cinema-item-adress"><span>3505 Factoria Blvd. SE, Bellevue, WA 98006</span></div>\
          <ul class="select-cinema-item-showtimes">\
            <li class="showtime-list-choose"><a class="showtime-list-btn"><span class="time-zone">5:10 pm</span><span class="seat-zone"><span class="seat-left">100</span> / 230 seats</span></a></li>\
            <li class="showtime-list-choice"><a class="showtime-list-btn"><span class="time-zone">6:15 pm</span><span class="seat-zone"><span class="seat-left">200</span> / 230 seats</span></a></li>\
            <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">9:15 pm</span><span class="seat-zone"><span class="seat-left">110</span> / 230 seats</span></a></li>\
          </ul>\
        </div>\
      </div> \
      <div class="select-cinema-menu row03"> \
        <div class="select-cinema-item">\
          <div class="select-cinema-item-title"> \
            <span class="item-cinema-name">REGAL THORNTON PLACE STADIUM 14 & IMAX</span>\
            <span class="item-cinema-noti">22 min from your location by car</span>\
            <span class="item-cinema-place-icon">' + adress_pin_icon_svg + '</span>\
          </div>\
          <div class="select-cinema-item-adress"><span>316 NE Thorton Place, Seattle, WA 98125</span></div>\
          <ul class="select-cinema-item-showtimes">\
            <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">10:10 am</span><span class="seat-zone"><span class="seat-left">100</span> / 230 seats</span></a></li>\
            <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">1:50 pm</span><span class="seat-zone"><span class="seat-left">55</span> / 230 seats</span></a></li>\
            <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">4:30 pm</span><span class="seat-zone"><span class="seat-left">35</span> / 230 seats</span></a></li>\
            <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">6:30 pm</span><span class="seat-zone"><span class="seat-left">75</span> / 230 seats</span></a></li>\
            <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">8:50 pm</span><span class="seat-zone"><span class="seat-left">94</span> / 230 seats</span></a></li>\
          </ul>\
        </div>\
      </div>';
    
      document.querySelector(".select-cinema-menu-box").style.opacity=1;

      document.querySelector(".showtime-list-choose").addEventListener("click",()=>{ 
        ticketingPage_time();
      });
      
    }, 300);
     
}


function ticketingPage_time(){
  
    //console.log("ssss");
    //interaction
    document.querySelector(".person-select-container").classList.add("seat-transition-01");
    document.querySelector(".select-date-container").classList.add("seat-transition-01");
    document.querySelector(".selected.second").classList.add("seat-transition-02");
    document.querySelector(".select-cinema-menu.row01").classList.add("seat-transition-02");
    document.querySelector(".select-cinema-menu.row02").classList.add("seat-transition-02");
    document.querySelector(".select-cinema-menu.row03").classList.add("seat-transition-02");
    document.querySelector(".select-cinema-page").classList.add("seat-transition-02");
    document.querySelector(".select-cinema-container").classList.add("seat-transition-bg");
    document.querySelector(".background").classList.add("seat-transition-03");
    document.querySelector(".last-select-container-right").classList.add("bg-right-container");
    document.querySelector(".jaw-bone.ticketing-container").classList.add("display-block");

    var all_seat_html = ['<div class="last-select-title">\
                            <span class="select-of-cinema">AMC PACIFIC PLACE</span> \
                            <span class="select-of-date">Aug 9 (Weds)</span> \
                            <span class="select-of-time">5:10 pm</span> \
                            <span class="select-of-people">2 Adults</span> \
                          </div>\
                          <div class="seat-select-zone">\
                            <div class="screen">' + screen_svg + '</div>\
                            <div class="seats">'];


    var each_seat;              
    for (each_seat in all_seats) {
      
      if(all_seats[each_seat][0] == "1") {
        //row starts
        all_seat_html += '<div class="seats-row">';
      }
      else if(all_seats[each_seat][0] == "3") {
        //row alphabet
          all_seat_html += '<div class="row-label left"><span class="row-label-name">' + all_seats[each_seat][2] + '</span></div>';
        }
      
      else if(all_seats[each_seat][0] == "0" && all_seats[each_seat][1]=="0") {
        //seat : empty seat
        all_seat_html += '<div class="seat-icon">'+ seat_icon_svg +' <span class="seat-icon-num">' + all_seats[each_seat][3] +'</span></div>';
      }

      else if(all_seats[each_seat][0] == "0" && all_seats[each_seat][1]=="1") {
        //seat : taken seat
        all_seat_html += '<div class="seat-icon">'+ seat_icon_svg_grey +' <span class="seat-icon-num">' + all_seats[each_seat][3] +'</span></div>';
      }

      else if(all_seats[each_seat][0] == "0" && all_seats[each_seat][1]=="2") {
        //seat : selected seat
        all_seat_html += '<div class="seat-icon">'+ seat_icon_svg_red +' <span class="seat-icon-num">' + all_seats[each_seat][3] +'</span></div>';
      }

      else if(all_seats[each_seat][0] == "5" && all_seats[each_seat][1]=="0") {
        //passage 
        all_seat_html += '<div class="seat-icon" style="opacity: 0">'+ seat_icon_svg +' <span class="seat-icon-num">' + all_seats[each_seat][3] +'</span></div>';
      }

      else if(all_seats[each_seat][0] == "4") {
        //row alphabet
          all_seat_html += '<div class="row-label right"><span class="row-label-name">' + all_seats[each_seat][2] + '</span></div>';
        }

      else if(all_seats[each_seat][0] == "2") {
        //row ends
        all_seat_html += '</div>';
      }

    }

    var seat_select_num ='';

    for (var selected in all_seats) {
      if (all_seats[selected][1] == "2") {
        seat_select_num += '<li class="selected-seat"><span class="seat-icon">'+ seat_icon_svg_selected +'</span>\
                      <span class="seat-num">' + all_seats[selected][2] +'</span>\
                      <span class="delete-seat-btn">'+ seat_select_cancle_icon_svg +'</span></li>'
      }
    }

    all_seat_html += ['</div>\
                                </div>\
              <div class="select-purchase-container"> \
               <div class="selected-seat-num-box-container"> \
                 <span class="seat-num-box-title">Selected Seats</span>\
                 <ul class="seat-num-box">\
                 '+ seat_select_num +'\
                 </ul>\
               </div> \
               <div class="selected-payment-box-container">\
                 <span class="selected-payment-box-title">Payment Method</span>\
                 <ul class="payment-method-type">\
                   <li class="payment-list">\
                     <span class="choose-btn"><span class="selected-click"></span></span>\
                     <span class="payment-method-name">Amazon Pay (20% discount)</span>\
                   </li>\
                   <li class="payment-list">\
                     <span class="choose-btn"><span class="selected-click"></span></span>\
                     <span class="payment-method-name">Credit Card (Visa, Master)</span>\
                   </li>\
                 </ul>\
               </div> \
               <div class="purchase-btn">\
               <a href="#"><span class="btn-title">Purchase $<span class="purchase-price">28.00</span></span></a>\
               </div>\
              </div>'];
    
    setTimeout(function(){
      
      document.querySelector(".last-select-container").innerHTML= all_seat_html;
      

      document.querySelector(".payment-list").addEventListener("click", ()=>{
        ticketingPage_payment();
      });
      
      document.querySelector(".title").addEventListener("click", ()=> {
        goBackTicketingPage ();
      })
      


    }, 750);

    document.querySelector(".last-select-container").classList.add("open");

 
}

function goBackTicketingPage (){
  
      //remove
                  
    document.querySelector(".last-select-container").classList.remove("open");
                      

    document.querySelector(".background").classList.remove("seat-transition-03");
    document.querySelector(".jaw-bone.ticketing-container").classList.remove("display-block");
    document.querySelector(".person-select-container").classList.remove("seat-transition-01");
    document.querySelector(".select-date-container").classList.remove("seat-transition-01");
    document.querySelector(".selected.second").classList.remove("seat-transition-02");
    document.querySelector(".select-cinema-page").classList.remove("seat-transition-02");
    document.querySelector(".select-cinema-container").classList.remove("seat-transition-bg");

    //add
    
    document.querySelector(".bg-right-container").classList.add("moveright");

    document.querySelector(".last-select-container-right").classList.add("seat-transition-04");
    document.querySelector(".background").classList.add("seat-transition-04");
    document.querySelector(".person-select-container").classList.add("seat-transition-04");
    document.querySelector(".select-date-container").classList.add("seat-transition-04");
    document.querySelector(".selected.second").classList.add("seat-transition-04");
    document.querySelector(".person-select-label-container.adult").innerHTML='<div class="label adult">2</div><span class="arrow"></span>';
    document.querySelector(".select-cinema-menu-box").style.opacity=0;
    
    document.querySelector(".select-cinema-page").classList.add("seat-transition-04");

    document.querySelector(".select-cinema-page").innerHTML =
      '<li class="page-list current">1<span></span></li>\
      <li class="page-list">2<span></span></li>';

    setTimeout(function(){
      document.querySelector(".select-cinema-menu-box").innerHTML = 
        '<div class="select-cinema-menu row01"> \
          <div class="select-cinema-item">\
            <div class="select-cinema-item-title"> \
              <span class="item-cinema-name">AMC LOEWS FACTORIA</span>\
              <span class="item-cinema-noti">25 min from your location by car</span>\
              <span class="item-cinema-place-icon">' + adress_pin_icon_svg + '</span>\
            </div>\
            <div class="select-cinema-item-adress"><span>3505 Factoria Blvd. SE, Bellevue, WA 98006</span></div>\
            <ul class="select-cinema-item-showtimes">\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">7:40 pm</span><span class="seat-zone"><span class="seat-left">220</span> / 230 seats</span></a></li>\
            </ul>\
          </div>\
        </div>\
        <div class="select-cinema-menu row02"> \
          <div class="select-cinema-item">\
            <div class="select-cinema-item-title"> \
              <span class="item-cinema-name">REGAL THE LANDING STADIUM</span>\
              <span class="item-cinema-noti">35 min from your location by car</span>\
              <span class="item-cinema-place-icon">' + adress_pin_icon_svg + '</span>\
            </div>\
            <div class="select-cinema-item-adress"><span>900 North 10th Place, Renton, WA 98057</span></div>\
            <ul class="select-cinema-item-showtimes">\
              <li class="showtime-list-choice"><a class="showtime-list-btn"><span class="time-zone">6:00 pm</span><span class="seat-zone"><span class="seat-left">170</span> / 230 seats</span></a></li>\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">10:45 pm</span><span class="seat-zone"><span class="seat-left">100</span> / 230 seats</span></a></li>\
            </ul>\
          </div>\
        </div> \
        <div class="select-cinema-menu row03"> \
          <div class="select-cinema-item">\
            <div class="select-cinema-item-title"> \
              <span class="item-cinema-name">PACIFIC SCIENCE CENTER IMAX THEATERS</span>\
              <span class="item-cinema-noti">40 min from your location by car</span>\
              <span class="item-cinema-place-icon">' + adress_pin_icon_svg + '</span>\
            </div>\
            <div class="select-cinema-item-adress"><span>200 Second Avenue North, Seattle, WA 98109</span></div>\
            <ul class="select-cinema-item-showtimes">\
              <li class="showtime-list"><a class="showtime-list-btn"><span class="time-zone">8:30 pm</span><span class="seat-zone"><span class="seat-left">200</span> / 230 seats</span></a></li>\
            </ul>\
          </div>\
        </div>';
    
      document.querySelector(".select-cinema-menu-box").style.opacity=1;

      document.querySelector(".showtime-list-choice").addEventListener("click", ()=>{
        ticketingPage_finalTime(); 
      });

    }, 350);
  }


function ticketingPage_finalTime(){
    
    //remove                         
    document.querySelector(".bg-right-container").classList.remove("moveright"); 
    document.querySelector(".last-select-container-right").classList.remove("seat-transition-04");
    document.querySelector(".background").classList.remove("seat-transition-04");
    document.querySelector(".person-select-container").classList.remove("seat-transition-04");
    document.querySelector(".select-date-container").classList.remove("seat-transition-04");
    document.querySelector(".selected.second").classList.remove("seat-transition-04");

    //add

    document.querySelector(".person-select-container").classList.add("seat-transition-01");
    document.querySelector(".select-date-container").classList.add("seat-transition-01");
    document.querySelector(".selected.second").classList.add("seat-transition-02");
    document.querySelector(".select-cinema-menu.row01").classList.add("seat-transition-02");
    document.querySelector(".select-cinema-menu.row02").classList.add("seat-transition-02");
    document.querySelector(".select-cinema-menu.row03").classList.add("seat-transition-02");
    document.querySelector(".select-cinema-page").classList.add("seat-transition-02");
    document.querySelector(".select-cinema-container").classList.add("seat-transition-bg");
    document.querySelector(".background").classList.add("seat-transition-03");
    document.querySelector(".last-select-container-right").classList.add("bg-right-container");
    document.querySelector(".jaw-bone.ticketing-container").classList.add("display-block");
    
    
    var all_seat_html = ['<div class="last-select-title">\
                    <span class="select-of-cinema">REGAL THE LANDING STADIUM</span> \
                    <span class="select-of-date">Aug 9 (Weds)</span> \
                    <span class="select-of-time">6:00 pm</span> \
                    <span class="select-of-people">2 Adults</span> \
                  </div>\
                  <div class="seat-select-zone">\
                    <div class="screen">' + screen_svg + '</div>\
                    <div class="seats">'];

    var each_seat; 

    for (each_seat in all_seats_final) {
      
      if(all_seats_final[each_seat][0] == "1") {
        //Row starts
        all_seat_html += '<div class="seats-row">';
      }
      else if(all_seats_final[each_seat][0] == "3") {
        //row alphabet
          all_seat_html += '<div class="row-label left"><span class="row-label-name">' + all_seats_final[each_seat][2] + '</span></div>';
        }
      
      else if(all_seats_final[each_seat][0] == "0" && all_seats_final[each_seat][1]=="0") {
        //seat: empty seat
        all_seat_html += '<div class="seat-icon">'+ seat_icon_svg +' <span class="seat-icon-num">' + all_seats_final[each_seat][3] +'</span></div>';
      }

      else if(all_seats_final[each_seat][0] == "0" && all_seats_final[each_seat][1]=="1") {
        //seat: taken seat
        all_seat_html += '<div class="seat-icon">'+ seat_icon_svg_grey +' <span class="seat-icon-num">' + all_seats_final[each_seat][3] +'</span></div>';
      }

      else if(all_seats_final[each_seat][0] == "0" && all_seats_final[each_seat][1]=="2") {
        //seat: selected seat
        all_seat_html += '<div class="seat-icon">'+ seat_icon_svg_red +' <span class="seat-icon-num">' + all_seats_final[each_seat][3] +'</span></div>';
      }

      else if(all_seats_final[each_seat][0] == "5" && all_seats_final[each_seat][1]=="0") {
        //passage
        all_seat_html += '<div class="seat-icon" style="opacity: 0">'+ seat_icon_svg +' <span class="seat-icon-num">' + all_seats_final[each_seat][3] +'</span></div>';
      }

      else if(all_seats_final[each_seat][0] == "4") {
        //row alphabet
          all_seat_html += '<div class="row-label right"><span class="row-label-name">' + all_seats_final[each_seat][2] + '</span></div>';
        }

      else if(all_seats_final[each_seat][0] == "2") {
        //row ends
        all_seat_html += '</div>';
      }

    }

    var seat_select_num ='';

    for (var selected in all_seats_final) {
      if (all_seats_final[selected][1] == "2") {
        seat_select_num += '<li class="selected-seat"><span class="seat-icon">'+ seat_icon_svg_selected +'</span>\
                      <span class="seat-num">' + all_seats_final[selected][2] +'</span>\
                      <span class="delete-seat-btn">'+ seat_select_cancle_icon_svg +'</span></li>'
      }
    }

    

    all_seat_html += ['</div>\
                      </div>\
      <div class="select-purchase-container"> \
      <div class="selected-seat-num-box-container"> \
        <span class="seat-num-box-title">Selected Seats</span>\
        <ul class="seat-num-box">\
        '+ seat_select_num +'\
        </ul>\
      </div> \
      <div class="selected-payment-box-container">\
        <span class="selected-payment-box-title">Payment Method</span>\
        <ul class="payment-method-type">\
          <li class="payment-list">\
            <span class="choose-btn"><span class="selected-click"></span></span>\
            <span class="payment-method-name">Amazon Pay (10% discount)</span>\
          </li>\
          <li class="payment-list">\
            <span class="choose-btn"><span class="selected-click"></span></span>\
            <span class="payment-method-name">Credit Card (Visa, Master)</span>\
          </li>\
        </ul>\
      </div> \
      <div class="purchase-btn">\
        <a href="#"><span class="btn-title">Purchase $<span class="purchase-price">28.00</span></span></a>\
      </div>\
      </div>'];
    
    setTimeout(function(){                    
      document.querySelector(".last-select-container").innerHTML= all_seat_html;
      document.querySelector(".last-select-container").classList.add("open");

      document.querySelector(".payment-list").addEventListener("click",()=>{
        ticketingPage_payment();
      });

      document.querySelector(".purchase-btn").addEventListener("click", ()=>{
        ticketingPage_confirm();
      });

    }, 450);
   
}

function ticketingPage_payment(){

  document.querySelector(".selected-click").classList.add("clicked");

  document.querySelector(".purchase-price").style.opacity=0;
  
  setTimeout(function(){
    document.querySelector(".purchase-price").innerHTML='';
    
    var string_10 = '27.72';
    var txt10 = string_10.split("");
    var purchase_price_value = document.querySelector(".purchase-price");
    
    setTimeout (function(){

      function voice_animation10(){
        if (txt10.length >0) {
          purchase_price_value.innerHTML += txt10.shift();
        setTimeout(voice_animation10, 30);
        }
      }      
      voice_animation10();
    }, 150);

  }, 400);

  document.querySelector(".purchase-price").style.opacity=1;

}

function ticketingPage_confirm(){

  document.querySelector(".last-select-container").classList.remove("open");
  document.querySelector(".background").classList.add("seat-transition-05");
  document.querySelector(".bg-right-container").classList.add("confirmed");
  document.querySelector(".bg-right-container.confirmed").classList.add("seat-transition-05");

  document.querySelector(".confirmed-container").style.opacity=0;
  setTimeout(function(){

    document.querySelector(".confirmed-container").innerHTML=
    '<div class ="confirmed">\
      <div class="confirmed-box-bg"><img src="css/confirmed-img.png"></div>\
      <div class="confirmed-box">\
        <div class="confirmed-box-title">\
          <span>Confirmed Reservation</span>\
        </div>\
        <div class="confirmed-box-content theater">\
          <span class="content-title">Theater</span>\
          <span class="content-title-content theater">REGAL THE LANDING STADIUM</span>\
        </div>\
        <div class="confirmed-box-content location">\
          <span class="content-title">Location</span>\
          <span class="content-title-content location">900 North 10th Place, Renton, WA 98057 <span class="confirmed-location-icon">'+location_confirmed_icon_svg +'</span></span>\
        </div>\
        <div class="confirmed-box-content date">\
          <span class="content-title">Date</span>\
          <span class="content-title-content date">Aug 9 (Weds)</span>\
        </div>\
        <div class="confirmed-box-content showtime">\
          <span class="content-title">Showtime</span>\
          <span class="content-title-content showtime">6:00 pm ~ 8:10 pm</span>\
        </div>\
        <div class="confirmed-box-content salon">\
          <span class="content-title">Salon</span>\
          <span class="content-title-content salon">11</span>\
        </div>\
        <div class="confirmed-box-content seats">\
          <span class="content-title">Seats</span>\
          <span class="content-title-content seats">F11 F12</span>\
        </div>\
        <div class="confirmed-box-content price">\
          <span class="content-title">Price</span>\
          <span class="content-title-content price">$27.74 paid by Amazon pay</span>\
        </div>\
      </div>\
      <ul class="confirmed-menu">\
        <li class="overview current">overview<span></span></li>\
        <li class="share">share<span></span></li>\
        <li class="edit&cancel">edit & cancel<span></span></li>\
      </ul>\
    </div>';

  }, 700);

  document.querySelector(".confirmed-container").style.opacity=1;
  document.querySelector(".confirmed-container").classList.add("open");

}


//jquery

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

function resetSuccessHTTP() {
  request_started = false;
}

function recieveAlexaStatueResponse(data){
  console.log(data);
  if (data){
    switch (data) {
      case "alexaWakeUp": 
        alexaInteraction(0);       
        break;
  
      case "openMovieContent":
        alexaInteraction(1);
        openMovieContents("slider-item slider-item-2");
        break;
  
      case "ticketingStart":
        alexaInteraction(2);
        ticketingMovieContents();
        break;

      case "selectPersonDate":
        alexaInteraction(3);
        selectMoviePerson();
        selectMovieDate();
        break;
      
      case "selectMovieTime":
        alexaInteraction(4);
        selectMovieTime();
        break;

      case "goBackToList":
        alexaInteraction(5);
        goBackToList();
        break;
      
      case "selectRecommandedTime":
        alexaInteraction(6);
        selectMovieTimeFinal();
        break;

      case "decideToContinue":
        alexaInteraction(7);
        break;

      case "selectPayment":
        alexaInteraction(8);
        selecMoviePayment();
        break;

      case "confirmTicketing":
        alexaInteraction(9);
        confirmMovieTicketing();
        break;

      case "closingTicketing":
        alexaInteraction(10);
        break;
    }
    //console.log(data);
    data = "";
    request_started = false;
  }
}



function recieveAlexaStatueError(data){
  request_started = false;
  if (data.result){
    console.log(data);
  }
}

window.onload = function(e){
  resetAlexaStatusHTTP();
  requestAlexaId = setInterval(requestAlexaStatusHTTP, 1000);

  console.log("request started...");
}




