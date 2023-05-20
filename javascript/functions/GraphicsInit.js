import { data } from "../store/index.js";
import { BgGraphGenerator } from "./BgGraphGenerator.js";
import { Loading } from "./Loading.js";

export function GraphicsInit(func, arg) {
  const functionControl = ["Start", "Select_district", "Select_school_type", "Select_school_name"];

  const start = arg ? python.get(functionControl[func])(arg) : python.get(functionControl[func])();

  data.groupData = JSON.parse(start.group());
  data.yearData = JSON.parse(start.year());
  data.sexData = JSON.parse(start.sex());
  data.districtData = JSON.parse(start.district_array());
  data.schoolTypeDistrictData = JSON.parse(start.school_type_array());
  data.schoolNameDistrictData = JSON.parse(start.school_name_array());
  
  if(func == 1){
    data.resume = JSON.parse(start.resume_array())
  }

  if(func == 3) {
    data.groupTableTitle.innerText = arg;

    for(const key in data.groupData){
      const list = document.createElement("tr")
      list.innerHTML = `
      <tr>
        <td>${key.replace("�", "Ã")}</td>
        <td>${data.groupData[key]}</td>
      </tr>
    `
    data.groupTable.append(list)
    }

    for(const key in data.yearData){
      const list = document.createElement("tr")
      list.innerHTML = `
      <tr>
        <td>${key}</td>
        <td>${data.yearData[key]}</td>
      </tr>
    `
    data.yearTable.append(list)
    }

    for(const key in data.sexData){
      const list = document.createElement("tr")
      list.innerHTML = `
      <tr>
        <td>${key}</td>
        <td>${data.sexData[key]}</td>
      </tr>
    `
    data.sexTable.append(list)
    }

    document.getElementById("table").style.display = "block"
  }


  if (data.resume){
    for (const key in data.resume){
      const list = document.createElement("tr")
      list.innerHTML = `
        <tr>
          <td>${key}</td>
          <td>${data.resume[key]}</td>
        </tr>
      `
      data.resumeTable.append(list)
    }
  }

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
