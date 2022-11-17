import React from 'react'
import { FormContainer } from './styled'
import InputPrin from '../InputPrincipal'
import InputDate from '../InputDate';
import InputSenha from '../InputSenha';
import InputNum from '../InputNum';

const Form = (props) => {
  const [confirm, setConfirm] = React.useState(false)

  const handleSubmit = (e) => e.preventDefault();
  const handleClick = () => setConfirm(!confirm);
  
  return (
    <FormContainer>
      { !confirm ?
       <form onSubmit={handleSubmit}>
        <InputPrin 
          label={'CARDHOLRDER NAME' }
          text={props.name} 
          callback={(text) => props.setName(text)}
          placeholder={"e.g. Jane Appleseed"}
        />

        <InputNum
          label={'CARD NUMBER' }
          text={props.num} 
          callback={(text) => props.setNum(text)}
          placeholder={"e.g. 1234 5678 9123 0000"}
        />

        <section>
          <InputDate
            label={'EXP.DATE(MM/YY)'}
            text1={props.mes} 
            text2={props.ano} 
            callback1={(text) => props.setMes(text)}
            callback2={(text) => props.setAno(text)}
            placeholder1={"MM"}   
            placeholder2={"YY"}       
          />

          <InputSenha
            label={'CVC'}
            valor={props.senha}
            callback={(text) => props.setSenha(text)}
            placeholder={"e.g. 123"}
          />
        </section>

        <button onClick={handleClick}>Confim</button>

      </form> : 

      <form>
        <p>Thank you</p>
        <button onClick={handleClick}>New Form</button>
      </form>    
      }


    </FormContainer>
  )
}

export default Form
