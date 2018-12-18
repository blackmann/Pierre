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
})

$(".logo").click(() => {
    document.querySelector(".hero").scrollIntoView({
        behavior: "smooth"
    })
})


function startTyping() {
    var typespace = document.getElementById("typespace")

    var typewriter = new Typewriter(typespace, {loop: true})
    
    typewriter.typeString("A mobile app developer")
        .pauseFor(500)
        .deleteAll()
        .typeString("An Oracle APEX expert")
        .pauseFor(500)
        .deleteAll()
        .typeString("A leader in the Official Oracle Forum")
        .pauseFor("500")
        .deleteAll()
        .typeString("A beautiful web designer")
        .start()
}

startTyping()
