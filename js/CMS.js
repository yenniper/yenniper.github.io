//Tool: http://www.accessify.com/tools-and-wizards/developer-tools/html-javascript-convertor/

//-------****** Valentines Foot ******-------//
	var valentines_foot="";
	var pre_footObject = [{
			h2:"MORE VALENTINES"
		},{
			img:"downton-abbey",
			name:"Downton Abbey"
		},{
			img:"lost",
			name:"Lost"
		},{
			img:"harry-potter",
			name:"Harry Potter"
		},{
			img:"TSwift",
			name:"Taylor Swift"
		},{
			img:"election",
			name:"2016 Election"
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
	var valentines_foot=h2+'<div class="foot">';
	 for (var i = 1; i <= footObject.length-1; i++) {
		valentines_foot+='<a class="fade" href="/valentines/'+footObject[i].img+'-valentines/"><div class="wrap '+footObject[i].img+'"><img class="thumb" src="/images/valentines/'+footObject[i].img+'-valentine.jpg" alt="'+footObject[i].name+'"><span class="center">'+footObject[i].name+'</span></div></a>';
	 }valentines_foot+="</div>";

//-------****** Valentine Images ******-------//
	function imagePop(image_name,image_number) {
	var image_test;
	for (var i = 1; i <= image_number; i++) {
		image_test = '<a class="fancybox" href="'+'/images/valentines/'+image_name+'-valentines/'+image_name+'-valentine'+i+'.jpg"'+'" data-fancybox-group="gallery"><img class="thumb vtine" src="/images/valentines/'+image_name+'-valentines/'+image_name+'-valentine'+i+'.jpg" alt="'+image_name+'_valentines"></a>';
		$(".vtines").append(image_test);
	};
	};

//-------****** Fancy Box ******-------//
	$(document).ready(function() {
		$(".fancybox")
    	.attr('rel', 'gallery')
    	.fancybox({
	        padding    : 0,
	        margin     : 5,
	        nextEffect : 'fade',
	        prevEffect : 'none',
	        autoCenter : false,
	        afterLoad  : function () {
            			$.extend(this, {
                		type    : 'html',
                		width   : '95%',
                		height  : '95%',
                		content : '<div class="fancybox-image" style="background-image:url(' + this.href + '); background-size: contain; background-position:50% 50%;background-repeat:no-repeat;height:100%;width:100%;" /></div>'
         });
       	 }
    });
	$("#fancybox-manual-c").click(function() {
				$.fancybox.open();
			});

		});
