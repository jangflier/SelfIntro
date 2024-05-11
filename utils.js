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
  checkScrollOffsetReached(target, scrollY, offestPercenTage) {
    const offsetThreshold = window.innerHeight * offestPercenTage;
    const sectionTop = target.offsetTop;
    const sectionHeight = target.offsetHeight;

    return (
      scrollY >= sectionTop - offsetThreshold &&
      scrollY < sectionTop + sectionHeight - offsetThreshold
    );
  },
  toggleActiveState(detectionTarget = {}, changeTarget = {}, order = 0) {
    const scrollY = window.scrollY;
    const isActive = this.checkScrollOffsetReached(
      detectionTarget,
      scrollY,
      constants.OFFSET_PERCENTAGE20
    );

    changeTarget.asideLinks[order].classList.toggle("active", isActive);

    if (isActive) {
      if (order === 0) {
        // main > <section #home>
        const fontEffect = detectionTarget.getElementsByClassName("intro-text");
        Array.from(fontEffect)[1].style.transform = `translateX(${scrollY}px)`;
        Array.from(fontEffect)[2].style.transform = `translateX(-${scrollY}px)`;
        detectionTarget.style.animationPlayState = "running";
      }
    } else {
      detectionTarget.style.animationPlayState = "paused";
    }

    const isEveryAnimationActive = !Object.values(changeTarget.isFadeInOnce).some(
      (value) => value === false
    );
    if (
      isEveryAnimationActive ||
      !this.checkScrollOffsetReached(detectionTarget, scrollY, constants.OFFSET_PERCENTAGE70)
    ) {
      return;
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
    if (!changeTarget.isFadeInOnce.projects && order === 3) {
      // main > <section #projects>
      Array.from(detectionTarget.querySelectorAll("modal-component")).forEach((el) => {
        el.animateFadeIn();
      });
      changeTarget.isFadeInOnce.projects = true;
    }
    if (!changeTarget.isFadeInOnce.contact && order === 4) {
      // main > <section #contact>
      Array.from(detectionTarget.querySelectorAll("#contact > article > nav > ul > li")).forEach(
        (el, i) =>
          (el.style.animation = `1s ${i % 2 === 0 ? "slideRight" : "slideLeft"} ${
            i * 0.5
          }s ease-in-out forwards`)
      );
      changeTarget.isFadeInOnce.contact = true;
    }
  },
};

export default utils;
