import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url('https://images.unsplash.com/photo-1530020676722-b4d9f28e42d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80') center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CRÉER UN COMPTE</Title>
        <Form>
          <Input placeholder="prénom" />
          <Input placeholder="nom" />
          <Input placeholder="pseudo" />
          <Input placeholder="email" />
          <Input placeholder="mot de passe" />
          <Input placeholder="confirmation du mot de passe" />
          <Agreement>
            En créant un compte, je consens au traitement de mes données personnelles conformément à la <b>politique de confidentialité</b>
          </Agreement>
          <Button>INSCRIPTION</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
