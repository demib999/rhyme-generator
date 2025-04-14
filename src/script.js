function generateRhyme(event) {
  event.preventDefault();

  let rhymeElement = document.querySelector("#rhyme");

  new Typewriter("#rhyme", {
    strings: "Tell me not, in mournful numbers",
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

let rhymeFormElement = document.querySelector("#rhyme-generator-form");
rhymeFormElement.addEventListener("submit", generateRhyme);
