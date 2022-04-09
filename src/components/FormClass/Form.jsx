import React, { Component } from 'react';
import { Button } from './Button';
import { Textarea } from './Textarea';
import { Message } from './Message';

export class Form extends Component {
	state = {
		name: 'Отправить',
		value: '',
		message: 'Привет! Я дефолтное сообщение. Можешь меня заменить',
	}
	handleClick = () => {
		this.setState({ message: this.state.value })
		this.setState({ value: '' })
	}
	handleChange = (event) => {
		this.setState({ value: event.target.value })
	}
  render() {
		return <div className='form'>
			<Message message={this.state.message}/>
			<Textarea change={this.handleChange} value={this.state.value}/>
			<Button name={this.state.name} click={this.handleClick} disabled={this.state.value ? false : true}/>
		</div> 
  }
}
