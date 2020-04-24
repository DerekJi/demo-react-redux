const initialFilterState = '';

const filter = (state = initialFilterState, action) => {
  if (action && action.data) {
    return action.data.filterName;
  }
  return state;
};

export default filter;