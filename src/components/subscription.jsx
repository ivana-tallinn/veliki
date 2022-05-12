import React from 'react';
import styled from 'styled-components';
import { Color } from '../tokens/colors';
import { AccentBlock } from '../helpers/accent-block';
import { TypographyVariant, Typography } from '../elements/typography';
import { ButtonSize, Button } from '../elements/button';
import { Input } from '../elements/input';

const StyledSubscription = styled(AccentBlock).attrs({
  as: 'section'
})``;

const StyledTitle = styled(Typography).attrs({
  as: 'h2',
  variant: TypographyVariant.TITLE_2,
  color: Color.WHITE
})`
  margin-bottom: 16px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledInput = styled(Input)`
  width: 200px;
  border-color: ${Color.WHITE};

  color: ${Color.WHITE};
`;

const StyledButton = styled(Button).attrs({
  size: ButtonSize.LARGE
})``;

function Subscription({ className }) {
  return (
    <StyledSubscription className={className}>
      <StyledTitle>
        Подпишись на рассылку
      </StyledTitle>
      <StyledForm>
        <StyledInput placeholder='Электропочта' />
        <StyledButton>
          Подписаться
        </StyledButton>
      </StyledForm>
    </StyledSubscription>
  );
}

export { Subscription };
