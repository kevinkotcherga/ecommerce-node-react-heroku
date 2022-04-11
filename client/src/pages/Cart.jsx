import { Add, Remove } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Annoncement from '../components/Annoncement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../requestMethods'
import { useHistory } from 'react-router-dom'

const KEY = 'pk_test_51KbMuMGV1UkxUwjy9Gr1xwExbCs97VVH0ugjzRhiF6RnfCzV3xeyNr1ITBcuDJemBeO38ZpaYVNvddHf7QAp55tu00cG8TJjMT'

const Container = styled.div`

`

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type === "filled" && "none"};
  background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
  color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div`

`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({ display: "none" })}
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
  flex:3;
`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
  flex:1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "500"};
  font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`

const SummaryButton = styled.div`

`

const Product = styled.div`
  display: flex;
  justify-content: space-around;
  ${mobile({ flexDirection: "column" })}
`

const ProductDetail = styled.div`
  flex:2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
`

const ProductName = styled.span`

`

const ProductId = styled.span`

`

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`

const ProductSize = styled.span`

`

const PriceDetail = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`

const Cart = () => {
  const cart = useSelector( state => state.cart )

  const [stripeToken, setStripeToken] = useState(null)
  const history = useHistory()
  const onToken = (token) => {
    setStripeToken(token)
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
          history.push('/success', {data:res.data});
      } catch {}
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [ stripeToken, cart.total, history ]);

  return (
    <Container>
      <Navbar />
      <Annoncement />
      <Wrapper>
        <Title>VOTRE PANIER</Title>
        <Top>
          <TopButton>CONTINUER MES ACHATS</TopButton>
          <TopTexts>
            <TopText>Panier(2)</TopText>
            <TopText>Vos favoris (0)</TopText>
          </TopTexts>
          <TopButton type="filled">TERMINER MA COMMANDE</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map(product=>(
              <Product>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName><b>Produit:</b>{product.title}</ProductName>
                  <ProductId><b>ID:</b>{product._id}</ProductId>
                  <ProductColor color={product.color}/>
                  <ProductSize><b>Size:</b>{product.size}</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>{product.price * product.quantity}€</ProductPrice>
              </PriceDetail>
            </Product>
              ))}
            <Hr/>
          </Info>
          <Summary>
            <SummaryTitle>PANIER</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sous Total</SummaryItemText>
              <SummaryItemText>{cart.total}€</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimation d'envoi</SummaryItemText>
              <SummaryItemText>4.90€</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Code Promo</SummaryItemText>
              <SummaryItemText>-4.90€</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemText>{cart.total}€</SummaryItemText>
            </SummaryItem>
              <StripeCheckout
                name="Shop."
                image="https://images.unsplash.com/photo-1622633721982-9f9405915bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=814&q=80"
                billingAddress
                shippingAddress
                description={`Votre total est de ${cart.total}€`}
                amount={cart.total*100}
                token={onToken}
                stripeKey={KEY}
                >
              <Button>PAIEMENT</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
