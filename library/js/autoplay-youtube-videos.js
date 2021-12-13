$(document).ready(function() {
  var nowPlaying = "none";
  $(".iframe-main").hover(
    function() {
      nowPlaying = $(this)
        .find("iframe")
        .attr("src");
      $(this)
        .find("iframe")
        .attr("src", nowPlaying + "&autoplay=1&mute=1");
    },
    function() {
      $(this)
        .find("iframe")
        .attr("src", nowPlaying);
    }
  );
  $(".iframe-ccp").hover(
    function() {
      nowPlaying = $(this)
        .find("iframe")
        .attr("src");
      $(this)
        .find("iframe")
        .attr("src", nowPlaying + "&autoplay=1&mute=1");
    },
    function() {
      $(this)
        .find("iframe")
        .attr("src", nowPlaying);
    }
  );
  $(".iframe-iframeI").hover(
    function() {
      nowPlaying = $(this)
        .find("iframe")
        .attr("src");
      $(this)
        .find("iframe")
        .attr("src", nowPlaying + "&autoplay=1&mute=1");
    },
    function() {
      $(this)
        .find("iframe")
        .attr("src", nowPlaying);
    }
  );
  $(".iframe-iframeII").hover(
    function() {
      nowPlaying = $(this)
        .find("iframe")
        .attr("src");
      $(this)
        .find("iframe")
        .attr("src", nowPlaying + "&autoplay=1&mute=1");
    },
    function() {
      $(this)
        .find("iframe")
        .attr("src", nowPlaying);
    }
  );
  $(".iframe-iframeIII").hover(
    function() {
      nowPlaying = $(this)
        .find("iframe")
        .attr("src");
      $(this)
        .find("iframe")
        .attr("src", nowPlaying + "&autoplay=1&mute=1");
    },
    function() {
      $(this)
        .find("iframe")
        .attr("src", nowPlaying);
    }
  );
});
