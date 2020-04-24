import { FILTER } from './filter.action-types';

const initialFilterState = '';

const filter = (state = initialFilterState, action) => {
  switch (action.type) {
    case FILTER:
      if (action && action.data) {
        return action.data.filterName;
      }
      return state;
    default:
      return state;
  }
  
};

export default filter;