//Tool: http://www.accessify.com/tools-and-wizards/developer-tools/html-javascript-convertor/

//-------****** Valentines Foot ******-------//
	var valentines_foot="";
	var footObject = [{
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
	//Build HTML Object from footObject data
	var h2="<h2>"+footObject[0].h2+"</h2>"
	var valentines_foot=h2+'<div class="foot">';
	 for (var i = 1; i <= footObject.length-1; i++) {
		valentines_foot+='<a class="fade" href="/valentines/'+footObject[i].img+'-valentines/"><div class="wrap"><img class="thumb" src="/images/valentines/'+footObject[i].img+'-valentine.jpg" alt="'+footObject[i].name+'"><span class="center">'+footObject[i].name+'</span></div></a>';
	 }valentines_foot+="</div>";


//-------****** Valentine Images ******-------//
function imagePop(image_name,image_number) {
var image_test;
for (var i = 1; i <= image_number; i++) {
	image_test = '<a class="fancybox" href="'+'/images/valentines/'+image_name+'-valentines/'+image_name+'-valentine'+i+'.jpg"'+'" data-fancybox-group="gallery"><img class="thumb" src="/images/valentines/'+image_name+'-valentines/'+image_name+'-valentine'+i+'.jpg" alt="'+image_name+'_valentines"></a>';
	$(".vtines").append(image_test);
};
};

//-------****** Fancy Box ******-------//
$(document).ready(function() {
			/*
			 *  Simple image gallery. Uses default settings
			 */

			$('.fancybox').fancybox();

			$("#fancybox-manual-c").click(function() {
				$.fancybox.open([
					{
						href : '1_b.jpg',
						title : 'My title'
					}, {
						href : '2_b.jpg',
						title : '2nd title'
					}, {
						href : '3_b.jpg'
					}
				], {
					helpers : {
						thumbs : {
							width: 75,
							height: 50
						}
					}
				});
			});

		});
