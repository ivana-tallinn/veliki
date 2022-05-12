import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Icon } from './icon';

const TextButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large'
};

const TextButtonSizeToCSS = {
  [TextButtonSize.MEDIUM]: css`
    font-size: 14px;
    line-height: 18px;
  `,
  [TextButtonSize.LARGE]: css`
    font-size: 16px;
    line-height: 22px;
  `
};

const CSS = css`
  ${({ size }) => TextButtonSizeToCSS[size]}

  display: inline-flex;
  align-items: center;

  color: ${({ theme }) => theme.current === Theme.ADULT ? Color.WHITE : Color.GRAY_60};

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

const StyledTextButton = styled.button.attrs(({ type, size }) => ({
  type: type || 'button',
  size: size || TextButtonSize.MEDIUM
}))`${CSS}`;

const StyledTextLink = styled(Link).attrs(({ size }) => ({
  size: size || TextButtonSize.MEDIUM
}))`${CSS}`;

const StyledTextButtonIconLeft = styled(Icon)`
  margin-right: 4px;
`;

const StyledTextButtonIconRight = styled(Icon)`
  margin-left: 4px;
`;

export {
  TextButtonSize,
  StyledTextButton as TextButton,
  StyledTextLink as TextLink,
  StyledTextButtonIconLeft as TextButtonIconLeft,
  StyledTextButtonIconRight as TextButtonIconRight
};
