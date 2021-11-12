import $ from "jquery";

export function openNav2() {
  $("#mySidenav2").addClass("width-menu");
  $("#cd-shadow-layer").css("display", "flex");
  $(".body").css("position", "relative");
  $(".body").css("overflow", "hidden");
  $(".body").css("height", "100vh");
  // $(".position-fixed-overlay").addClass("position-show");
  $(".closebtn2").css("position", "fixed");
}

export function closeNav2() {
  $("#mySidenav2").removeClass("width-menu");
  $("#cd-shadow-layer").css("display", "none");
  $(".body").css("position", "relative");
  $(".body").css("overflow", "");
  $(".body").css("height", "");
  $(".closebtn2").css("position", "relative");
}

export function scrollbar() {
  var scrollTop = $("#gallery").scrollTop();
  // console.log($(window).width() / 200);
  if (scrollTop == 0) {
    $("#scroll-handle").css({ "margin-top": "0px" });
  } else {
    //  $("#scroll-handle").css({"margin-top": ($("#gallery").scrollTop()) + "px"});
    if ($(window).width() < 767) {
      $("#scroll-handle").css({
        "margin-top":
          $("#gallery").scrollTop() / ($(window).width() / 60) + "px",
      });
    } else {
      $("#scroll-handle").css({
        "margin-top": $("#gallery").scrollTop() / 1.7 + "px",
      });
    }
  }
}
