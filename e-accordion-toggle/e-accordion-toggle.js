$('.e-accordion-toggle__short').click(function() {
  $('.e-accordion-toggle__item').removeClass('e-accordion-toggle__item_view_active');
  $('.e-accordion-toggle__more').slideUp('normal');
  if($(this).next().is(':hidden') == true) {
    $(this).parent().addClass('e-accordion-toggle__item_view_active');
    $(this).next().slideDown('normal');
  }
});
