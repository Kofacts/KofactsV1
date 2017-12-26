$(document).ready(function()
{
	//
	$('#fullpage').fullpage({
		anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'],
		afterLoad: function(anchorLink, index){
		var loadedSection = $(this);
		//using anchorLink
		if(window.matchMedia('(max-width: 768px)').matches && anchorLink == 'slide2' || window.matchMedia('(max-width: 768px)').matches && anchorLink == 'slide6'){
			//change the menu color to white
			$('button#toggleBar').css('color','white');
		}
		else
		{
			$('button#toggleBar').css('color','black');

		}
	}
	});
	
});
