import { BgGraphGenerator } from "./functions/BgGraphGenerator.js";

let data = {
  groupChart: "",
  yearChart: "",
  sexChart: "",
  dataGroup: "",
  dataYear: "",
  dataSex: "",
  district: "",
  schoolTypeDistrict: "",
  schoolNameDistrict: "",
  groupData: "",
  yearData: "",
  sexData: "",
  districtData: "",
  schoolTypeDistrictData: "",
  schoolNameDistrictData: "",
  districtList: "",
  schoolTypeList: "",
  schoolNameList: "",
  selectButton: "",
  districtValue: "",
  schoolTypeValue: "",
  schoolNameValue: "",
  beginning: true,
};

window.addEventListener("click", () => {
  if (data.beginning) {
    Start();
  }
});

function GraphicsErase() {
  return new Promise(function executor(resolve, reject) {
    try {
      data.groupChart.destroy();
      data.yearChart.destroy();
      data.sexChart.destroy();
      resolve();
    } catch (e) {
      reject();
    }
  });
}

function GraphicsInit() {
  data.dataGroup = group("x");
  data.dataYear = year("x");
  data.dataSex = sex("x");
  data.district = district_array("x");
  data.schoolTypeDistrict = school_type_array("x");
  data.schoolNameDistrict = school_name_array("x");

  data.groupData = JSON.parse(data.dataGroup);
  data.yearData = JSON.parse(data.dataYear);
  data.sexData = JSON.parse(data.dataSex);
  data.districtData = JSON.parse(data.district);
  data.schoolTypeDistrictData = JSON.parse(data.schoolTypeDistrict);
  data.schoolNameDistrictData = JSON.parse(data.schoolNameDistrict);

  const groupElement = document.getElementById("groupChart");
  data.groupChart = new Chart(groupElement, {
    type: "pie",
    data: {
      labels: Object.keys(data.groupData),
      datasets: [
        {
          data: Object.values(data.groupData),
          backgroundColor: () => BgGraphGenerator(data.groupData),
          borderColor: "#737373c7",
          borderWidth: 1,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: false,
      legend: {
        display: false,
      },
    },
  });

  const yearElement = document.getElementById("yearChart");
  data.yearChart = new Chart(yearElement, {
    type: "bar",
    data: {
      labels: Object.keys(data.yearData),
      datasets: [
        {
          data: Object.values(data.yearData),
          backgroundColor: () => BgGraphGenerator(data.yearData),
          borderColor: "#737373c7",
          borderWidth: 1,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: false,
      legend: {
        display: false,
      },
    },
  });

  const sexElement = document.getElementById("sexChart");
  data.sexChart = new Chart(sexElement, {
    type: "pie",
    data: {
      labels: Object.keys(data.sexData),
      datasets: [
        {
          data: Object.values(data.sexData),
          backgroundColor: () => BgGraphGenerator(data.sexData),
          borderColor: "#737373c7",
          borderWidth: 1,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: false,
      legend: {
        display: false,
      },
    },
  });
}

function Start() {
  GraphicsInit();

  data.districtList = document.getElementById("districtList");
  data.schoolTypeList = document.getElementById("schoolTypeList");
  data.schoolNameList = document.getElementById("schoolNameList");

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

  data.selectButton = document.getElementById("buttonSelect");
  data.districtValue = document.getElementById("selectedDistrict");
  data.schoolTypeValue = document.getElementById("selectedSchoolType");
  data.schoolNameValue = document.getElementById("selectedSchoolName");

  data.selectButton.addEventListener("click", () => {
    if (data.districtValue.value) {
      function_select_district(data.districtValue.value);
    }
    if (data.schoolTypeValue.value) {
      function_select_school_type(data.schoolTypeValue.value);
    }
    if (data.schoolNameValue.value) {
      function_select_school_name(data.schoolNameValue.value);
    }

    GraphicsErase()
      .then(() => GraphicsInit())
      .catch(() => console.log("Erro ao gerar os graficos atualizados"));
  });

  data.beginning = false;
}
