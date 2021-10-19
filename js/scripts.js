$(document).ready(function() {
  $("#paragraph1").click(function() {
    $("#paragraph1").addClass("highlight");
    $("#paragraph2").removeClass();
    $("#paragraph3").removeClass("highlight");
  });

  $("#paragraph2").click(function() {
    $("#paragraph2").addClass("highlight");
    $("#paragraph1").removeClass("highlight");
    $("#paragraph3").removeClass();
  });

  $("#paragraph3").click(function() {
    $("#paragraph3").addClass("highlight");
    $("#paragraph1").removeClass();
    $("#paragraph2").removeClass();
  });
});