import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url('https://images.unsplash.com/photo-1505340261985-ef955dabca9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80') center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`

const Error = styled.span`
  color: red;
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  const[username, setUserName] = useState('')
  const[password, setPassword] = useState('')
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user);

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { username, password });
  }
  return (
     <Container>
      <Wrapper>
        <Title>CONNEXION</Title>
        <Form>
          <Input placeholder="pseudo" onChange={(e) => setUserName(e.target.value)} />
          <Input placeholder="mot de passe" type="password" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={ handleClick } disabled={isFetching} >CONNEXION</Button>
          {error && <Error>Quelque chose s'est mal passé..</Error>}
          <Link>MOT DE PASSE OUBLIÉ ?</Link>
          <Link>CRÉER UN NOUVEAU COMPTE</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
