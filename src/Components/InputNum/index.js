import React from 'react'
import { PatternFormat } from 'react-number-format'
import { Inputnum } from './style'

const InputNum = ({label, text, callback, placeholder}) => {
  const validNumber = text.replace(/ /g, '').length < 16 && text.replace(/ /g, '').length > 4;

  return (
    <Inputnum validacao={validNumber}>
        <p>{label}</p>
        <PatternFormat
            format="#### #### #### ####" 
            mask=" "
            placeholder={placeholder} 
            value={text} 
            onChange={ ({target})=> callback(target.value) } 
        /> { validNumber && <span>Enter the sixteen numbers</span>}
    </Inputnum>
  )
}

export default InputNum
