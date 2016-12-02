$.get('/api/quote', function(data){
  $("#quote").html(data);
});

$("#orders").on("click", function() {
  $.get('/api/quote', function(data){
    $("#quote").html(data);
  });
  console.log("click");
});
