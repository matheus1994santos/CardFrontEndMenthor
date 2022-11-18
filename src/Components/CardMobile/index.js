import React from 'react'

import LogoCard from '../../images/card-logo.svg'

import { Container, StyleBackCardMob, StyleFrontcardMob } from './style'

const CardMobile = (props) => {
  return (
    <Container>
        <StyleBackCardMob>
            <p>
            { !props.cvc ? "000" : props.cvc}
            </p>
        </StyleBackCardMob>
        <StyleFrontcardMob>
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
                    { !props.mes ? "00" : props.mes < 10 ? '0' + props.mes : props.mes} / { !props.ano ? "00" : props.ano}
                    </p>
                </nav>
            </div>
        </StyleFrontcardMob>
    </Container>
  )
}

export default CardMobile
