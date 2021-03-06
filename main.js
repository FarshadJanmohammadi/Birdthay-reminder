const counterHandler = () => {
  const profileContainer = document.querySelector(".profile-container");
  const numberProfile = profileContainer.children.length;
  const countrer = document.querySelector("#counter");
  countrer.innerHTML = numberProfile;
  if (numberProfile < 5) {
    document.styleSheets[0].cssRules[6].style.setProperty("height", "auto");
  } else if (numberProfile == 0) {
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

const clickHandler = () => {
  document.styleSheets[0].cssRules[12].style.setProperty("display", "flex");
};

const btnShowAll = document.querySelector(".button-section button");
btnShowAll.addEventListener("click", clickHandler, { once: true });

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
  if (event.target.localName == "span") {
    event.path[2].remove();
  } else {
    return;
  }
  counterHandler();
  const counter = document.querySelector(".profile-container");
  const profileCounter = counter.children.length;
  if (profileCounter == 9) {
    clickHandler();
    btnShowAll.removeEventListener("click", clickHandler, { once: true });
  }
};
