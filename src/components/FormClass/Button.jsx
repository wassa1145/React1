import React, { Component } from 'react';

export class Button extends Component {
  render() {
    return <button disabled={this.props.disabled} className="form__bottom" onClick={this.props.click}>{ this.props.name}</button>
  }
}
