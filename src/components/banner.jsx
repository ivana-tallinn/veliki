import React from 'react';
import styled, { css } from 'styled-components';
import { Font } from '../tokens/fonts';
import { Color } from '../tokens/colors';
import { BaseCard } from '../helpers/base-card';

const StyledImage = styled.img`
  width: 100%;
  height: 140px;

  object-fit: cover;
`;

const StyledTitle = styled.h2`
  position: absolute;
  top: 8px;
  right: 8px;
  left: 8px;

  font-family: ${Font.DELA_GOTHIC_ONE};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${Color.WHITE};
`;

const StyledDiscount = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;

  font-family: ${Font.DELA_GOTHIC_ONE};
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  color: ${Color.WHITE};
`;

const BannerSize = {
  MEDIUM: 'medium',
  LARGE: 'large'
};

const BannerSizeToCSS = {
  [BannerSize.MEDIUM]: css`
    @media (min-width: 768px) {
      ${StyledImage} {
        height: 114px;
      }

      ${StyledTitle} {
        font-size: 16px;
        line-height: 20px;
      }
    }
  `,
  [BannerSize.LARGE]: css`
    @media (min-width: 768px) {
      ${StyledImage} {
        height: 240px;
      }
    }
  `
};

const StyledBanner = styled.article.attrs(({ size }) => ({
  size: size || BannerSize.MEDIUM
}))`
  ${({ size }) => BannerSizeToCSS[size]}

  position: relative;

  display: grid;
`;

function Banner({ className, size, title, discount, image, imageAlt }) {
  return (
    <BaseCard className={className} to='#'>
      <StyledBanner size={size}>
        <StyledImage src={image} alt={imageAlt} />
        <StyledTitle>
          {title}
        </StyledTitle>
        {discount && (
          <StyledDiscount>
            {discount}%
          </StyledDiscount>
        )}
      </StyledBanner>
    </BaseCard>
  );
}

export {
  BannerSize,
  Banner
};
