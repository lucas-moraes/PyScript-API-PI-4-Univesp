export function BgGraphGenerator(dataArray, array) {
  function DynamicColors() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + 255 + ", 0.5)";
  };

  for (var i in dataArray) {
    array.push(DynamicColors());
  }

  return array;
}