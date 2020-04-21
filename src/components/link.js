import React from 'react'
import PropTypes from 'prop-types'
import './link.scss';

const Link = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    className="link"
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
