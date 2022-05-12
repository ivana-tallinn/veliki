import React, { Children } from 'react';
import styled from 'styled-components';

const StyledCardList = styled.ul`
  display: grid;
  gap: 12px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`;

const StyledCardItem = styled.li`
  display: grid;
`;

function CardList({ className, children }) {
  return (
    <StyledCardList className={className}>
      {Children.map(children, (child) => (
        <StyledCardItem>
          {child}
        </StyledCardItem>
      ))}
    </StyledCardList>
  );
}

export { CardList };
