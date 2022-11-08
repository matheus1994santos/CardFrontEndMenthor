import React from 'react'
import { FormContainer } from './styled'

const Form = () => {
  return (
    <FormContainer>
      <form>
        <div>
          <p>CARDHOLRDER NAME</p>
          <input type={'text'}/>
        </div>
        <div>
          <p>CARD NUMBER</p>
          <input type={'number'}/>
        </div>

        <section>
          <div>
            <p>EXP.DATE(MM/YY)</p>
            <input type='text'/>
            <input type='text'/>
          </div>

          <div>
            <p>CVC</p>
            <input type={'number'}/>
          </div>
        </section>

        <div>
          <button>Confim</button>
        </div>
      </form>
    </FormContainer>
  )
}

export default Form
