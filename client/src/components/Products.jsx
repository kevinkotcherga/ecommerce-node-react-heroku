import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({ cat, filters, sort }) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
      const getProducts = async () =>{
      try{
        const res = await axios.get(
         cat
          ? `https://ecommerce-react-node-kotcherga.herokuapp.com/api/products?category=${cat}`
          : 'https://ecommerce-react-node-kotcherga.herokuapp.com/api/products'
        );
        setProducts(res.data);
      } catch(err){}
    };
    getProducts()
  }, [cat]);

  useEffect(()=>{
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
        )
      )
    )
  }, [products, cat, filters])

  useEffect(()=>{
    if((sort === 'nouveautés')) {
      setFilteredProducts((prev) =>
        [...prev].sort((a,b)=> a.createdAt - b.createdAt)
      );
    } else if ((sort === 'asc')) {
      setFilteredProducts((prev) =>
        [...prev].sort((a,b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      { cat ? filteredProducts.map((item)=>(
        <Product item={item} key={item.id}/>
      )) : products.slice(6, 18).map((item)=>(
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products
