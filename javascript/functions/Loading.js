import { data } from "../store/index.js";

export function Loading() {
  if (!data.isLoading) {
    data.screen.style.display = "none";
  } else {
    data.screen.style.display = "flex";
  }
}
