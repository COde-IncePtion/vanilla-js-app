import "../styles/index.css";
import { getAnimals } from "../API";
import { renderCards } from "../viewContoller";

console.log("JS goes here");

renderCards();

getAnimals()
  .then((res) => console.log("data = ", res.data))
  .catch((err) => console.log("err occured", err));
