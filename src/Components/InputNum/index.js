import React from 'react'
import { PatternFormat } from 'react-number-format'
import { Inputnum } from './style'

const InputNum = ({label, text, callback, placeholder}) => {
  const validNumber = text.replace(/ /g, '').length < 16;
  const isMoreZero = text.replace(/ /g, '').length > 0;
  console.log(`text..${text.replace(/ /g, '')} - length: ${text.length}`)

  return (
    <Inputnum validacao={validNumber}>
        <p>{label}</p>
        <PatternFormat
            format="#### #### #### ####" 
            mask=" "
            placeholder={placeholder} 
            value={text} 
            onChange={ ({target})=> callback(target.value) } 
        />  { validNumber && isMoreZero && <span>Wrong format, numbers only</span>} 
    </Inputnum>
  )
}

export default InputNum
