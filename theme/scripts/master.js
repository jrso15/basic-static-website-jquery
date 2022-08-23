import "../styles/sass/_global.scss";
import "../styles/sass/_main.scss";
import "../styles/sass/_navigation.scss";

// SIDE NAVIGATION
function sideNavDot() {
  const scrollValue = $(window).scrollTop();
  const heightSec2 = $(".sec2").offset().top;
  const heightSec3 = $(".sec3").offset().top;
  const heightSec4 = $(".sec4").offset().top;

  if (scrollValue < heightSec2) {
    $(".sideNavigation .dots").not(".one").removeClass("active");
    $(".one").addClass("active");
  } else if (scrollValue < heightSec3) {
    $(".sideNavigation .dots").not(".two").removeClass("active");
    $(".two").addClass("active");
  } else if (scrollValue < heightSec4) {
    $(".sideNavigation .dots").not(".three").removeClass("active");
    $(".three").addClass("active");
  } else {
    $(".sideNavigation .dots").not(".four").removeClass("active");
    $(".four").addClass("active");
  }
}

$(window).on("scroll", sideNavDot);

$(".sideNavigation .dots").on("click", function () {
  const goToSection = ".s" + $(this).attr("id");
  $("body, html").animate({
    scrollTop: $(goToSection).offset().top + 1,
  });
});

//SIDE NAVIGATION SHOW WHEN SCROLL
$(window).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 800) {
    $(".sideNavigation").fadeIn();
  } else {
    $(".sideNavigation").fadeOut();
  }
});

// HEADER NAVIGATION
$(".headerNavigation a[href*='#']").on("click", function (e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    500,
    "linear"
  );
});

// VIDEO THUMBNAIL
$(".videoThumbnail").on("click", function (e) {
  e.preventDefault();

  $("#player")[0].src += "?autoplay=1";
  $("#player").show();
  $("#videoCover").hide();
  $("#play").hide();
});

// TABS
$(".tabsNnav li:first-child").addClass("active");
$(".tabContent").hide();
$(".tabContent:first").show();

$(".tabsNav li").click(function () {
  $(".tabsNav li").removeClass("active");
  $(this).addClass("active");
  $(".tabContent").hide();

  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn();
  return false;
});
