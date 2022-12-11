// =====nav scrolled fixed top====
$(window).scroll(function(){
  $(".header").toggleClass('scrolled',$(this).scrollTop()>100);
})
// =====nav scrolled fixed top====

// ====typed js===
var typed = new Typed('.titled',{
  strings: ["Learn with Mehedi","Web Developer","Software Engineering"],
  typeSpeed: 200,
  loop: true
});
// ====typed js===

// ====calculator area ===


function insertNumber(number){
  var existingNumbers = $("#result").val();
  $("#result").val(existingNumbers + number)
}
function clearResult(){
  $("#result").val('')
}
function calculate(){
  var result = eval($("#result").val())
  $("#result").val(result)
}
function deleteNumber(){
  var presentValue = $("#result").val();
  $("#result").val(presentValue.slice(0,-1));
}
function percentNumber(){
  var presentValue = $("#result").val();
  $("#result").val(presentValue / 100);
}

$('.testss').hover(function(){
  $('.testss').html("<b><i>use it</i></b>");
}, function(){
  $('.testss').html("<b><i>leave it</i></b>");
})

$('.testss').css({"text-align" : "center", "font-size" : "24px", "background-color" : "green", "color" : "white", "padding" : "15px"});
// ====calculator area ===

// ====form area=====
$(document).ready(function(){
  $('.tTip').hover(function(event){
  // mouse hover
  var spanText = $(this).next().html();
  
  $('<p class="toolTip"></p>')
  .text(spanText)
  .appendTo('body')
  .css('top', (event.pageY - 40) + 'px')
  .css('left', (event.pageX + 20) + 'px')
  .fadeIn('slow');
  }, function() {
  $('.toolTip').remove();
  }).mousemove(function(event){
  // when mouse move
  $('.toolTip')
  .css('top', (event.pageY - 40) + 'px')
  .css('left', (event.pageX + 20) + 'px');
  });
  });
  
// ====form area=====