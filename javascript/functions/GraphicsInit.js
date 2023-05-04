import { data } from "../store/index.js";
import { BgGraphGenerator } from "./BgGraphGenerator.js";
import {Loading} from  "./Loading.js"

export function GraphicsInit(func, arg) {
  const functionControl = ["Start", "Select_district", "Select_school_type", "Select_school_name"];

  const start = arg ? python.get(functionControl[func])(arg) : python.get(functionControl[func])();

  data.dataGroup = start.group();
  data.dataYear = start.year();
  data.dataSex = start.sex();
  data.district = start.district_array();
  data.schoolTypeDistrict = start.school_type_array();
  data.schoolNameDistrict = start.school_name_array();

  data.groupData = JSON.parse(data.dataGroup);
  data.yearData = JSON.parse(data.dataYear);
  data.sexData = JSON.parse(data.dataSex);
  data.districtData = JSON.parse(data.district);
  data.schoolTypeDistrictData = JSON.parse(data.schoolTypeDistrict);
  data.schoolNameDistrictData = JSON.parse(data.schoolNameDistrict);

  data.groupChart = new Chart(data.groupElement, {
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

  data.yearChart = new Chart(data.yearElement, {
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

  data.sexChart = new Chart(data.sexElement, {
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

  data.isLoading = false;
  Loading();
}
