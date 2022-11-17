import React from 'react'
import { BackCard, Container, Frontcard } from './styled'
import LogoCard from '../../images/card-logo.svg'

const ContentCard = (props) => {

  return (
    <Container>
      <Frontcard>
        <img src={LogoCard}/>
        <div>
          <span>
            { !props.NumCard ? "0000 0000 0000 0000" : props.NumCard}
          </span>
          <nav>
            <p>
              { !props.cliente ? "JANE APPLESEED" : props.cliente}
            </p>
            <p>
              { !props.mes ? "00" : props.mes} / { !props.ano ? "00" : props.ano}
            </p>
          </nav>
        </div>
      </Frontcard>

      <BackCard>
        <p>
          { !props.cvc ? "000" : props.cvc}
        </p>
      </BackCard>
    </Container>
  )
}

export default ContentCard
