$(document).ready(function(){

    $('.homePage').show()
  $('.about .projects .contact .resume').hide()
  
  $('.about').click(function(){
      $('.about').show()
      $('.projects').hide()
      $('.contact').hide()
      $('.resume').hide()
      $('.homePage').hide()
  })
  
  $('.projects').click(function(){
      $('.projects').show()
      $('.contact').hide()
      $('.resume').hide()
      $('.about').hide()
      $('.homePage').hide()
  })
  
  $('.contact').click(function(){
      $('.contact').show()
      $('.resume').hide()
      $('.about').hide()
      $('.projects').hide()
      $('.homePage').hide()
  })
  
  $('.resume').click(function(){
      $('.resume').show()
      $('.about').hide()
      $('.projects').hide()
      $('.contact').hide()
      $('.homePage').hide()
  })
  
  
  }) //END READY FUNCTION
  





