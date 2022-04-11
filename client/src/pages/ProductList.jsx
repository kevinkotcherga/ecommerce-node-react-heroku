import styled from "styled-components"
import Navbar from '../components/Navbar'
import Annoncement from '../components/Annoncement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { useState } from "react"


const Container = styled.div`

`
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display:"flex", flexDirection:"column" })}
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`

const Option = styled.option`

`

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Annoncement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrer les produits:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >
              Couleur
            </Option>
            <Option>black</Option>
            <Option>gray</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>white</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled >
              Taille
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Trier les produits:</FilterText>
            <Select onChange={e=>setSort(e.target.value)}>
              <Option value="nouveautés">Nouveautés</Option>
              <Option value="asc">Prix (asc)</Option>
              <Option value="desc">Prix (desc)</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container >
  )
}

export default ProductList
