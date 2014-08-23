$(document).ready(function() {

	$('.select , input').styler();

	$('.selectpicker').selectpicker();

	$('.carousel').carousel({
	  // interval: 2000
	});

	/*--size--*/

	$(".size, .busket-table").on('click','a.up',function(){
		var size = $(this).parent().find('input[type="text"]').val();

		$(this).parent().find('input[type="text"]').val(parseInt(size) + 1);
	});

	$(".size, .busket-table").on('click','a.down',function(){
		var size = $(this).parent().find('input[type="text"]').val();

		if(1 < size){
			$(this).parent().find('input[type="text"]').val(parseInt(size) - 1);
		}
	});

	$('.size-btn').click(function(){
		var num = $('.size .row-form:visible').size();

		if (2 > num) {
			$(this).addClass('active');
			$(this).parents('tr').find('.row-form').addClass('active');
		}else {
			$(this).toggleClass('active');
			$(this).parents('tr').find('.row-form').toggleClass('active').find('input[type="text"]').val("1");
		}
	});


});