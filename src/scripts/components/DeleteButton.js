import React from 'react';

const styles = {
  box: {
    width: '54px',
    height: '100%',
    backgroundColor: 'transparent',
    border: 'none'
  }
};

const DeleteButton = React.createClass({
  render() {
    return (
        < button type="button" style={styles.box} className="fa fa-minus-square" />
    )
  }
});

module.exports = DeleteButton;
