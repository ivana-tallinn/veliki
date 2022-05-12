import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const StyledDefaultLayout = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

const StyledFooter = styled(Footer)`
  margin-top: 50px;
`;

function DefaultLayout() {
  return (
    <StyledDefaultLayout>
      <StyledHeader />
      <main><Outlet /></main>
      <StyledFooter />
    </StyledDefaultLayout>
  );
}

export { DefaultLayout };
