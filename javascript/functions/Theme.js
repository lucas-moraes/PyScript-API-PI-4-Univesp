import { data } from "../store/index.js";

export function ThemeStart() {
  const buttonTheme = document.createElement("img");
  buttonTheme.src = "./assets/night.svg";
  buttonTheme.width = "33";

  data.themeProp.theme.appendChild(buttonTheme);

  data.themeProp.theme.addEventListener("click", () => {
    data.themeProp.isDay = !data.themeProp.isDay;

    if (data.themeProp.isDay) {
      buttonTheme.src = "./assets/night.svg";
      document.body.style.backgroundColor = "#ffff";
      document.getElementById("card1").classList.remove("card-dark");
      document.getElementById("card2").classList.remove("card-dark");
      document.getElementById("card3").classList.remove("card-dark");
    } else {
      buttonTheme.src = "./assets/day.svg";
      document.body.style.backgroundColor = "#1d243d";
      document.getElementById("card1").classList.add("card-dark");
      document.getElementById("card2").classList.add("card-dark");
      document.getElementById("card3").classList.add("card-dark");
    }
  });
}
