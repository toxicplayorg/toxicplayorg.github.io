$(document).ready(function() {
  $(".container .logo").mouseover(function() {
    $(".container .toxiclogo-white").hide();
  });
  $(".container .logo").mouseover(function() {
    $(".container .toxiclogo-red").show();
  });
  $(".container .logo").mouseout(function() {
    $(".container .toxiclogo-red").hide();
  });
  $(".container .logo").mouseout(function() {
    $(".container .toxiclogo-white").show();
  });
});

$(document).ready(function() {
  $(".footer .logo .toxicplay").mouseover(function() {
    $(".footer .toxiclogo-white").hide();
  });
  $(".footer .logo .toxicplay").mouseover(function() {
    $(".footer .toxiclogo-red").show();
  });
  $(".footer .logo .toxicplay").mouseout(function() {
    $(".footer .toxiclogo-red").hide();
  });
  $(".footer .logo .toxicplay").mouseout(function() {
    $(".footer .toxiclogo-white").show();
  });
});
