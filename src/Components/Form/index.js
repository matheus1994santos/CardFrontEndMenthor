import React from 'react'
import { FormContainer } from './styled'

const Form = () => {
  return (
    <FormContainer>
      <form>
        <div>
          <p>CARDHOLRDER NAME</p>
          <input placeholder="e.g. Jane Appleseed"/>
        </div>
        <div>
          <p>CARD NUMBER</p>
          <input placeholder="e.g. 1234 5678 9123 0000"/>
        </div>

        <section>
          <div>
            <p>EXP.DATE(MM/YY)</p>
            <input placeholder="MM"/>
            <input placeholder="YY"/>
          </div>

          <div className='CVC'>
            <p>CVC</p>
            <input placeholder="e.g. 123"/>
          </div>
        </section>

        <button>Confim</button>

      </form>
    </FormContainer>
  )
}

export default Form
