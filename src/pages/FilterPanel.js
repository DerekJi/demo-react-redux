import React from 'react';
import FilterLink from './FilterLinkContainer';
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETE } from '../store/filter/filter.action-types';

const Filter = ({filter}) => (
<div className="d-panel d-filters">
  <b>Filters</b>
  <div>
    <FilterLink filter={FILTER_ALL}>ALL</FilterLink>
    <FilterLink filter={FILTER_ACTIVE}>Active</FilterLink>
    <FilterLink filter={FILTER_COMPLETE}>Complete</FilterLink>
  </div>
</div>
);


export default Filter;