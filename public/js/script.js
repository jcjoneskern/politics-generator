$(function() {
  $("#orders").on("click", function() {
    $.get('/api/quote', function(data){
      $("#quote").html(data);
    });
  });

  $.get('/api/quote', function(data){
    $("#quote").html(data);
  });

});
