import { getDisplayCard } from "../components/card";
import addChildrenToDom from "./utils";
import StateManager from "../state";
import { getAnimals } from "../API";

export const renderCards = (petsData) => {
  const cardsList = petsData.map((petData) => getDisplayCard(petData));

  const displaySection = document.getElementById("card-display-section");
  addChildrenToDom(displaySection, cardsList);
};

export const getNextView = () => {
  const currPageNumber = StateManager.getPageNumber();
  getAnimals(currPageNumber + 1)
    .then((res) => {
      renderDashBoardView(res.data.animals);
      StateManager.setPageNumber(currPageNumber + 1);
    })
    .catch((err) => console.log("error occurred while fetching Animals", err));
};

export const renderDashBoardView = (petsData) => {
  // console.log({ petsData });
  renderCards(petsData);
};
