import React from 'react'
import { CVC } from './style'
import { PatternFormat } from 'react-number-format'

const InputSenha = (props) => {
  const validPassword = props.valor.replace(/ /g, '').length > 0 && props.valor.replace(/ /g, '').length < 3;
  

  return (
    <CVC isValid={validPassword}>
        <p>{props.label}</p>
        <PatternFormat
            format="###"
            placeholder={props.placeholder}
            value={props.valor}
            onChange={({target}) => props.callback(target.value)}
        />
        { validPassword && <span>Can't be blank</span>}  
    </CVC>
  )
}

export default InputSenha
