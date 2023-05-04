import { data } from "./store/index.js";
import { Start } from "./functions/Start.js";

export const initProgram = () => {
  if (data.beginning) {
    Start();
  }
};




