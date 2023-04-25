import { BgGraphGenerator } from "./modules/BgGraphGenerator.js";

let beginning = true;
window.addEventListener("click", () => {
  if (beginning) {
    Start();
  }
});

function Start() {
  let groupBgGraphColor = [];

  let dataGroup = group('x');
  let dataYear = year('x');
  let dataSex = sex('x');
  let dataDistrict = district_array('x');
  let schoolTypeDistrict = school_type_array('x');
  let schoolNameDistrict = school_name_array('x');

  let groupData = JSON.parse(dataGroup);
  let yearData = JSON.parse(dataYear);
  let sexData = JSON.parse(dataSex);
  let districtData = JSON.parse(dataDistrict);
  let schoolTypeDistrictData = JSON.parse(schoolTypeDistrict);
  let schoolNameDistrictData = JSON.parse(schoolNameDistrict);

  const groupElement = document.getElementById("groupChart");
  const groupChart = new Chart(groupElement, {
    type: "pie",
    data: {
      labels: Object.keys(groupData),
      datasets: [
        {
          data: Object.values(groupData),
          backgroundColor: () => BgGraphGenerator(groupData, groupBgGraphColor),
          borderColor: '#e9ecef'
        },
      ],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
    },
  });

  const yearElement = document.getElementById("yearChart");
  const yearChart = new Chart(yearElement, {
    type: "bar",
    data: {
      labels: Object.keys(yearData),
      datasets: [
        {
          data: Object.values(yearData),
          backgroundColor: () => BgGraphGenerator(yearData, groupBgGraphColor),
        },
      ],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
    },
  });

  const sexElement = document.getElementById("sexChart");
  const sexChart = new Chart(sexElement, {
    type: "pie",
    data: {
      labels: Object.keys(sexData),
      datasets: [
        {
          data: Object.values(sexData),
          backgroundColor: () => BgGraphGenerator(sexData, groupBgGraphColor),
        },
      ],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
    },
  });

  function GraphicErase(){
    groupChart.destroy();
    yearChart.destroy();
    sexChart.destroy();
    Start();
  }

  let districtList = document.getElementById("districtList");
  let schoolTypeList = document.getElementById("schoolTypeList");
  let schoolNameList = document.getElementById("schoolNameList");

  if (beginning) {
    for (const key of Object.keys(districtData)) {
      let newOption = document.createElement("option");
      newOption.value = key;
      newOption.innerText = key;
      districtList.appendChild(newOption);
    }
    for (const key of Object.keys(schoolTypeDistrictData)) {
      let newOption = document.createElement("option");
      newOption.value = key;
      newOption.innerText = key;
      schoolTypeList.appendChild(newOption);
    }
    for (const key of Object.keys(schoolNameDistrictData)) {
      let newOption = document.createElement("option");
      newOption.value = key;
      newOption.innerText = key;
      schoolNameList.appendChild(newOption);
    }
  }

  let selectButton = document.getElementById("buttonSelect");
  let districtValue = document.getElementById("selectedDistrict");
  let schoolTypeValue = document.getElementById("selectedSchoolType");
  let schoolNameValue = document.getElementById("selectedSchoolName");

  selectButton.addEventListener("click", () => {
    if(districtValue.value) function_select_district(districtValue.value);
    if(schoolTypeValue.value) function_select_school_type(schoolTypeValue.value);
    if(schoolNameValue.value) function_select_school_name(schoolNameValue.value);

    GraphicErase()
  });


  beginning = false
}
