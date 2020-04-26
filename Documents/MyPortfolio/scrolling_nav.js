// (function($) {
//   "use strict"; // Start of use strict

//   // Smooth scrolling using jQuery easing
//   $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: (target.offset().top - 56)
//         }, 1000, "easeInOutExpo");
//         return false;
//       }
//     }
//   });

//   // Closes responsive menu when a scroll trigger link is clicked
//   $('.js-scroll-trigger').click(function() {
//     $('.navbar-collapse').collapse('hide');
//   });

//   // Activate scrollspy to add active class to navbar items on scroll
//   $('body').scrollspy({
//     target: '#mainNav',
//     offset: 56
//   });

// })(jQuery); // End of use strict


window.onscroll = function(){
   scrollFunction()
}
function scrollFunction(){
   var sn = document.getElementById("sticky_nav");
      if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
         sn.style.top = "0"
      }
      else{
         sn.style.top = "-45px"
      }
}

function openList(x){
   var cL = document.getElementsByClassName("content_list");
   var i;
      for(i = 0; i < cL.length; i++){
         var OcL = cL[i];
            if(cL[i] != document.getElementById("thisList_" + x)){
               OcL.classList.remove("show_list")
            }
      }
   document.getElementById("thisList_" + x).classList.toggle("show_list")
}

function openSearch(){
   document.getElementById("thisSearch").classList.toggle("show_search");
   document.getElementById("btnSearch").getElementsByTagName("i")[0].classList.toggle("hidden");
   document.getElementById("btnSearch").getElementsByTagName("i")[1].classList.toggle("visible")
}

function openMenu(){
   document.getElementById("thisMenu").classList.toggle("show_menu");
   document.getElementById("btnMenu").getElementsByTagName("i")[0].classList.toggle("hidden");
   document.getElementById("btnMenu").getElementsByTagName("i")[1].classList.toggle("visible")
}
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
function myFunction() {
            location.reload();
        }