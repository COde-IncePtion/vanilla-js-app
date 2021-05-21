let state = {
  pagination: {
    currPageNumber: 1,
  },
};

const StateManager = {
  getPageNumber: () => state.pagination.currPageNumber,
  setPageNumber: (number) => {
    state.pagination.currPageNumber = number;
  },
};

export default StateManager;
