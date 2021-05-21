import "../styles/index.css";
import { getAnimals, renewTokenBeforeExpiration } from "../API";
import {
  getNextView,
  renderCards,
  renderDashBoardView,
} from "../viewContoller";

console.log("JS goes here");

document.getElementById("next-button").addEventListener("click", getNextView);

// for refreshing the token - this can also be extracted out
renewTokenBeforeExpiration().then(()=>{
  getAnimals()
      .then((res) => renderDashBoardView(res.data.animals))
      .catch((err) => console.log("error occurred", err));
});
setInterval(renewTokenBeforeExpiration, 30000);
