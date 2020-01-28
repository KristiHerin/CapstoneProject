$(document).ready(function(){

//     $('#home').show()
//   $('.aboutContent .projects .contact .resume').hide()
$('#home').click(function(){
    $('.aboutContent').hide()
    $('.projects').hide()
    $('.contact').hide()
    $('.resume').hide()
    $('.homePage').show()
    $('#selfie').hide()
    $('#goodreads').hide()
})  

  $('#aboutMe').click(function(){
      $('.aboutContent').show()
      $('.projects').hide()
      $('.contact').hide()
      $('.resume').hide()
      $('.homePage').hide()
      $('#selfie').show()
      $('#goodreads').show()
  })
  
  $('#projects').click(function(){
      $('.projects').show()
      $('.contact').hide()
      $('.resume').hide()
      $('.aboutContent').hide()
      $('.homePage').hide()
      $('#selfie').hide()
    $('#goodreads').hide()
  })
  
  $('#contact').click(function(){
      $('.contact').show()
      $('.resume').hide()
      $('.aboutContent').hide()
      $('.projects').hide()
      $('.homePage').hide()
      $('#selfie').hide()
    $('#goodreads').hide()
  })
  
  $('#resume').click(function(){
      $('.resume').show()
      $('.aboutContent').hide()
      $('.projects').hide()
      $('.contact').hide()
      $('.homePage').hide()
      $('#selfie').hide()
    $('#goodreads').hide()
  })

  
  }) //END READY FUNCTION
  





