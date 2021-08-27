import React from "react";
import Spinner from "./Spinner";
import UserItem from "./UserItem";
import PropTypes from "prop-types";

const Users = (props) => {
  if (props.loading) {
    <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {props.List.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
Users.propTypes = {
  List: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};
export default Users;
