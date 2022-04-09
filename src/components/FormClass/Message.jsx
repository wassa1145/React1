import React, { Component } from 'react';

export class Message extends Component {
  render() {
		return <div className='form__message'>{ this.props.message }</div>
  }
}
