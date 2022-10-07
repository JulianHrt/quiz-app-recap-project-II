console.clear();

const bookmark = document.querySelector('[data-js="bookmark--button"]');
const icon = document.querySelector('[data-js="bookmark--icon"]');

bookmark.addEventListener("click", () => {
  icon.classList.toggle("bookmark--active");
});

const bookmarkZwei = document.querySelector('[data-js="bookmark--button2"]');
const iconZwei = document.querySelector('[data-js="bookmark--icon2"]');

bookmarkZwei.addEventListener("click", () => {
  iconZwei.classList.toggle("bookmark--active");
});

const bookmarkDrei = document.querySelector('[data-js="bookmark--button3"]');
const iconDrei = document.querySelector('[data-js="bookmark--icon3"]');

bookmarkDrei.addEventListener("click", () => {
  iconDrei.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector('[data-js="answer--button"]');
const answer = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () => {
  if (answerButton.textContent.trim() === "Show answer") {
    answer.classList.toggle("card__answer--active");
    answerButton.textContent = "hide answer";
  } else if (answerButton.textContent.trim() === "hide answer") {
    answer.classList.toggle("card__answer--active");
    answerButton.textContent = "Show answer";
  }
});

const answerButtonZwei = document.querySelector('[data-js="answer--button2"]');
const answerZwei = document.querySelector('[data-js="answer2"]');

answerButtonZwei.addEventListener("click", () => {
  answerZwei.classList.toggle("card__answer--active");
});

const answerButtonDrei = document.querySelector('[data-js="answer--button3"]');
const answerDrei = document.querySelector('[data-js="answer3"]');

answerButtonDrei.addEventListener("click", () => {
  answerDrei.classList.toggle("card__answer--active");
});
