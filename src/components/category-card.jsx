import React from 'react';
import styled from 'styled-components';
import { Color } from '../tokens/colors';
import { BaseCard } from '../helpers/base-card';
import { TypographyVariant, Typography } from '../elements/typography';
import { Label } from '../elements/label';

const StyledCategoryCard = styled.article`
  position: relative;

  display: grid;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 140px;

  object-fit: cover;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledName = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_3,
  color: Color.WHITE
})`
  position: absolute;
  top: 0;
  right: 8px;
  left: 8px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const StyledModelAmount = styled(Label)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

function CategoryCard({ className, name, modelAmount, image, imageAlt }) {
  return (
    <BaseCard className={className} to='#'>
      <StyledCategoryCard>
        <StyledImage src={image} alt={imageAlt} />
        <StyledName>
          {name}
        </StyledName>
        <StyledModelAmount>
          {modelAmount} моделей
        </StyledModelAmount>
      </StyledCategoryCard>
    </BaseCard>
  );
}

export { CategoryCard };
