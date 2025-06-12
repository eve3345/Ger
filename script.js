
//Variables
let mobile_media_query = window.matchMedia("(max-width: 400px)");
let tablet_media_query = window.matchMedia(
  "(min-width: 400px) and (max-width: 600px)"
);
const notes = document.querySelectorAll(".js-note");

//-> Function that resets the size of the notes.
function recize_notes() {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].classList.contains("active")) {
      notes[i].classList.remove("active");
      gsap.set(notes[i], {
        height: "30%",
        clearProps: "all"
      });
    }
  }
}

//-> Main function that enables all the notes.
function notes_ready() {
  gsap.to(".js-envelop-content", {
    height: "110%",
    duration: 0.5
  });

  for (let i = 0; i < notes.length; i++) {
    notes[i].addEventListener("click", function () {
      if (mobile_media_query.matches) {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          gsap.set(this, {
            height: "30%",
            clearProps: "all"
          });
        } else {
          for (let i = 0; i < notes.length; i++) {
            if (notes[i].classList.contains("active")) {
              notes[i].classList.remove("active");
              gsap.set(notes[i], {
                height: "30%",
                clearProps: "all"
              });
            }
          }
          this.classList.add("active");
          gsap.set(this, {
            height: 125 + 40 * i + "%"
          });
        }
      } else if (tablet_media_query.matches) {
