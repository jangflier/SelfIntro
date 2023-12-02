"use strict";
import utils from "./utils.js";
import constants from "./constants.js";

/* theme effects */
const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
mediaQueryList.addEventListener("change", utils.checkTheme);
utils.checkTheme(mediaQueryList);
/* --- */

/* load effects */
const html = document.getElementsByTagName("html")[0];
const loadingScreen = document.getElementById("loading-screen");
const aside = document.getElementsByTagName("aside")[0];
const introText = document.getElementsByClassName("intro-text");
window.onload = async function () {
  let performanceData = performance.getEntriesByType("navigation")[0];
  let loadTime = performanceData.loadEventEnd - performanceData.startTime;
  // Wait for 1 second if the loading time is less than 1 second
  if (loadTime < 1000) await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Loading complete!");
  const homeSimpleIntroText1 = "My Name is [Yunseok Jang]~";
  const homeSimpleIntroText2 = "I'm a Full Stack Engineer.";

  async function displayText(text, order) {
    introText[order].style.animation = "fadeIn 1s ease-in-out";
    introText[order].style.setProperty("--intro-text-content", "'|'");
    await utils.typeText(introText[order], text, constants.TYPE_TEXT_DELAY);
    order === 2
      ? introText[order].style.setProperty(
          "--cursor-animation",
          "blinkTypingCursor 1s step-end infinite"
        )
      : introText[order].style.setProperty("--intro-text-content", "''");
  }

  setTimeout(async () => {
    loadingScreen.style.display = "none";

    await displayText(homeSimpleIntroText1, 1);
    await displayText(homeSimpleIntroText2, 2);
  }, [constants.LOADING_SCREEN_DELAY]);

  loadingScreen.style.opacity = 0;
  html.style.overflowY = "auto";
  aside.style.animation = "slideLeft 1.5s ease-in-out";
  introText[0].style.animation = "slideUp 1s ease-in-out";

  /* Animation */
  const projectsTextElement = document.querySelector("#projects > article > .projects-text");
  const projectsText = "coming soon".toUpperCase();
  for (let i = 0; i < projectsText.length; i++) {
    const divEl = document.createElement("span");
    divEl.textContent = projectsText[i];
    Object.assign(divEl.style, {
      display: "inline-block",
      animation: `1s wave ${i * 0.08}s ease-in-out infinite`,
    });
    projectsTextElement.appendChild(divEl);
  }
};
/* --- */

/* scroll effects */
const sections = document.querySelectorAll("main > section");
const asideLinks = Array.from(document.getElementsByClassName("link"));
const tablinks = Array.from(document.getElementsByClassName("tablink"));
const tabcontents = Array.from(document.getElementsByClassName("tabcontent"));
const isFadeInOnce = {
  about: false,
  experience: false,
};
let transitioningTabContentName = "";
let TransitioningWaitingTabContent = () => {};
window.addEventListener("scroll", function () {
  sections.forEach((section, order) => {
    utils.toggleActiveState(
      section,
      {
        asideLinks: asideLinks,
        tablinks: { tablinks, tabcontents },
        isFadeInOnce,
      },
      order
    );
  });
});
/* --- */

/* click effects */
tablinks.forEach((elTablink) => {
  elTablink.addEventListener("click", (e) => {
    const isAlreadyActive = e.target.classList.contains("active");
    if (isAlreadyActive) return;
    clearTimeout(TransitioningWaitingTabContent); //reset timeout

    tablinks.forEach((el) => {
      el.classList.toggle("active", el.getAttribute("name") === e.target.name);
    });

    if (transitioningTabContentName === e.target.name) {
      tabcontents.forEach((el) => {
        if (el.getAttribute("name") === transitioningTabContentName) {
          el.classList.add("active");
          el.style.maxHeight = `${el.scrollHeight}px`;
        } else {
          el.classList.remove("active");
        }
      });
      transitioningTabContentName = "";
    } else {
      tabcontents.forEach((el) => {
        const elName = el.getAttribute("name");
        if (el.classList.contains("active")) {
          el.classList.remove("active");
          transitioningTabContentName = elName;
          el.style.maxHeight = `0`;
        }
        if (elName === e.target.name) {
          el.classList.add("active");
          TransitioningWaitingTabContent = setTimeout(() => {
            transitioningTabContentName = "";
            el.style.maxHeight = `${el.scrollHeight}px`;
          }, 500);
        }
      });
    }
  });
});

const navSideButton = document.getElementById("nav-aside-button");
window.addEventListener("click", (e) => {
  if (
    !aside.querySelector("#nav-aside-container").contains(e.target) &&
    !aside.querySelector("#nav-aside-button").contains(e.target)
  ) {
    navSideButton.classList.remove("active");
    aside.style.width = "0";
  }
});
navSideButton.addEventListener("click", (e) => {
  if (navSideButton.classList.contains("active")) {
    aside.style.width = "0";
  } else {
    aside.style.width = "100%";
  }
  navSideButton.classList.toggle("active");
});
/* --- */
