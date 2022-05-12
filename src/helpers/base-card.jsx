import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Shadow } from '../tokens/shadows';
import { Radius } from '../tokens/radiuses';

const StyledBaseCard = styled(Link)`
  position: relative;

  display: grid;
  border-radius: ${Radius[4]};

  ${({ theme }) => theme.current === Theme.ADULT ? css`
    background-color: ${Color.GRAY_40};
  ` : css`
    background-color: ${Color.WHITE};
    box-shadow: ${Shadow.CARD_CHILD};
  `}

  overflow: hidden;

  &:hover,
  &:focus,
  &:focus-within {
    &::before {
      content: '';

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;

      border: 1px solid ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_30 : Color.GREEN_30};
      border-radius: ${Radius[4]};
    }
  }
`;

export {
  StyledBaseCard as BaseCard
};
