//-------****** Header ******-------//

var header = '<a href="/"><img alt="yenniper" id="logo" class="center" src="/images/yenniper.svg"></a>';

//-------****** Valentines Foot ******-------//
	var valentines_foot="";
	var pre_footObject = [{
			h2:"More Valentines:"
		},{
			img:"downton-abbey",
			name:"Downton Abbey"
			},{
			img:"harry-potter",
			name:"Harry Potter"
			},{
			img:"hunger-games",
			name:"Hunger Games"
		},{
			img:"lost",
			name:"Lost"
				},{
			img:"election",
			name:"Presidential Election"
			// },{
			// img:"stranger-things",
			// name:"Stranger Things"
		},{
			img:"TSwift",
			name:"Taylor Swift"
			
		}];
	//Setup footObject
	var footObject = [];
	footObject.push(pre_footObject[0]); //Add H2 as the first item in array
	 //Use the URL subfolder to figure out which object to skip --> store in hideClass var
	 var url = document.URL.substring(0,document.URL.length-1);//pull off trailing slash of URL ("/")
	 var subFolder = url.substr(url.lastIndexOf('/')+1, url.length-url.lastIndexOf('/'));//start after last slash & get all characters that follow
	 var hideClass = subFolder.substring(0, subFolder.length - 11); //pull off "-valentines" to mirror img of object
	 //Rebuild foot array without a link to the same page user is currently on
	 for (var i = 1; i <= pre_footObject.length-1; i++){
	 	if(pre_footObject[i].img!==hideClass){//if image equals subfolder name, skip it
	 		footObject.push(pre_footObject[i]);//rebuild array without array object that equals the page it's on
	 	};
	 };
	//Build HTML Object from footObject data --> store in valentines_foot var
	var h2="<h2>"+footObject[0].h2+"</h2>"
	var valentines_foot=h2+'<div class="rule2"></div>';
	 for (var i = 1; i <= footObject.length-1; i++) {
		valentines_foot+='<a class="fade" href="/valentines/'+footObject[i].img+'-valentines/"><h3>'+footObject[i].name+'</h3></a><div class="rule2"></div>';
	 };

//-------****** Valentine Images ******-------//
	function imagePop(image_name,image_number) {
	var image_test;
	for (var i = 1; i <= image_number; i++) {
		image_test = '<a class="fancybox" href="'+'/images/valentines/'+image_name+'-valentines/'+image_name+'-valentine'+i+'.jpg"'+'" data-fancybox-group="gallery"><img class="thumb vtine" src="/images/valentines/'+image_name+'-valentines/'+image_name+'-valentine'+i+'.jpg" alt="'+image_name+'_valentines"></a>';
		$(".vtines").append(image_test);
	};
	};

//-------****** Fancy Box ******-------//
function applePie() {
    return ( navigator.userAgent.match(/(iPhone|iPod|iPad)/i) );
}
	$(document).ready(function() {
		$(".fancybox")
    	.attr('rel', 'gallery')
    	.fancybox({
    		helpers: {
          		overlay: {
              	locked: true
          		}
      		},
      		your: 'settings',
    		afterShow: function() { 
        			if ( applePie() ) { $('body').css({'position': 'fixed'}); } 
    			},
    		afterClose: function() {
        			if ( applePie() ) { $('body').css({'position': ''}); }
    			},
    		scrolling   : 'hidden',
	        padding    : 0,
	        margin     : 5,
	        nextEffect : 'elastic',
	        prevEffect : 'elastic',
	        autoCenter : false,
	        afterLoad  : function () {
            			$.extend(this, {
                		type    : 'html',
                		width   : '95%',
                		height  : '95%',
                		content : '<div class="fancybox-image" style="overflow:hidden; background-image:url(' + this.href + '); background-size: contain; background-position:50% 50%;background-repeat:no-repeat;height:100%;width:100%;" /></div>'
         });
       	 }
    });
	$("#fancybox-manual-c").click(function() {
				$.fancybox.open();
			});

		});
//-------****** Swipe to Change ******-------//

$(function() {      
      //Enable swiping...
      $("body").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction=="right") {
          	$('a.fancybox-nav.fancybox-prev').click();
          } else if (direction=="left") {$('a.fancybox-nav.fancybox-next').click();}
           
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:2
      });
    });
//-------****** Analytics.js ******-------//
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
  analytics.load("IXiZx2DoiLFspO9g6QGJcOSonpDR2E7W");
  analytics.page();
  }}();

//-------****** JS Cookie ******-------//
  !function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var t=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=t,o}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(t){function o(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},o.defaults,i),"number"==typeof i.expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(s){}return r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape),document.cookie=[n,"=",r,i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],u=/(%[0-9A-Z]{2})+/g,d=0;d<p.length;d++){var f=p[d].split("="),l=f.slice(1).join("=");'"'===l.charAt(0)&&(l=l.slice(1,-1));try{var m=f[0].replace(u,decodeURIComponent);if(l=t.read?t.read(l,m):t(l,m)||l.replace(u,decodeURIComponent),this.json)try{l=JSON.parse(l)}catch(s){}if(n===m){c=l;break}n||(c[m]=l)}catch(s){}}return c}}return o.set=o,o.get=function(e){return o.call(o,e)},o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(n,t){o(n,"",e(t,{expires:-1}))},o.withConverter=n,o}return n(function(){})});
//-------****** Social Nav ******-------//
var social="";
social += "<div class=\"wrap\">";
social += "  	<div id=\"fb\" class=\"share\"><img src=\"\/images\/share-icons\/fb.svg\" alt=\"\"><\/div>";
social += "  	<div id=\"fb\" class=\"share\"><a href=\"https:\/\/twitter.com\/intent\/tweet?text="+url+"%20@YenniperBlog\" target=\"blank\"><img src=\"\/images\/share-icons\/twitter.svg\" alt=\"\"><\/a><\/div>";
social += "  	<div id=\"fb\" class=\"share\"><a data-pin-do=\"buttonBookmark\" data-pin-custom=\"true\" data-pin-save=\"false\" href=\"https:\/\/www.pinterest.com\/pin\/create\/button\/\"><img src=\"http:\/\/yenniper.com\/images\/share-icons\/pinterest.svg\"\/><\/a><\/div>";
social += "  	<script>$(\"#fb\").click(function(){FB.ui({method:\"share\",href:url},function(a){})});<\/script>";
social += "  	<\/div>";

// <div class="wrap">
//   	<div id="fb" class="share"><img src="/images/share-icons/fb.jpg" alt=""></div>
//   	<div id="fb" class="share"><a href="https://twitter.com/intent/tweet?text=Spread%20the%20love%20with%202016%20Election%20Valentines!%20trose.co/2jyFyp4%20@YenniperBlog" target="blank"><img src="/images/share-icons/twitter.jpg" alt=""></a></div>
//   	<div id="fb" class="share"><a data-pin-do="buttonBookmark" data-pin-custom="true" data-pin-save="false" href="https://www.pinterest.com/pin/create/button/"><img src="http://yenniper.com/images/share-icons/pinterest.jpg"/></a></div>
//   	<script>$("#fb").click(function(){FB.ui({method:"share",href:url},function(a){})});</script>
//   	</div>
