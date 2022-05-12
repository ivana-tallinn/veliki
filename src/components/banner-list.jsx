import React, { Children } from 'react';
import styled from 'styled-components';

const StyledBannerList = styled.ul`
  display: grid;
  gap: 12px;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const StyledBannerItem = styled.li`
  @media (min-width: 768px) {
    &:first-child {
      grid-row: span 2;
    }
  }
`;

function BannerList({ className, children }) {
  return (
    <StyledBannerList className={className}>
      {Children.map(children, (child) => (
        <StyledBannerItem>
          {child}
        </StyledBannerItem>
      ))}
    </StyledBannerList>
  );
}

export { BannerList };
