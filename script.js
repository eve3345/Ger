const upPaper = document.querySelector('.js-up-paper');
const content = document.querySelector('.js-envelop-content');
const sticker = document.querySelector('.js-sticker');
const notes = document.querySelectorAll('.js-note');

let isOpen = false;

sticker.addEventListener('click', toggleEnvelope);
upPaper.addEventListener('click', toggleEnvelope);

function toggleEnvelope() {
  if (!isOpen) {
    gsap.to(upPaper, {
      rotateX: -120,
      duration: 1,
      transformOrigin: "bottom"
    });
    gsap.to(content, {
      height: "300px",
      duration: 1
    });
    isOpen = true;
  } else {
    gsap.to(upPaper, {
      rotateX: 0,
      duration: 1,
      transformOrigin: "bottom"
    });
    gsap.to(content, {
      height: "0px",
      duration: 1
    });
    isOpen = false;
  }
}
