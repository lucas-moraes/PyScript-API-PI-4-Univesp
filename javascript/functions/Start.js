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

  data.resetButton.addEventListener("click", () => {
    data.isLoading = true;
    data.districtValue.disabled = false;
    data.schoolTypeValue.disabled = false;
    data.schoolNameValue.disabled = false;
    Loading();
    document.getElementById("districtResume").style.display = "none";
    document.getElementById("districtResumeTitle").innerText = "";
    document.getElementById("table").style.display = "none";

    data.districtValue.value = "";
    data.schoolTypeValue.value = "";
    data.schoolNameValue.value = "";
    setTimeout(() => {
      data.resume = "";
      GraphicsErase().then(() => GraphicsInit(0));
    }, 1000)
  });

  data.selectButton.addEventListener("click", () => {
    data.isLoading = true;
    Loading();
    setTimeout(() => {
      if (data.districtValue.value && !data.schoolTypeValue.value && !data.schoolNameValue.value) {
        data.schoolTypeValue.disabled = true;
        data.schoolNameValue.disabled = true;
        GraphicsErase().then(() => GraphicsInit(1, data.districtValue.value));
        document.getElementById("districtResume").style.display = "block";
        document.getElementById("districtResumeTitle").innerText = data.districtValue.value;
      }
      if (!data.districtValue.value && data.schoolTypeValue.value && !data.schoolNameValue.value) {
        data.districtValue.disabled = true;
        data.schoolNameValue.disabled = true;
        GraphicsErase().then(() => GraphicsInit(2, data.schoolTypeValue.value));
      }
      if (!data.districtValue.value && !data.schoolTypeValue.value && data.schoolNameValue.value) {
        data.districtValue.disabled = true;
        data.schoolTypeValue.disabled = true;
        GraphicsErase().then(() => GraphicsInit(3, data.schoolNameValue.value));
      }
    }, 1000);
  });

  data.beginning = false;
}
