const getDomNode = (type, classNames) => {
  const node = document.createElement(type);
  classNames.map((className) => node.classList.add(className));

  return node;
};

export default getDomNode;
