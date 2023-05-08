import { data } from "../store/index.js";
import { GraphicsInit } from "./GraphicsInit.js";
import { GraphicsErase } from "./GraphicsErase.js";
import { Loading } from "./Loading.js";
import { ThemeStart } from "./Theme.js";

export function Start() {
  ThemeStart();
  GraphicsInit(0);

  if (data.beginning) {
    for (const key of Object.keys(data.districtData)) {
      let newOption = document.createElement("option");
      newOption.value = key;
      newOption.innerText = key;
      data.districtList.appendChild(newOption);
    }
    for (const key of Object.keys(data.schoolTypeDistrictData)) {
      let newOption = document.createElement("option");
      newOption.value = key;
      newOption.innerText = key;
      data.schoolTypeList.appendChild(newOption);
    }
    for (const key of Object.keys(data.schoolNameDistrictData)) {
      let newOption = document.createElement("option");
      newOption.value = key;
      newOption.innerText = key;
      data.schoolNameList.appendChild(newOption);
    }
  }

  data.selectButton.addEventListener("click", () => {
    data.isLoading = true;
    Loading();
    setTimeout(() => {
      if (data.districtValue.value) {
        GraphicsErase().then(() => GraphicsInit(1, data.districtValue.value));
      }
      if (data.schoolTypeValue.value) {
        GraphicsErase().then(() => GraphicsInit(2, data.schoolTypeValue.value));
      }
      if (data.schoolNameValue.value) {
        GraphicsErase().then(() => GraphicsInit(3, data.schoolNameValue.value));
      }
    }, 1000);
  });

  data.beginning = false;
}
