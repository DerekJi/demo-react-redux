import React from 'react';
import { connect } from 'react-redux';

import { filter as filterActionCreator } from '../store/filter/filter.actions';

const FilterLink = ({filter, children, onClick}) => (
  <button onClick={onClick}>{children}</button>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(filterActionCreator(ownProps.filter))
});

export default connect(null, mapDispatchToProps)(FilterLink);