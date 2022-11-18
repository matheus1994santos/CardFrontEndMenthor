import React from 'react'

import containsNumbers from '../../utils/containsNumbers';
import { StyledInput } from './style';

const InputPrin = ({label, text, callback, placeholder}) => {
  const textLength = text.length;
  const isValidString = !containsNumbers(text) && textLength > 2 || textLength == 0;

  
  return (
    <StyledInput isValidString={isValidString}>
        <p>{label}</p>       
        <input 
            placeholder={placeholder}
            value={text} 
            onChange={ ({target})=> callback(target.value) }
            required={true}
        />  
    </StyledInput>
  )
}

export default InputPrin;
