import styled from "styled-components"

const FooterWraper = styled.footer`
  background-color: #000;
  color: white;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px #00000010;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterWraper>
      <FooterText>Durgesh.com all right reserve &copy; 2025 </FooterText>
    </FooterWraper>
  )
}

export default Footer
