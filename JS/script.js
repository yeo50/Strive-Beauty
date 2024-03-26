$(document).ready(function () {
  $(window).on("scroll Load", function () {
    if ($(window).scrollTop() > 70) {
      $("nav").removeClass("mt-4");
      $("nav").removeClass("mx-5");
      $("nav").removeClass("rounded-5");
    } else {
      $("nav").addClass("mt-4");
      $("nav").addClass("mx-5");
      $("nav").addClass("rounded-5");
    }

    $("section").each(function () {
      var offset = 100;
      var top = $(window).scrollTop();
      var id = $(this).attr("id");
      var height = $(this).height();
      var sectionTop = $(this).offset().top - offset;
      if (top >= sectionTop && top <= sectionTop + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar")
          .find("[href='#" + id + "']")
          .addClass("active");
      }
    });
  });
  var typed = new Typed("#typed", {
    strings: ["Embrace the beauty within"],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
  });
  $(".h-sha").hover(
    function () {
      // over
      $(this).removeClass("shadow-sm");
      $(this).addClass("shadow");
      $(this).find(".heroicon").css("opacity", "1");
      $("#adimg").addClass("p-animi");

      if ($(this).find("h4").text() === "Clients") {
        $("#adimg").attr("src", "./img/client1.jpg");
      } else if ($(this).find("h4").text() === "Health System") {
        $("#adimg").attr("src", "/img/doctors1.jpg");
      } else if ($(this).find("h4").text() === "Our Doctor") {
        $("#adimg").attr("src", "/img/professional-doctor-office1.jpg");
      } else if ($(this).find("h4").text() === "Facilities") {
        $("#adimg").attr("src", "/img/hifunew.jpg");
      }
    },
    function () {
      // out
      $(this).removeClass("shadow");
      $(this).addClass("shadow-sm");
      $(this).find(".heroicon").css("opacity", "0.25");
      $("#adimg").removeClass("p-animi");
    }
  );

  let slideIndex = 1;
  showSlide(slideIndex);
  function plusSlide(n) {
    showSlide((slideIndex += n));
  }
  $(".next").click(function (e) {
    e.preventDefault();
    plusSlide(1);
  });
  $(".prev").click(function (e) {
    e.preventDefault();
    plusSlide(-1);
  });

  function showSlide(n) {
    let i;
    let slides = $(".mySlide");
    let cirImg = $(".success .success-patient img ");
    let successText = $(".success .success-text");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      $(cirImg[i]).removeClass("cir-active");
      $(successText[i]).addClass("d-none");
    }

    slides[slideIndex - 1].style.display = "block";
    $(cirImg[slideIndex - 1]).addClass("cir-active");
    $(successText[slideIndex - 1]).removeClass("d-none");
  }
  let cirImg = $(".success .success-patient img ");
  cirImg.click(function () {
    let index = cirImg.index(this);
    index += 1;
    showSlide((slideIndex = index));
  });
  $(".accordion-container .accordion-header").click(function () {
    $(".accordion-container .accordion-body").slideUp();
    $(this).next(".accordion-body").slideDown();
    $(this).next(".accordion-body").removeClass("d-none");
    $(".accordion-header span").text("+");
    $(this).children("span").text("-");
  });
});
