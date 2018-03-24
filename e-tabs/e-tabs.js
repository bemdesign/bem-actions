$('.e-tabs__tab').click(function() {

	/* Сотояние табов */
	$('.e-tabs__tab').removeClass('e-tabs__tab_state_active').eq($(this).index()).addClass('e-tabs__tab_state_active');

	/* Сотояние табов */
	$('.e-tabs__item').removeClass('e-tabs__item_state_open').eq($(this).index()).addClass('e-tabs__item_state_open');

}).eq(0).addClass('.e-tabs__tab_state_active');
