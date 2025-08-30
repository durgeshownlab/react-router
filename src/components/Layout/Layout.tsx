import type { FC, ReactNode } from "react";
import styled from "styled-components"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: blue;
`;

interface LayoutProps {
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <LayoutWrapper>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout