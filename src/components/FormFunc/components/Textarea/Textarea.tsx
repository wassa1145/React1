import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import './Textarea.css';

interface TextareaProps {
  placeholder: string;
  message?: string;
  textFieldRef?: React.RefObject<HTMLInputElement>;
  change: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export const Textarea: FC<TextareaProps> = (props) => {
  return (
    <TextField
      variant="outlined"
      className="form__textarea"
      multiline
      rows={4}
      placeholder={props.placeholder}
      value={props.message}
      onChange={props.change}
      inputRef={props.textFieldRef}
      data-testid="textarea"
    />
  );
};
