import React from 'react';
import { connect } from 'react-redux';

import { filter as filterActionCreator } from '../store/filter/filter.actions';
import './FilterLinkContainer.scss';

const FilterLink = ({filter, children, onClick, active}) => (
  <button onClick={onClick} className={active ? 'active' : ''}>{children}</button>
);

const mapStatesToProps = (states, ownProps) => {
  return {
    active: ownProps.filter === states.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(filterActionCreator(ownProps.filter))
});

export default connect(mapStatesToProps, mapDispatchToProps)(FilterLink);