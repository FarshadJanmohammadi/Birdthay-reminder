function clickHandler() {
  const elements = document.querySelectorAll(".hidden");
  elements.forEach((element) => {
    element.style.display = "flex";
  });
}
