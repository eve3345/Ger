let mobile_media_query = window.matchMedia("(max-width: 400px)");
let tablet_media_query = window.matchMedia("(min-width: 400px) and (max-width: 600px)");
const notes = document.querySelectorAll(".js-note");

function resize_notes() {
  notes.forEach(note => {
    if (note.classList.contains("active")) {
      note.classList.remove("active");
      gsap.set(note, { height: "30%", clearProps: "all" });
    }
  });
}

function notes_ready() {
  gsap.to(".js-envelop-content", {
    height: "110%",
    duration: 0.5
  });

  notes.forEach((note, index) => {
    note.addEventListener("click", function () {
      if (mobile_media_query.matches || tablet_media_query.matches) {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          gsap.set(this, { height: "30%", clearProps: "all" });
        } else {
          notes.forEach(n => {
            n.classList.remove("active");
            gsap.set(n, { height: "30%", clearProps: "all" });
          });
          this.classList.add("active");
          gsap.set(this, { height: 125 + 40 * index + "%" });
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", notes_ready);
