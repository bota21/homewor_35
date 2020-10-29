$(() => {
  $('.design_wrappers_wrapper').not(':first').hide();
  $('.design_links_link').click(function () {
    $('.design_links_link').removeClass('design_active').eq($(this).index()).addClass('design_active');
    $('.design_wrappers_wrapper').hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass('design_active')
});
