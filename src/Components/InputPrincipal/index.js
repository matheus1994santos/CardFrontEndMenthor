import React from 'react'
import { Inputname } from './style';

const InputPrin = ({label, text, callback, placeholder}) => {
  const isString = text.replace(/ /g, '').length < 8 && typeof text === 'string';
  
  return (
    <Inputname isString={isString}>
        <p>{label}</p>       
        <input 
            placeholder={placeholder} 
            value={text} 
            onChange={ ({target})=> callback(target.value) } 
        />  
    </Inputname>
  )
}

export default InputPrin;
