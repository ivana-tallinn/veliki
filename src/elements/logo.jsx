import React from 'react';
import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { Theme } from '../theme';
import logoAdult from '../images/logo-adult.svg';
import logoChild from '../images/logo-child.svg';

const StyledLogo = styled(Link)`
  display: inline-block;
  width: 127px;
  height: 22px;
`;

function Logo({ className }) {
  const theme = useTheme();
  const image = theme.current === Theme.ADULT ? logoAdult : logoChild;

  return (
    <StyledLogo className={className} to='/'>
      <img src={image} alt='Логотип магазина велосипедов «Велики»' />
    </StyledLogo>
  );
}

export { Logo };
