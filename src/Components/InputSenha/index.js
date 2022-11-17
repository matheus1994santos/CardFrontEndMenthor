import React from 'react'
import { CVC } from './style'
import { PatternFormat } from 'react-number-format'

const InputSenha = (props) => {
  return (
    <CVC>
        <p>{props.label}</p>
        <PatternFormat
            format="###"
            placeholder={props.placeholder}
            value={props.valor}
            onChange={({target}) => props.callback(target.value)}
        />  
    </CVC>
  )
}

export default InputSenha
