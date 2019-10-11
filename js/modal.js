$(function() {
  $(".open").click(function(){
    $("#wrapper").css({
      filter: 'blur(8px)'
    })
  });
  $(".close").click(function(){
    $(".modal").fadeOut();
    $("#wrapper").css({
      filter: 'blur(0px)'
    })
  });
  $("#skillOpen").click(function(){
    $(".skillModal").fadeIn();
  });
  $("#repsOpen").click(function(){
    $(".repsModal").fadeIn();
  });
  $("#portfolioOpen").click(function(){
    $(".portfolioModal").fadeIn();
  });
});
