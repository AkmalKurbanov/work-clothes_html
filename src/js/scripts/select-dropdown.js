$(document).ready(function () {



  $('.form-group-ckecked').on('click', function () {
    $('.form-group-ckecked').not(this).removeClass('form-group-ckecked--active');
    $(this).toggleClass('form-group-ckecked--active');
  });

  $('.option').on('click', function () {
    let value = $(this).attr('data-value');
    $(this).parent().parent().parent().find('.select-type').val(value);
    $(this).parent().parent().parent().find('.form-group-ckecked span').text(value);
  });


});