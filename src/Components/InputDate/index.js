import React from 'react'
import { PatternFormat } from 'react-number-format'
import { InputData } from './style'

const InputDate = (props) => {

  return (
    <InputData>
        <p>{props.label}</p>
        <PatternFormat
            format="##" 
            placeholder={props.placeholder1}
            value={props.text1} 
            onChange={ ({target})=> props.callback1(target.value) }
        />
        <PatternFormat
            format="##" 
            placeholder={props.placeholder2}
            value={props.text2} 
            onChange={ ({target})=> props.callback2(target.value) }
        /> 
    </InputData>
  )
}

export default InputDate
