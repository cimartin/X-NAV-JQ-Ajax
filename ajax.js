$(document).ready(function() {
    $.ajax({
      type:"GET:",
      url: "text.txt",
      cache:false
    }).done(function(text){
      $("#second").html(text);
    });
    $("#second").click(function(){
      $.ajax({
        type:"GET",
        url: "text1.txt",
        cache:false
      }).done(function(text){
        $("#third").html(text);
      });
    });
    $("#fourth").click(function(){
      var request = $.ajax({
        type:"GET",
        url: "text2.txt", //este texto no existe con lo cual habra un done y un fail
        cache:false
    });
    request.done(function(text){
      $("#fiveth").html(text);
    });
    request.fail(function(text){
      $("#fiveth").html("error al coger text");
    });
  });
});
