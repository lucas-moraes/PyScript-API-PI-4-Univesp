export function BgGraphGenerator(dataArray) {
  let array = [];
  function DynamicColors() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    return "rgb(" + red + "," + green + "," + 255 + ", 0.5)";
  };

  for (let i in dataArray) {
    array.push(DynamicColors());
  }

  return array;
}