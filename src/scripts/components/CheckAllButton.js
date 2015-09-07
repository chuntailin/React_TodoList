import React from 'react';

const styles = {
  check: {
    width: '54px',
    height: '100%',
    backgroundColor: '#FFFFFF',
    border: 'none'
  }
};

const CheckAllButton = React.createClass({
  render() {
    return (
        <button type="button" style={styles.check} className="fa fa-check-square"/>
    )
  }
});

module.exports = CheckAllButton;
