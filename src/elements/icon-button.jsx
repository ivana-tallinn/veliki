import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';

const CSS = css`
  display: inline-flex;

  color: ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_30 : Color.GREEN_30};

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_20 : Color.GREEN_20};
  }

  &:active {
    color: ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_40 : Color.GREEN_40};
  }

  &:disabled {
    color: ${Color.GRAY_30};

    cursor: not-allowed;
  }

  svg {
    color: currentColor;
  }
`;

const StyledIconButton = styled.button.attrs(({ type }) => ({
  type: type || 'button'
}))`${CSS}`;

const StyledIconLink = styled(Link)`${CSS}`;

export {
  StyledIconButton as IconButton,
  StyledIconLink as IconLink
};
