import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';
import bikeAdult from '../images/bike-adult.svg';
import bikeChild from '../images/bike-child.svg';

const StyledAccentBlock = styled.div`
  border-radius: ${Radius[4]};
  padding: 12px;

  ${({ theme }) => theme.current === Theme.ADULT ? css`
    background-color: ${Color.ORANGE_30};
    background-image: url(${bikeAdult});
  ` : css`
    background-color: ${Color.GREEN_30};
    background-image: url(${bikeChild});
  `}

  background-position: right 4px bottom 4px;
  background-repeat: no-repeat;
`;

export {
  StyledAccentBlock as AccentBlock
};
