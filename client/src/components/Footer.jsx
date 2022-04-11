import { Facebook, Instagram, Mail, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`

`

const Description = styled.p`
margin: 20px 0px;

`

const SocialContainer = styled.div`
  display: flex;

`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items:center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

`

const Center = styled.div`
  flex:1;
  padding: 20px;
  ${mobile({ display: "none" })}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`

const Right = styled.div`
  flex:1;
  padding: 20px;
  ${mobile({ backgroundColor: "#f8f8f8" })}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 40%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOP.</Logo>
        <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos repellendus aut, laudantium officiis temporibus nihil, tempore sit quas ullam id dignissimos debitis, voluptatem libero totam. Sit fugit provident error reiciendis.</Description>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Liens utiles</Title>
        <List>
          <ListItem>Accueil</ListItem>
          <ListItem>Panier</ListItem>
          <ListItem>Mode Homme</ListItem>
          <ListItem>Mode Femme</ListItem>
          <ListItem>Accessoires</ListItem>
          <ListItem>Mon Compte</ListItem>
          <ListItem>Suivi De Commande</ListItem>
          <ListItem>Liste De Souhaits</ListItem>
          <ListItem>Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}} />
          115 Av. de France
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}} />
          04 04 04 04 04
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} />
          contact@shop.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
