const left = document.querySelector(".left");
const right = document.querySelector(".right");
const conatainer = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  conatainer.classList.add("hover-left");
});
left.addEventListener("mouseleave", () => {
  conatainer.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  conatainer.classList.add("hover-right");
});
right.addEventListener("mouseleave", () => {
  conatainer.classList.remove("hover-right");
});
