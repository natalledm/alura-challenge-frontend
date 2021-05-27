const codeBody = document.querySelector(".code-body");
const langSelector = document.querySelector("#language");
const btnHighlight = document.querySelector(".code-highlight");
const codeBox = document.querySelector("#code-box");

  function changeLanguage () {
  let language = langSelector.value;
  codeBox.classList.remove("language-javascript", "language-html", "language-css");
    codeBox.classList.add("hljs", language)
  }

btnHighlight.addEventListener("click", () => {
  changeLanguage();
  hljs.highlightElement(codeBox);
})