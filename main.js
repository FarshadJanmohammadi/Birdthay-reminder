const counterHandler = () => {
  const profileContainer = document.querySelector(".profile-container");
  const numberProfile = profileContainer.children.length;
  const countrer = document.querySelector("#counter");
  countrer.innerHTML = numberProfile;
  if (numberProfile < 5) {
    document.styleSheets[0].cssRules[6].style.setProperty("height", "auto");
  }
};
counterHandler();

const clickHandler = () => {
  document.styleSheets[0].cssRules[12].style.setProperty("display", "flex");
};
const mouseEnterHandler = (event) => {
  const element = event.path[0].children[2];
  element.style.visibility = "visible";
};
const mouseLeaveHandler = (event) => {
  const element = event.path[0].children[2];
  element.style.visibility = "hidden";
};

const closeClickHandler = (event) => {
  console.log(event);
  clickHandler();
  event.path[2].remove();
  counterHandler();
};
