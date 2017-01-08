//Tool: http://www.accessify.com/tools-and-wizards/developer-tools/html-javascript-convertor/

//-------****** Valentines Foot ******-------//
var valentines_foot="";valentines_foot+="<h2>MORE VALENTINES</h2>",valentines_foot+='<div class="foot">',valentines_foot+='<a class="fade" href="/valentines/downton-abbey-valentines/">',valentines_foot+='<div class="wrap"><img class="thumb" src="/images/valentines/downton-abbey-valentine.jpg" alt=""><span class="center">Downton Abbey</span></div>',valentines_foot+="</a>",valentines_foot+='<a class="fade" href="/valentines/lost-valentines/">',valentines_foot+='<div class="wrap"><img class="thumb" src="/images/valentines/lost-valentine.jpg" alt=""><span class="center">Lost</span></div>',valentines_foot+="</a>",valentines_foot+='<a class="fade" href="/valentines/harry-potter-valentines/">',valentines_foot+='<div class="wrap"><img class="thumb" src="/images/valentines/harry-potter-valentine.jpg" alt=""><span class="center">Harry Potter</span></div>',valentines_foot+="</a>",valentines_foot+='<a class="fade" href="/valentines/hunger-games-valentines">',valentines_foot+='<div class="wrap"><img class="thumb" src="/images/valentines/hunger-games-valentine.jpg" alt=""><span class="center">Hunger Games</span></div>',valentines_foot+="</a>",valentines_foot+='<a class="fade" href="/valentines/TSwift-valentines">',valentines_foot+='<div class="wrap"><img class="thumb" src="/images/valentines/TSwift-valentine.jpg" alt=""><span class="center">Taylor Swift</span></div>',valentines_foot+="</a>",valentines_foot+='<a class="fade" href="/valentines/election-valentines">',valentines_foot+='<div class="wrap"><img class="thumb" src="/images/valentines/election-valentine.jpg" alt=""><span class="center">2016 Election</span></div>',valentines_foot+="</a>",valentines_foot+="</div>";
// <h2>MORE VALENTINES</h2>
// <div class="foot">
// <a class="fade" href="/valentines/downton-abbey-valentines/">
// <div class="wrap"><img class="thumb" src="/images/valentines/downton-abbey-valentine.jpg" alt=""><span class="center">Downton Abbey</span></div>
// </a>
// <a class="fade" href="/valentines/lost-valentines/">
// <div class="wrap"><img class="thumb" src="/images/valentines/lost-valentine.jpg" alt=""><span class="center">Lost</span></div>
// </a>
// <a class="fade" href="/valentines/harry-potter-valentines/">
// <div class="wrap"><img class="thumb" src="/images/valentines/harry-potter-valentine.jpg" alt=""><span class="center">Harry Potter</span></div>
// </a>
// <a class="fade" href="/valentines/hunger-games-valentines">
// <div class="wrap"><img class="thumb" src="/images/valentines/hunger-games-valentine.jpg" alt=""><span class="center">Hunger Games</span></div>
// </a>
// <a class="fade" href="/valentines/TSwift-valentines">
// <div class="wrap"><img class="thumb" src="/images/valentines/TSwift-valentine.jpg" alt=""><span class="center">Taylor Swift</span></div>
// </a>
// <a class="fade" href="/valentines/election-valentines">
// <div class="wrap"><img class="thumb" src="/images/valentines/election-valentine.jpg" alt=""><span class="center">2016 Election</span></div>
// </a>
// </div>

//-------****** Valentine Images ******-------//
function imagePop(image_name,image_number) {
var image_test;
for (var i = 1; i <= image_number; i++) {
	image_test = '<img class="thumb" src="/images/valentines/'+image_name+'-valentines/'+image_name+'-valentine'+i+'.jpg" alt="'+image_name+'_valentines">';
	$(".vtines").append(image_test);
};
};

