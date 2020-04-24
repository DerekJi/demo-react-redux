import { FILTER } from './filter.action-types';

/**
 * 
 * @param {string} filterName 
 */
export const filter = (filterName) => {
  return {
    type: FILTER,
    data: { filterName }
  };
};