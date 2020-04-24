import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETE } from './filter.action-types';

const initialFilterState = FILTER_ALL;

const filter = (state = initialFilterState, action) => {
  switch (action.type) {
    case FILTER_ALL:
    case FILTER_ACTIVE:
    case FILTER_COMPLETE:
      return action.type;
    default:
      return state;
  }
  
};

export default filter;