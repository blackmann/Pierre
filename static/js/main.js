$(document).ready(() => {
  var header = $('#main-nav')
  header.hide()

  $(window).scroll(() => {
    if ($(this).scrollTop() > 450) {
      header.fadeIn()
    } else {
      header.fadeOut()
    }
  })

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }



  $('a[href*=\\#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);

    // close the burger menu
    $navbarBurgers.forEach(el => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });
  $('.slide').textSlider({
    timeout: 7000,
    slideTime: 0

  });
})

$(".logo").click(() => {
  document.querySelector(".hero").scrollIntoView({
    behavior: "smooth"
  })
})
$('.navbar-end .navbar-item:not(".nav_blog")').click(function(e) {
  e.preventDefault();
  $(".navbar-menu").removeClass('is-active');
  $(".navbar-burger").removeClass('is-active');
  $('html, body').animate({
    scrollTop: $("" + $(this).find("a").first().attr("href")).offset().top
  }, 500);
});


function startTyping() {
  var typespace = document.getElementById("typespace")

  var typewriter = new Typewriter(typespace, {
    loop: true
  })

  typewriter.typeString("<span class='mobile_app'>A mobile app developer</span>")
    .pauseFor(500)
    .deleteAll()
    .typeString("<span class='apex_expert'>An Oracle APEX expert</span>")
    .pauseFor(500)
    .deleteAll()
    .typeString("<span class='apex_leader'>A leader in the Official Oracle Forum</span>")
    .pauseFor("500")
    .deleteAll()
    .typeString("<span class='web_designer'>A beautiful web designer</span>")
    .start()
}

startTyping()
