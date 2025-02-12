$(document).ready(function() {
  $(".container .navbar .icon-bar").click(function() {
    $(".footer").hide();
  });
  $(".container .navbar ul .close").click(function() {
    $(".footer").show();
  });
});
