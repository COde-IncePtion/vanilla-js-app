import "../styles/index.css";
import { getAnimals } from "../API";
import {
  getNextView,
  renderCards,
  renderDashBoardView,
} from "../viewContoller";

console.log("JS goes here");

document.getElementById("next-button").addEventListener("click", getNextView);

getAnimals()
  .then((res) => renderDashBoardView(res.data.animals))
  .catch((err) => console.log("error occurred", err));
