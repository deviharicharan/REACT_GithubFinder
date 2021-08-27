import React from "react";
import PropTypes from "prop-types";
const Navbar = (props) => {
  return (
    <div className='navBar'>
      <i className={props.icon}></i>
      {props.title}
    </div>
  );
};
Navbar.defaultProps = {
  title: "GitHub",
  icon: "fab fa-github fa-5x",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
