import { getDisplayCard } from "../components/card";
import addChildrenToDom from "./utils";

export const renderCards = () => {
  const cardsList = [1, 2, 3, 4, 5, 6].map(() => getDisplayCard());

  const displaySection = document.getElementById("card-display-section");
  addChildrenToDom(displaySection, cardsList);
};
