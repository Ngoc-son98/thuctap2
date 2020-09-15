	
		$(document).ready(function() {
    // kich vao nut nao thi cho no doi class
	$('.menu_services ul li').click(function(){
		$('.menu_services ul li').removeClass('active_services');
		$(this).addClass('active_services ');
		x= $(this).index();
		x=x+1;
		console.log(x);
		$('.cackhoi ._motkhoi').removeClass('active');
		$('.cackhoi ._motkhoi:nth-child('+x+')').addClass('active')

	});
});
	