const question = document.querySelector('[data-js="question"]');
const outputOne = document.querySelector('[data-js="outputOne"]');
const maxOne = document.querySelector('[data-js="question"]').maxLength;
const outputStyleOne = document.querySelector('[data-js="output--styleOne"]');
const outputStyleTwo = document.querySelector('[data-js="output--styleTwo"]');

outputOne.textContent = maxOne;

question.addEventListener("input", () => {
  const characters = question.value.length;

  outputOne.textContent = maxOne - characters;

  console.log(outputOne.value);

  if (outputOne.value <= 150 && outputOne.value >= 100) {
    outputStyleOne.classList.add("green");
  } else if (outputOne.value <= 100 && outputOne.value >= 50) {
    outputStyleOne.classList.add("yellow");
  } else if (outputOne.value <= 50) {
    outputStyleOne.classList.add("red");
  }
});

const answer = document.querySelector('[data-js="answer"]');
const outputTwo = document.querySelector('[data-js="outputTwo"]');
const maxTwo = document.querySelector('[data-js="answer"]').maxLength;

outputTwo.textContent = maxTwo;

answer.addEventListener("input", () => {
  const charactersTwo = answer.value.length;

  outputTwo.textContent = maxTwo - charactersTwo;

  if (outputTwo.value <= 150 && outputTwo.value >= 100) {
    outputStyleTwo.classList.add("green");
  } else if (outputTwo.value <= 100 && outputTwo.value >= 50) {
    outputStyleTwo.classList.add("yellow");
  } else if (outputTwo.value <= 50) {
    outputStyleTwo.classList.add("red");
  }
});
