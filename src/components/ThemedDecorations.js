// Code ThemedDecoration Component Here
import React from 'react';


export default class ThemedDecorations extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: child.props.themeTitle,
      });
    });

    return (
      <div>
        {children}
      </div>
    );
  }
}
