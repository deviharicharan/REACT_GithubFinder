import React, { Component } from "react";
export default class Heading extends Component {
  name = () => "Devil";
  render() {
    var name = "DEVI HARI CHARAN";
    const loading = false;
    return (
      <div className='Heading'>
        {loading ? (
          <h4>Loading....</h4>
        ) : (
          <h1>
            Hello {name} 
          </h1>
        )}
      </div>
    );
  }
}
