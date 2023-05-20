export const data = {
    groupChart: "",
    yearChart: "",
    sexChart: "",
    groupData: "",
    yearData: "",
    sexData: "",
    districtData: "",
    schoolTypeDistrictData: "",
    schoolNameDistrictData: "",
    districtList: document.getElementById("districtList"),
    schoolTypeList: document.getElementById("schoolTypeList"),
    schoolNameList: document.getElementById("schoolNameList"),
    selectButton: document.getElementById("buttonSelect"),
    resetButton: document.getElementById("buttonReset"),
    districtValue: document.getElementById("selectedDistrict"),
    schoolTypeValue: document.getElementById("selectedSchoolType"),
    schoolNameValue: document.getElementById("selectedSchoolName"),
    groupElement: document.getElementById("groupChart"),
    yearElement: document.getElementById("yearChart"),
    sexElement: document.getElementById("sexChart"),
    beginning: true,
    isLoading: true,
    screen: document.getElementById("screen"),
    themeProp: {
      theme: document.getElementById("theme"),
      isDay: true, 
    },
    resume: null,
    resumeTable: document.getElementById("resumeTable"),
    groupTableTitle: document.getElementById("gropupTableTitle"),
    groupTable: document.getElementById("groupTable"),
    yearTable: document.getElementById("yearTable"),
    sexTable: document.getElementById("sexTable")
  };