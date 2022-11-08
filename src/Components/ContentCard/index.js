import React from 'react'
import { BackCard, Container, Frontcard } from './styled'
import LogoCard from '../../images/card-logo.svg'

const ContentCard = () => {
  return (
    <Container>
      <Frontcard>
        <img src={LogoCard}/>
        <div>
          <span>9591 6489 6389 101E</span>
          <nav>
            <p>Felicia leire</p><p>09/00</p>
          </nav>
        </div>
      </Frontcard>

      <BackCard>
        
      </BackCard>
    </Container>
  )
}

export default ContentCard
