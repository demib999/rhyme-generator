function displayRhyme(response) {
  new Typewriter("#rhyme", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

function generateRhyme(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");

  let apiKey = "ac86255oect73dac4acfdfd18b3e0f06";
  let prompt = `Generate 4 lines of rhyme about ${instructionInput.value} use ABAB rhyme scheme pattern, use <br/> between the line, write "AI Rhyme" at the fifth line use <strong> element, color rgb(1, 121, 83) and 😃`;
  let context =
    "you are an AI professional Rhyme writer, you write a simple, beautiful words that people understand and make the reader smile, follow the prompt instruction and don't use jagon languages";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let rhymeElement = document.querySelector("#rhyme");
  rhymeElement.classList.remove("hidden");
  rhymeElement.innerHTML = `<div class="generating" > ⌛ Generating Rhyme about ${instructionInput.value}</div>`;

  axios.get(apiUrl).then(displayRhyme);
}

let rhymeFormElement = document.querySelector("#rhyme-generator-form");
rhymeFormElement.addEventListener("submit", generateRhyme);
