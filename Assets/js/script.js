import data from "./data.js";

var navBarUl = document.querySelector(".nav-bar-ul");

document.addEventListener("scroll",(e)=>{

    if(window.innerWidth >= 1024 ){
        var scrollUp = window.scrollY ;
        var scrollDn = scrollUp + window.innerHeight ;
        var minHeight = window.innerHeight + (5/6 * window.innerHeight) ;
        var midHeight =  window.innerHeight *2  ;
        var maxHeight = window.innerHeight *3;
        if($(".video-container").hasClass("lg:hidden") && $(".video-container").hasClass("passenger" )){
        if(scrollDn > minHeight && scrollDn < midHeight){
            $(".hero-section").addClass("hidden", "lg:hidden")
            $(".video-adjust-section-up").addClass("lg:hidden")
            $(".video-adjust-section-down").addClass("lg:hidden")
            $(".wrapper-all").addClass("lg:hidden")
            $(".video-container").removeClass("lg:hidden")
            $(".video-container").addClass("lg:block")
            
            window.scroll(0,1000 )
        }else if(scrollDn > midHeight && scrollDn < maxHeight){
            $(".hero-section").addClass("hidden", "lg:hidden")
            $(".video-adjust-section-up").addClass("lg:hidden")
            $(".video-adjust-section-down").addClass("lg:hidden")
            $(".wrapper-all").addClass("lg:hidden")
            $(".video-container").removeClass("lg:hidden")
            $(".video-container").addClass("lg:block")
            window.scrollTo({
                top: 6200,
                behavior: 'smooth'
            })
        }
        else{
            $(".hero-section").removeClass("hidden", "lg:hidden")
            $(".video-adjust-section-up").removeClass("lg:hidden")
            $(".video-adjust-section-down").removeClass("lg:hidden")
            $(".wrapper-all").removeClass("lg:hidden")
            $(".video-container").addClass("lg:hidden")
            $(".video-container").removeClass("lg:block")
        }
    }else if(!$(".video-container").hasClass("lg:hidden")){
      
        if(scrollUp <= 500 || scrollDn >= 6800){
            $(".hero-section").removeClass("hidden", "lg:hidden")
            $(".video-adjust-section-up").removeClass("lg:hidden")
            $(".video-adjust-section-down").removeClass("lg:hidden")
            $(".wrapper-all").removeClass("lg:hidden")
            $(".video-container").addClass("lg:hidden")
            $(".video-container").removeClass("lg:block")
        }

        if(scrollUp <= 500 ){
            window.scrollTo(0,0 )
       }else if(scrollDn >= 6800){
            window.scrollTo({
                top: maxHeight - 3/4 * (window.innerHeight),
                behavior: 'instant'
              })
              
       }
    }
    }
})

navBarUl.addEventListener("click",(e)=>{
    if(window.innerWidth >= 1024 ){
        $(".video-container").removeClass("passenger")
        setTimeout(()=>{
            $(".video-container").addClass("passenger")
        }
        ,1000)
    }
})

//   VIDEO SCROLL
function scrollVideo() {
    var video = $('#video').get(0),
        videoLength = video.duration,
        scrollPosition = $(document).scrollTop();

    video.currentTime = (scrollPosition / ($(document).height() - $(window).height())) * videoLength;
}

$(window).scroll(function (e) {
    scrollVideo();
});


const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}


// PHn
$("#owl-example").owlCarousel({
    itemsTablet : [899,1],
    itemsMobile : [599,1],
    navigation : false,
    navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
});


