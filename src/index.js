function generatePoem(event) {
  event.preventDefault();
 
  let poemElement = document.querySelector("#poem");

  // adding typewriter effect
  new Typewriter('#poem', {
    strings: "This is the where the poem generator goes",
    autoStart: true,
    delay: 14,
    cursor: "",
  });


}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
