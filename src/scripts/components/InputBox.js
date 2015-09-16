import React from 'react';

var ReactPropTypes = React.PropTypes;
var ENTER_KEY_CODE = 13;

const styles = {
  box: {
    flex:'1',
    fontSize : '25px',
    fontFamily: 'serif',
    fontStyle: 'italic',
    border: 'none',
    paddingLeft: '15px',
    outline: 'none'
  }
};



const InputBox = React.createClass({

  propTypes: {
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  _save: function(){
    this.props.onSave(this.state.value);
    this.setState({value:''});
  },

  _onChange: function(event){
    this.setState({
      value: event.target.value
    });
  },

  _onKeyDown: function(event){
    if (event.KeyCode === ENTER_KEY_CODE){
      this._save();
    }
  },

  render() {
    return (
     <input
        style={styles.box}
        id={this.props.id}
        placeholder="What needs to be done ? "
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
     />
    )
  }
});

module.exports = InputBox;
