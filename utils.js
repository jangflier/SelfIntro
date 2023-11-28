"use strict";
import constants from "./constants.js";

const utils = {
  checkTheme(e) {
    let themeColor = "light";
    if (e.matches) {
      themeColor = "dark";
    }
    console.log(`Your system theme is ${themeColor}!`);
  },
  async typeText(element, text, delay) {
    let currentElement = element;

    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      let t = text[i];

      if (t === "[") {
        let strongElement = document.createElement("strong");
        currentElement = element.appendChild(strongElement);
        t = "";
      } else if (t === "]") {
        currentElement = element;
        t = "";
      } else if (t === "~") {
        t = "🎶";
      }

      currentElement.innerHTML += t;
    }
  },
  toggleActiveState(detectionTarget = {}, changeTarget = {}, scrollY = 0, order = 0) {
    const offsetThreshold = window.innerHeight * constants.OFFSET_PERCENTAGE20;
    const sectionTop = detectionTarget.offsetTop;
    const sectionHeight = detectionTarget.offsetHeight;

    const isActive =
      scrollY >= sectionTop - offsetThreshold &&
      scrollY < sectionTop + sectionHeight - offsetThreshold;

    changeTarget.asideLinks[order].classList.toggle("active", isActive);

    if (isActive) {
      if (order === 0) {
        // main > <section #home>
        const fontEffect = detectionTarget.getElementsByClassName("intro-text");
        Array.from(fontEffect)[1].style.transform = `translateX(${scrollY}px)`;
        Array.from(fontEffect)[2].style.transform = `translateX(-${scrollY}px)`;
        detectionTarget.style.animationPlayState = "running";
      }
      if (!changeTarget.isFadeInOnce.about && order === 1) {
        // main > <section #about>
        const profileTexts = Array.from(detectionTarget.querySelectorAll(".profile-text > p"));
        const profilePhoto = detectionTarget.querySelector(".profile-photo");

        profilePhoto.style.animation = `1s slideUp ease-in-out forwards`;
        profileTexts.forEach((el, i) => {
          el.style.animation = `1s slideRight ${i * 0.5}s ease-in-out forwards`;
        });

        const firstTab = 0;
        changeTarget.tablinks.tablinks[firstTab].classList.add("active");
        changeTarget.tablinks.tabcontents[firstTab].classList.add("active");
        changeTarget.tablinks.tabcontents[firstTab].style.maxHeight =
          changeTarget.tablinks.tabcontents[firstTab].scrollHeight + "px";
        changeTarget.isFadeInOnce.about = true;
      }
      if (!changeTarget.isFadeInOnce.experience && order === 2) {
        // main > <section #experience>
        Array.from(detectionTarget.querySelectorAll("accordion-component")).forEach((el) => {
          el.animateFadeIn();
        });
        changeTarget.isFadeInOnce.experience = true;
      }
    } else {
      detectionTarget.style.animationPlayState = "paused";
    }
  },
};

export default utils;
