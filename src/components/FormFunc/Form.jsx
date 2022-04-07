import React, { useState } from 'react';
import { Message } from './Message';
import { Button } from './Button';
import { Textarea } from './Textarea';

export const Form = () => {
	const [name, setName] = useState('Отправить')
	const [value, setValue] = useState('')
	const [message, setMessage] = useState('Привет! Я дефолтное сообщение. Можешь меня заменить')
	const [disabled, setDisabled] = useState(true)

	const handleClick = () => {
		setMessage(value)
		setValue('')
		setDisabled(true)
	}
	const handleChange = (event) => {
		setValue(event.target.value)
		if (event.target.value) setDisabled(false)
	}
	return <div className='form'>
		<Message message={message}/>
		<Textarea change={handleChange} value={value}/>
		<Button name={name} click={handleClick} disabled={disabled}/>
	</div> 
}
