import React, { Fragment } from "react";
import spinner from "../media/spinner.gif";
export default function Spinner() {
  return (
    <Fragment>
      <img
        style={{ width: "200px", display: "block", margin: "auto" }}
        src={spinner}
        alt='Loading...'
      />
    </Fragment>
  );
}
