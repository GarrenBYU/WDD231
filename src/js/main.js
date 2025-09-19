import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function parkInfoTemplate(info) {
  return `<a href="/" class="main-banner__title">${info.name}</a>
  <p class="main-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

document.querySelector("head > title").textContent = parkData.fullName;

document.querySelector(".main-banner > img").src = parkData.images[0].url;

document.querySelector(".main-banner__content").innerHTML = parkInfoTemplate(parkData);
