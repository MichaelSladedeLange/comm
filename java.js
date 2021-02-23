

$(window).scroll(function() {
   var hT = $('.Aboutussvg').offset().top,
       hH = $('.Aboutussvg').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH+0.3*wH)){
     $(".Aboutussvg").removeClass("visible");
     $(".Aboutussvg").addClass("ani1");

   }
});

$(window).scroll(function() {
   var hT = $('.mema').offset().top,
       hH = $('.mema').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH+0.3*wH)){
     $(".mema").removeClass("visible");
     $(".mema").addClass("memandawa");

   }
});

$(window).scroll(function() {
   var hT = $('.monthly1').offset().top,
       hH = $('.monthly1').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH+0.3*wH)){
     $(".monthly1").removeClass("visible");
     $(".monthly1").addClass("month");

   }
});
