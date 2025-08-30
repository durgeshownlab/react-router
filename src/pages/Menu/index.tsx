import { Link, Outlet } from "react-router-dom";
import styled from "styled-components"


const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: green;
`;

const Title = styled.h2`
  color: blue;
`;

const MenuNav = styled.div`
  width: fit-content;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 1rem;
  background-color: purple;

`;

const MenuButton = styled(Link)`
  padding: 8px 16px;
  background-color: black;
  color: white;
  border-radius: 5px;

`

const SearchBar = styled.input`
  padding: 8px 16px;
  background-color: orange;
  color: black;
  border: none;
  outline: none;
  border-radius: 5px;
`;


const Menu = () => {

  console.log("Menu")

  return (
    <MenuWrapper>
      <Title>Explore Category</Title>
      <MenuNav> 
        <MenuButton to={'spicy'}>Spicy</MenuButton>
        <MenuButton to={'quick-easy'}>Quick & Easy</MenuButton>
        <MenuButton to={'family-friendly'}>Family Friendly</MenuButton>
        <MenuButton to={'vegan'}>Vegan</MenuButton>
        <MenuButton to={'intercontinental'}>InterContinental</MenuButton>
        <SearchBar type="search" />
      </MenuNav>
      <Outlet />
    </MenuWrapper>
  )
}

export default Menu
