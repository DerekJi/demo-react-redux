const initialFilterState = '';

const filter = (state = initialFilterState, action) => {
  return action.data.filterName;
};

export default filter;