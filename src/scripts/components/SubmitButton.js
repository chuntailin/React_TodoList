import React from 'react';
var TodoActions = require('../actions/TodoActions');

const styles = {
  check: {
    width: '54px',
    height: '100%',
    backgroundColor: '#FFFFFF',
    border: 'none',
    outline: 'none'
  }
};

const SubmitButton = React.createClass({

  // _onToggleCompletedAll: function(){
  //   TodoActions.toggleCompleteAll();
  // },

  render() {
    return (
        <button
          type="button"
          style={styles.check}
          className="fa fa-reply"
          // onChange={this._onToggleCompletedAll}
          // checked={this.props.areAllComplete ? 'checked' : ''}
        />
    )
  }
});

module.exports = SubmitButton;
