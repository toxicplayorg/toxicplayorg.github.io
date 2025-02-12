$(document).ready(function() {
  $(".container .navbar .icon-bar").click(function() {
    $(".discord-section").hide();
  });
  $(".container .navbar ul .close").click(function() {
    $(".discord-section").show();
  });
});
