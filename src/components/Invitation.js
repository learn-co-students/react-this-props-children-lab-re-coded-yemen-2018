// Code Invitation Component Here
import React from 'react';

export default class Invitation extends React.Component {
  render() {
    const sms = `You've been invited!`;

    return (

      <div>
      <h1>{sms}</h1>
        {this.props.children}
      </div>
    );
  }
}
