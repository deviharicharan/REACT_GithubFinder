import React from "react";
import PropTypes from "prop-types";
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div style={{textAlign:'center',margin:'auto'}}>
      <h3>{login}</h3>
      <a href={html_url}>
        <img
          style={{ height: "150px", borderRadius: "50%" }}
          src={avatar_url}
          alt={login}
        />
      </a>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
