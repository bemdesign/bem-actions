$('.e-toggle-show__action').click(function() {
  $('.e-toggle-show__more').slideUp('normal');
  $('.e-toggle-show__action .text').text('Показать вопросы');
  if($('.e-toggle-show__more').css('display') == 'none') {
    $('.e-toggle-show__more').slideDown('normal');
    $('.e-toggle-show__action .text').text('Скрыть вопросы');
  }
});
