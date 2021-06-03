import getDomNode from "../utils";
import addChildrenToDom from "../viewContoller/utils";

export const getDisplayCard = (data) => {
  const cardWrapper = getDomNode("div", ["card-wrapper"]);
  const profilePictureDisplaySection = getDomNode("div", [
    "profile-picture-display-section",
  ]);

  const profileImageWrapper = getDomNode("div", ["profile-image-wrapper"]);
  const profileImage = getDomNode("img", []);

  profileImage.src = data.photos.length
    ? data.photos[0].small
    : "https://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=100";

  profileImageWrapper.appendChild(profileImage);

  const specieName = getDomNode("p", ["header1"]);
  specieName.innerText = data.species;

  addChildrenToDom(profilePictureDisplaySection, [
    profileImageWrapper,
    specieName,
  ]);

  const desciption = getDomNode("p", ["size4"]);
  desciption.innerText = data.description;

  const anchorLink = getDomNode("a", []);
  anchorLink.href = "/profile.html?petId=1234";
  anchorLink.target = "_blank";
  anchorLink.innerText = "profile-view";
  addChildrenToDom(cardWrapper, [
    profilePictureDisplaySection,
    desciption,
    anchorLink,
  ]);
  return cardWrapper;
};
