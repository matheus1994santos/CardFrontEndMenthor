import React from 'react'
import { PatternFormat, NumericFormat } from 'react-number-format'
import { InputData } from './style'

const InputDate = (props) => {
  const validMonth = props.text1.replace(/ /g, '').length == 1;
  const validYear =  props.text2.replace(/ /g, '').length == 1;

  return (
    <InputData isValidMonth={validMonth} isValidYear={validYear}>
        <p>{props.label}</p>
        <div>
          <PatternFormat
              className={'month'}
              format="##"
              // isAllowed={(values) => {
              //   const {value} = values;
              //   return value != 0  || value < 13;
              // }}
              placeholder={props.placeholder1}
              value={props.text1} 
              onChange={ ({target})=> props.callback1(target.value) }
          />
          { validMonth && <span>Can't be blank</span>}
          <PatternFormat
              className={'year'}
              format="##"
              placeholder={props.placeholder2}
              value={props.text2} 
              onChange={ ({target})=> props.callback2(target.value) }
          /> 
          { validYear && <p>Can't be blank</p>}
        </div>
    </InputData>
  )
}

export default InputDate
