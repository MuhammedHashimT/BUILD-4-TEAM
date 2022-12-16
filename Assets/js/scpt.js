
//     var fixed = document.querySelectorAll(".fixed");

//  window.addEventListener("DOMContentLoaded", function(e) {

//     var stage = document.getElementById("stage");
//     var fadeComplete = function(e) { stage.appendChild(arr[0]); };
//     var arr = stage.getElementsByTagName("a");
//     for(var i=0; i < arr.length; i++) {
//       arr[i].addEventListener("animationend", fadeComplete, false);
//     }

//   }, false);

// //   VIDEO SCROLL

//   function scrollVideo() {
//     var video = $('#video').get(0),
//         videoLength = video.duration,
//         scrollPosition = $(document).scrollTop();

//     video.currentTime = (scrollPosition / ($(document).height() - $(window).height())) * videoLength;
// }

// $(window).scroll(function (e) {
//     scrollVideo();
// });

// // ON SCROLL FUNCTIONS

// window.addEventListener("scroll",(e)=>{
//     console.log( $(window).scrollTop());   
//     var scrollUp = window.scrollY;
//     var scrollDn = $(window).scrollTop() + $(window).height();

//     if (scrollUp <= 400 || scrollDn >= 5000 ) {
//         $("#vd").addClass("lg:hidden");
//         $("#vd").css("opacity","1");
//         $(".last").removeClass("lg:hidden");
//         $("#vd2").removeClass("lg:hidden");
        
//         console.log("On the if condition");
//     }
//      else {
//         $("#vd2").addClass("lg:hidden");
//         $(".last").addClass("lg:hidden");
//         $("#vd").removeClass("lg:hidden");
//         $("#vd").css("opacity","1");
//         console.log("On the else condition");
//     }

//     if (scrollDn >= 5000 ) {
//         $("#vd").addClass("2xl:hidden");
//         $("#2xl-show").removeClass("2xl:block");
//         fixed.forEach(f=>{
//             f.classList.remove('fixed')
//             f.classList.add('hidden')
//          })
//          $(".team").addClass("fixed");
//          $(".team").removeClass("hidden");
//          $(".nav-desk").addClass("fixed");
//          $(".nav-desk").removeClass("hidden");
//     }
//      else {
//         $("#2xl-show").addClass("2xl:hidden");
//         $("#vd").addClass("2xl:block");
//         fixed.forEach(f=>{
//             f.classList.add('fixed')
//             f.classList.remove('hidden')
//          })
         
//     }
//     if(scrollUp >= 4326){
//         $(".team").removeClass("fixed");
//          $(".team").addClass("hidden");
//     }

//     if(scrollUp <= 500){
       
//         $("#team").removeClass("lg:block");
//         $("#team").addClass("lg:hidden");
//     }else{
//         $("#team").removeClass("lg:hidden");
//         $("#team").addClass("lg:block");
//     }
// })

// var door = document.querySelector(".door");
// door.addEventListener("click",(e)=>{
//     var open = document.getElementById("open");
//     var close = document.getElementById("close");
    
//     open.classList.toggle("hidden");
//     close.classList.toggle("hidden");
//     var navMob = document.getElementById("navbar-mob");
//     if(open.classList.contains("opacity-0")){
        

//         navMob.classList.remove("-right-56","opacity-0");
//         navMob.classList.add("right-0","opacity-100");

//     }else{
//         navMob.classList.remove("-right-56","opacity-0");
//          navMob.classList.add("right-0","opacity-100");
//     }
// })

// var fixed = document.querySelectorAll(".fixed");
// fixed.forEach(f=>{
//    f.classList.remove('fixed')
// })
// console.log(fixed);

// //     $(".option").click(function(){
// //    $(".option").removeClass("active");
// //    $(this).addClass("active");
   
// // });