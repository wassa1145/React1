import React, { useState } from 'react';
import { Message } from './Message';
import { Button } from './Button';
import { Textarea } from './Textarea';

export const Form = () => {
	const [name] = useState('Отправить')
	const [value, setValue] = useState('')
	const [message, setMessage] = useState('Привет! Я дефолтное сообщение. Можешь меня заменить')

	const handleClick = () => {
		setMessage(value)
		setValue('')
	}
	const handleChange = (event) => {
		setValue(event.target.value)
	}
	return <div className='form'>
		<Message message={message}/>
		<Textarea change={handleChange} value={value}/>
		<Button name={name} click={handleClick} disabled={value ? false : true}/>
	</div> 
}
