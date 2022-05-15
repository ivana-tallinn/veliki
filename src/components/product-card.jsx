import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { BaseCard } from '../helpers/base-card';
import { Icon } from '../elements/icon';
import { TypographyVariant, Typography } from '../elements/typography';
import { ButtonVariant, ButtonSize, Button } from '../elements/button';
import { LabelColor, Label } from '../elements/label';
import { IconButton } from '../elements/icon-button';

const StyledImage = styled.img`
  width: 100%;
  height: 120px;

  object-fit: cover;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledLabels = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;

  display: grid;
  justify-items: start;
  gap: 2px;
`;

const StyledIconButtons = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 1;

  display: flex;
  gap: 2px;
`;

const StyledIconButton = styled(IconButton)`
  border-radius: 50%;
  padding: 3px;

  ${({ theme }) => theme.current === Theme.ADULT ? css`
    background-color: ${Color.GRAY_60};

    &:disabled {
      color: ${Color.WHITE};

      background-color: ${Color.GRAY_30};
    }
  ` : css`
    background-color: ${Color.WHITE};
  `}
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 8px;
  padding: 8px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const StyledName = styled(Typography).attrs({
  as: 'h2',
  variant: TypographyVariant.TEXT_1
})`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const StyledPrices = styled.div`
  grid-row: span 2;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }
`;

const StyledPrice = styled(Typography).attrs({
  variant: TypographyVariant.TITLE_4
})``;

const StyledOldPrice = styled(Typography).attrs({
  variant: TypographyVariant.TEXT_2,
  color: Color.GRAY_20
})`
  text-decoration: line-through;
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 6px;
`;

const StyledProductCard = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ notAvailable }) => notAvailable && css`
    ${StyledImage} {
      opacity: 0.2;
    }

    ${Label} {
      ${({ theme }) => theme === Theme.ADULT ? css`
        color: ${Color.WHITE};

        background-color: ${Color.GRAY_30};
      ` : css`
        color: ${Color.GRAY_30};
      `}
    }

    ${StyledName},
    ${StyledPrice},
    ${StyledOldPrice} {
      color: ${Color.GRAY_30};
    }
  `}
`;

function ProductCard({
  className,
  name,
  price,
  oldPrice,
  image,
  imageAlt,
  hit,
  isNew,
  discount,
  notAvailable
}) {
  return (
    <BaseCard className={className} to='#'>
      <StyledProductCard notAvailable={notAvailable}>
        <StyledImage src={image} alt={imageAlt} />
        <StyledLabels>
          {hit && <Label color={LabelColor.WHITE}>Хит</Label>}
          {isNew && <Label color={LabelColor.WHITE}>Новинка</Label>}
          {discount && <Label color={LabelColor.WHITE}>Скидка</Label>}
        </StyledLabels>
        <StyledIconButtons>
          <StyledIconButton disabled={notAvailable}>
            <Icon name={IconName.BAR_CHART_SMALL} />
          </StyledIconButton>
          <StyledIconButton disabled={notAvailable}>
            <Icon name={IconName.HEART_SMALL} />
          </StyledIconButton>
        </StyledIconButtons>
        <StyledContent>
          <StyledName>
            {name}
          </StyledName>
          <StyledPrices>
            <StyledPrice>{price} ₽</StyledPrice>
            {oldPrice && <StyledOldPrice>{oldPrice} ₽</StyledOldPrice>}
          </StyledPrices>
          <StyledButtons>
            <Button size={ButtonSize.LARGE} disabled={notAvailable}>
              Купить
            </Button>
            <Button
              size={ButtonSize.LARGE}
              variant={ButtonVariant.OUTLINED}
              disabled={notAvailable}
            >
              Подробнее
            </Button>
          </StyledButtons>
        </StyledContent>
      </StyledProductCard>
    </BaseCard>
  );
}

export { ProductCard };
