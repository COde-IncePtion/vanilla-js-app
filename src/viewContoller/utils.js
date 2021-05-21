const addChildrenToDom = (parent, children) => {
  children.map((child) => parent.appendChild(child));
};

export default addChildrenToDom;
