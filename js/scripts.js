//lightbox init
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
//init scrollspy
$("body").scrollspy({ target: "#main-nav" });
//smooth scrolling
$("#main-nav a").on("click", function(e) {
  // check for a hash value
  if (this.hash !== "") {
    // prevent default behaviour
    e.preventDefault();

    // store hash in variable
    const hash = this.hash;

    // animate smooth scroll
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      900,
      function() {
        // add hash to url after scroll
        window.location.hash = hash;
      }
    );
  }
});
// get current year for copyright
$("#year").text(new Date().getFullYear());
