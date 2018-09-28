// ## Custom/activation JS code
// ############################

// Activate headroom.js
// $("header").headroom({
// "offset": 0,
// "tolerance": {
//   "up": 10,
//   "down": 0
// },
//KEEP THE BELOW HIDDEN
// "classes": {
//   "initial": "animated",
//   "pinned": "slideDown",
//   "unpinned": "slideUp"
// }
// });

// to destroy
// $("#header").headroom("destroy");


// scroll stuff

// window.onscroll = function() {
// 	myFunction()
// };
//
// function myFunction() {
// 	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
// 		document.getElementById("progInfo").classList.add("progInfo--fixed");
// 	} else {
// 		document.getElementById("progInfo").classList.remove("progInfo--fixed");
// 	}
// }


// jQuery Sub-Nav stuff
$(document).ready(function() {
  $('.sub-toggle').click(function() {
    $('.subNav').toggleClass('is-open', 500);
  })
})
