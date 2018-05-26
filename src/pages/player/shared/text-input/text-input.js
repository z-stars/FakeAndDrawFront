import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import './text-input.css';

function TextInput(props) {
    return (
        <div className="text-input">
            <FormControl >
                <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
                <Input id={props.name} onChange={props.onChange}/>
            </FormControl>
        </div>
    );
}

export default TextInput;