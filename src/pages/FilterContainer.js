import React from 'react';
import { connect } from 'react-redux';

import { filter as filterActionCreator } from '../store/filter/filter.actions';

const Filter = ({filter}) => (
<div className="d-panel d-filters">
  <b>Filters</b>
  <div>
    <button onClick={() => filter('FILTER_ALL')}>ALL</button>
    <button onClick={() => filter('FILTER_ACTIVE')}>Active</button>
    <button onClick={() => filter('FILTER_COMPLETE')}>Complete</button>
  </div>
</div>
);

const mapDispatchToProps = {
  filter: (actionType) => filterActionCreator(actionType)
};

export default connect(null, mapDispatchToProps)(Filter);