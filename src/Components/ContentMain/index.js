import React from 'react'
import ContentCard from '../ContentCard'
import Form from '../Form'
import { Container } from './styled'

const ContentMain = () => {
  const [name, setName] = React.useState('');
  const [num, setNum] = React.useState('');
  const [mes, setMes] = React.useState('');
  const [ano, setAno] = React.useState('');
  const [senha, setSenha] = React.useState('');

  return (
    <Container>
      <ContentCard 
        cliente={name} 
        NumCard={num} 
        mes={mes}
        ano={ano}
        cvc={senha}
      />

      <Form 
        name={name} setName={(text) => setName(text)}
        num={num} setNum={(text) => setNum(text)}
        mes={mes} setMes={(text) => setMes(text)}
        ano={ano} setAno={(text) => setAno(text)}
        senha={senha} setSenha={(text) => setSenha(text)}
      />
    </Container>
  )
}

export default ContentMain