// PLAYERS 
data.forEach(data => {
    var ul = document.getElementById("ul");
    var li = document.createElement('li');
    li.className = `booking-card before:content-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 relative  flex flex-col m-2 rounded-xl overflow-hidden bg-center bg-cover text-center text-sky-800 mb-8 w-1/4 bg-[url('./Img/${data.full_name.split(' ')[0]}.png')]`
    li.innerHTML = ` <div class="book-container h-48">
    <div class="content   relative  flex items-center justify-center h-full w-full translate-y-0 opacity-0 md:translate-y-[-200px] md:opacity-0">
      <button class="uppercase font-bold text-white cursor-pointer hover:text-blue-900 btn">${data.position}</button>
    </div>
  </div>
  <div class="informations-container p-5 bg-gray-200 translate-y-0">
    <h2 class="text-sky-800 relative pb-2 mb-2 font-bold title after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-12 after:m-auto after:bg-blue-900 after:content-none">${data.full_name}</h2>
    <p class="sub-title">Age : ${data.age} Years (Born on ${data.birthday_GMT})</p>
    <p class="flex items-center justify-center mt-2">
       <svg class="mr-2" style="width:24px;height:24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
   <g>
      <g>
         <path d="M494.304,84.94H17.696C7.923,84.94,0,92.863,0,102.636v96.737v113.253v96.737c0,9.773,7.923,17.696,17.696,17.696h476.608
            c9.773,0,17.696-7.923,17.696-17.696v-96.737V199.373v-96.737C512,92.863,504.077,84.94,494.304,84.94z M273.696,221.341
            c12.592,6.455,21.235,19.563,21.235,34.659s-8.643,28.204-21.235,34.659V221.341z M35.392,217.069h25.272v77.862H35.392V217.069z
             M238.304,290.659c-12.592-6.455-21.235-19.563-21.235-34.659s8.643-28.204,21.235-34.659V290.659z M238.304,183.823
            c-32.464,7.962-56.627,37.293-56.627,72.177s24.163,64.216,56.627,72.177v63.492H35.392v-61.346H78.36
            c9.773,0,17.696-7.923,17.696-17.696V199.373c0-9.773-7.923-17.696-17.696-17.696H35.392v-61.346h202.912V183.823z
             M476.608,294.931h-25.272v-77.862h25.272V294.931z M476.608,181.677H433.64c-9.773,0-17.696,7.923-17.696,17.696v113.253
            c0,9.773,7.923,17.696,17.696,17.696h42.968v61.346H273.696v-63.492c32.464-7.962,56.627-37.293,56.627-72.177
            s-24.163-64.216-56.627-72.177v-63.492h202.912V181.677z"/>
      </g>
   </g>
   </svg>
   Minutes Played : ${data.minutes_played_overall}</p>
    <div class="more-information  opacity-0 ">
      <div class="flex items-center justify-center">
        <div class="box p-4 mt-5 bg-white font-bold info text-orange-500 mr-2 rounded-xl">
          <svg class="icon ml-7 mb-1" style="width:24px;height:24px"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="923.151px" height="923.151px" viewBox="0 0 923.151 923.151" style="enable-background:new 0 0 923.151 923.151;"
          xml:space="preserve">
      <g>
         <g>
            <path d="M28.543,898.924c-19.766,16.963-14.832,27.49,10.878,23.312c91.877-14.93,267.75-48.025,359.799-95.016
               c78.606-40.127,106.49,14.492,79.998,56.439c-9.812,15.537-3.264,24.322,14.454,19.449
               c101.449-27.891,316.05-110.889,374.075-323.176c2.648-9.688-1.834-22.586-9.852-28.633l-3.323-2.508
               c-6.67,7.953-13.692,15.65-21.099,23.057c-32.368,32.369-70.069,57.785-112.055,75.543
               c-43.484,18.393-89.658,27.719-137.24,27.719s-93.756-9.326-137.24-27.719c-41.986-17.758-79.686-43.174-112.055-75.543
               c-32.369-32.367-57.785-70.068-75.543-112.055c-18.392-43.483-27.718-89.657-27.718-137.24c0-47.582,9.326-93.756,27.718-137.24
               c9.037-21.367,20.069-41.617,32.98-60.626l-2.871-2.166c-8.851-6.676-22.778-6.019-30.967,1.454
               C211.8,166.582,74.808,320.625,42.488,683.764c-1.592,17.887,9.228,24.295,24.204,14.387
               c19.859-13.139,46.736-23.535,66.734-3.361C162.822,724.445,100.919,836.814,28.543,898.924z"/>
            <path d="M584.18,645.111c98.811,0,187.227-44.447,246.395-114.418c47.504-56.178,76.161-128.806,76.161-208.138
               C906.735,144.413,762.322,0,584.18,0C472.59,0,374.24,56.67,316.326,142.797c-34.54,51.366-54.703,113.207-54.703,179.759
               C261.625,500.697,406.037,645.111,584.18,645.111z M874.922,350.992c0.135,0.124,0.277,0.236,0.42,0.35
               c-2.85,29.344-10.07,57.858-21.584,85.081c-3.732,8.823-7.877,17.419-12.416,25.773c-0.2,0.016-0.401,0.029-0.602,0.061
               l-84.267,12.543l-32.812,4.883l-53.992-70.36l-1.422-1.852l35.193-108.312l84.855-27.881L874.922,350.992z M599.18,112.495
               l102.496-57.399c0.173-0.097,0.336-0.205,0.5-0.314c33.177,14.633,63.063,35.096,88.872,60.904
               c3.74,3.741,7.357,7.576,10.874,11.486c-0.043,0.164-0.091,0.326-0.123,0.494L779.191,242.69l-87.745,28.831l-92.268-67.036
               L599.18,112.495L599.18,112.495z M647.643,429.896l52.821,68.833l-45.616,107.279c-0.079,0.188-0.145,0.377-0.209,0.568
               c-22.886,5.662-46.45,8.535-70.46,8.535s-47.573-2.873-70.46-8.535c-0.064-0.191-0.129-0.381-0.208-0.568l-45.615-107.279
               l52.821-68.833H647.643L647.643,429.896z M377.312,115.687c25.809-25.809,55.696-46.271,88.872-60.904
               c0.164,0.108,0.328,0.217,0.5,0.314l102.496,57.397v91.99l-87.138,63.309l-5.13,3.727l-87.743-28.831l-10.373-52.774
               l-12.234-62.249c-0.033-0.167-0.08-0.33-0.123-0.494C369.953,123.263,373.57,119.428,377.312,115.687z M327.019,462.195
               c-4.54-8.354-8.684-16.95-12.416-25.773c-11.514-27.224-18.735-55.736-21.584-85.081c0.142-0.114,0.285-0.225,0.42-0.35
               l86.626-79.715l84.855,27.881l35.191,108.312l-55.414,72.212l-117.078-17.426C327.419,462.225,327.219,462.209,327.019,462.195z"
               />
         </g>
     
      </svg>
          <p>Goals : ${data.goals_overall}</p>
        </div>
        <div class="box date p-4 mt-5 bg-white font-bold text-orange-500 mr-2 rounded-xl" >
          <svg class="icon ml-7 mb-1" style="width:24px;height:24px"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 495.911 495.911" style="enable-background:new 0 0 495.911 495.911;" xml:space="preserve">
      <g>
         <g id="Layer_1_80_">
            <path d="M444.679,320.672c60.387-17.744,65.879-54.018,24.439-73.301c-6.653-3.096-54.633-25.674-61.21-27.957l-1.89-0.656
               c-4.9-1.703-9.97-1.791-14.631-0.547c-2.886-3.867-6.919-6.939-11.819-8.641l-1.889-0.658c-4.9-1.701-9.97-1.789-14.631-0.545
               c-2.886-3.865-6.919-6.939-11.819-8.643l-1.889-0.656c-4.9-1.701-9.97-1.791-14.631-0.545c-2.886-3.867-6.919-6.939-11.819-8.643
               l-1.889-0.656c-4.9-1.701-9.971-1.791-14.631-0.547c-2.886-3.865-6.919-6.939-11.819-8.643l-1.889-0.654
               c-5.659-1.967-11.544-1.777-16.765,0.129c-0.182-0.115-0.379-0.234-0.544-0.346c-14.824-9.994-35.158-26.152-48.939-37.283
               c-43.333-35-57.647,1.104-73.656,18.482c-3.361,3.65-3.494,7.916-0.884,12.047c1.987,3.145,4.342,6.057,7.75,10.746
               c-12.025,1.246-22.703,2.32-33.373,3.469c-12.947,1.391-23.867-2.697-32.767-12.127c-4.546-4.814-8.502-10.287-13.512-14.535
               c-4.026-3.412-21.258-10.304-42.02-2.697C0.284,171.067-2.867,278.825,1.514,304.117c2.834,16.355,7.782,22.074,16.04,24.691
               l2.909,5.313l-1.239,12.289c-0.636,6.297,2.879,11.637,8.001,12.154c5.123,0.516,9.636-4.014,10.27-10.311l1.24-12.285
               l2.816-3.328c13.27,1.924,26.573,3.512,39.92,4.621l3.438,5.35l-0.378,12.346c-0.193,6.326,3.686,11.408,8.831,11.564
               c5.146,0.158,9.332-4.674,9.523-11l0.38-12.344l3.244-4.428c6.442,0.219,38.847-15.259,105.731-2.598
               c13.168,2.493,26.641,4.123,39.975,4.148c2.721,0.004,5.442-0.004,8.164-0.014l3.393,4.887l0.066,12.35
               c0.033,6.328,4.093,11.268,9.24,11.24c5.149-0.027,9.158-5.008,9.123-11.338l-0.064-12.348l3.472-5.113
               c15.932-0.344,31.859-0.949,47.763-1.82c2.788-0.154,5.576-0.318,8.363-0.492c0.09,0.125,0.179,0.248,0.282,0.365l4.744,5.314
               l1.565,12.25c0.803,6.279,5.432,10.688,10.538,10.035c5.107-0.654,8.481-6.082,7.679-12.361l-1.565-12.25l2.765-5.379
               c17.226-1.678,34.345-4.156,51.202-8.143c0.065,0.063,0.125,0.131,0.194,0.189l5.427,4.617l3.225,11.92
               c1.654,6.111,6.843,9.846,11.813,8.5s7.569-7.186,5.915-13.295l-3.226-11.922l2.359-6.721
               C444.664,320.74,444.668,320.705,444.679,320.672z M196.221,289.083c-0.86,0.991-2.104,1.55-3.397,1.55
               c-0.186,0-0.372-0.012-0.558-0.035c-10.714-1.338-21.671-2.848-32.567-4.488c-1.62-0.244-2.979-1.35-3.549-2.886
               s-0.259-3.26,0.81-4.501l60.565-70.313c1.315-1.527,3.486-1.992,5.31-1.143c8.674,4.042,17.499,7.93,26.228,11.557
               c1.332,0.553,2.318,1.712,2.651,3.115s-0.026,2.882-0.967,3.975C230.587,249.343,213.771,268.871,196.221,289.083z
                M258.152,294.775c-0.858,0.986-2.099,1.547-3.395,1.547c-0.116,0-0.232-0.005-0.349-0.014c-11.088-0.86-22.436-1.908-33.73-3.113
               c-1.663-0.178-3.089-1.262-3.706-2.816c-0.616-1.554-0.32-3.322,0.77-4.59c15.535-18.087,33.142-38.587,50.54-58.494
               c1.236-1.416,3.22-1.912,4.978-1.249c9.632,3.638,18.956,6.847,27.71,9.54c1.452,0.446,2.581,1.596,3.001,3.055
               c0.42,1.46,0.076,3.034-0.916,4.185l-3.487,4.045C285.337,263.379,271.895,278.972,258.152,294.775z M358.514,253.671
               l-39.318,43.98c-0.855,0.956-2.076,1.501-3.355,1.501c-0.031,0-0.062,0-0.093-0.001c-7.992-0.165-20.372-0.521-33.968-1.279
               c-1.71-0.096-3.219-1.154-3.89-2.73c-0.671-1.577-0.389-3.397,0.729-4.696l26.567-30.895c4.845-5.64,9.854-11.472,14.837-17.172
               c1.103-1.263,2.816-1.807,4.446-1.412c11.415,2.762,21.855,4.518,31.033,5.218c1.708,0.131,3.193,1.219,3.833,2.808
               S359.655,252.395,358.514,253.671z"/>
         </g>
</svg>
          <p>Assists : ${data.assists_overall}</p>
        </div>
      </div>
      <p class="disclaimer mt-5 text-gray-600">Current Club : ${data.Current_Club} <br> <br> League : ${data.league} <br> <br> Weight : 67 kg <br> <br> Height : 1.69 m</p>
      </div>
  </div>
  `
  
    ul.appendChild(li);
})


$('#ul').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5
        }
      }
    ]
  });
  

//   stage

  window.addEventListener("DOMContentLoaded", function(e) {

        var stage = document.getElementById("stage");
        var fadeComplete = function(e) { stage.appendChild(arr[0]); };
        var arr = stage.getElementsByTagName("a");
        for(var i=0; i < arr.length; i++) {
          arr[i].addEventListener("animationend", fadeComplete, false);
        }
    
      }, false);