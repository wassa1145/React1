import React, { Component } from 'react';

export class Textarea extends Component {
	render() {
		return <textarea rows="6" className="form__textarea" value={this.props.value} onChange={this.props.change}/>
  }
}
