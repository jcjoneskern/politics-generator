$(function() {
  $("#orders").on("click", getQuotes);
  
  $.get('/api/quote', function(data){
    $("#quote").html(data);
  });

  function getQuotes() {
    $.get('/api/quote', function(data){
      $("#quote").html(data);
    });
    $.get('/api/king', function(data){
      $("#orders").html(data);
    });
  }



});
