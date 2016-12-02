$(function() {
  $("#orders").on("click", function() {
    $.get('/api/quote', function(data){
      $("#quote").html(data);
    });
    $(this).html() == "Be quiet!" ? $(this).html('I order you to be quiet!') : $(this).html('Be quiet!');
  });

  $.get('/api/quote', function(data){
    $("#quote").html(data);
  });

});
