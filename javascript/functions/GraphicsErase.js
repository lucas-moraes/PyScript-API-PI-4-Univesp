import { data } from "../store/index.js";

export function GraphicsErase() {
    return new Promise((resolve, reject) => {
      try {
        data.groupChart.destroy();
        data.yearChart.destroy();
        data.sexChart.destroy();
        resolve();
      } catch (error) {
        reject();
      }
    });
  }
  