const counterHandler = () => {
  const profileContainer = document.querySelector(".profile-container");
  const numberProfile = profileContainer.children.length;
  const countrer = document.querySelector("#counter");
  countrer.innerHTML = numberProfile;
  if (numberProfile < 5) {
    document.styleSheets[0].cssRules[6].style.setProperty("height", "auto");
  }
  if (numberProfile == 0) {
    document.styleSheets[0].cssRules[21].style.setProperty(
      "background",
      "linear-gradient(to right,black,gray"
    );
    document.styleSheets[0].cssRules[21].style.setProperty("cursor", "default");
    document.querySelector(".button-section button").innerHTML = "Disable";
    document.styleSheets[0].cssRules[22].style.setProperty(
      "background",
      "linear-gradient(to right,gray,black"
    );
  }
};
counterHandler();

const clickHandler = (event) => {
  const audioShowAll = new Audio();
  audioShowAll.src = "./css/sounds/clickShowAll.mp3";
  audioShowAll.play();
  document.styleSheets[0].cssRules[12].style.setProperty("display", "flex");
  event.srcElement.disabled = true;
};
const mouseEnterHandler = (event) => {
  if (window.innerWidth >= 570) {
    const element = event.path[0].children[2];
    element.style.visibility = "visible";
  } else {
    return;
  }
};
const mouseLeaveHandler = (event) => {
  if (window.innerWidth >= 570) {
    const element = event.path[0].children[2];
    element.style.visibility = "hidden";
  } else {
    return;
  }
};

const closeClickHandler = (event) => {
  console.log(event);
  document.styleSheets[0].cssRules[12].style.setProperty("display", "flex");
  if (event.target.localName == "span") {
    const audio = new Audio();
    audio.src = "./css/sounds/click.mp3";
    audio.play();
    event.path[2].remove();
  } else {
    return;
  }
  counterHandler();
};
