import React from 'react';
import NumberOfListItems from './NumberOfListItems';
import AllButton from './AllButton';
import ActiveButton from './ActiveButton';
import CompletedButton from './CompletedButton';

const styles = {
  check: {
    height: '35px',
    borderTop :'1.5px solid #DCDCDC'
  }


};

const Footer = React.createClass({
  render() {
    return (
      <div style={styles.check}>
      <NumberOfListItems/ >
      <AllButton/ >
      <ActiveButton/ >
      <CompletedButton/ >
      </div>
    )
  }
});

module.exports = Footer;
