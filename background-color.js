//background change

const bgColorPicker = document.querySelector(".personalization-color");
const background = document.querySelector(".code-background");

bgColorPicker.addEventListener("change", () =>{
  let colorvalue = bgColorPicker.value;
  background.style.backgroundColor = colorvalue;
})