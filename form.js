console.clear();

const form = document.querySelector('[data-js="form"]');
const questionsContainer = document.querySelector('[data-js="questionlist"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const alles = new FormData(form);
  const inputData = Object.fromEntries(alles);

  console.log(inputData);

  const headline = inputData.question;
  const paragraph = inputData.answer;
  const tag = inputData.tag;
  const question = document.createElement("li");

  question.innerHTML = `<article class="card">
  <h2 class="card__question">
    ${headline}
  </h2>
  <button
    class="card__button-answer"
    type="button"
    data-js="answer--button"
  >
    Show answer
  </button>
  <p class="card__answer" data-js="answer">${paragraph}</p>
  <ul class="card__tag-list">
    <li class="card__tag-list-item">#${tag}</li>
  </ul>
  <div class="card__button-bookmark">
    <button
      class="bookmark"
      aria-label="bookmark"
      type="button"
      data-js="bookmark--button"
    >
      <svg
        class="bookmark__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewbox="0 0 24 24"
        data-js="bookmark--icon"
      >
        <path
          d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
        />
      </svg>
    </button>
  </div>
</article>`;

  questionsContainer.append(question);
});
