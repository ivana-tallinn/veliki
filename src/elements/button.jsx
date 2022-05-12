import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';
import { Icon } from './icon';

const ButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large'
};

const ButtonVariant = {
  FILLED: 'filled',
  OUTLINED: 'outlined'
};

const ButtonColor = {
  ACCENT: 'accent',
  ACCENT_OPPOSITE: 'accent-opposite'
};

const ButtonSizeToCSS = {
  [ButtonSize.MEDIUM]: css`
    padding-right: 5px;
    padding-bottom: 2px;
    padding-left: 5px;
  `,
  [ButtonSize.LARGE]: css`
    padding-top: 2px;
    padding-right: 7px;
    padding-bottom: 4px;
    padding-left: 7px;
  `
};

const ButtonVariantToCSS = {
  [ButtonVariant.FILLED]: css`
    border-color: transparent;

    color: ${Color.WHITE};

    background-color: var(--color-button);
  `,
  [ButtonVariant.OUTLINED]: css`
    border-color: var(--color-button);

    color: var(--color-button);

    background-color: transparent;
  `
};

const AdultColors = css`
  --color-button: ${Color.ORANGE_30};

  &:hover,
  &:focus {
    --color-button: ${Color.ORANGE_20};
  }

  &:active {
    --color-button: ${Color.ORANGE_40};
  }

  &:disabled {
    --color-button: ${Color.GRAY_30};
  }
`;

const ChildColors = css`
  --color-button: ${Color.GREEN_30};

  &:hover,
  &:focus {
    --color-button: ${Color.GREEN_20};
  }

  &:active {
    --color-button: ${Color.GREEN_40};
  }

  &:disabled {
    --color-button: ${Color.GRAY_30};
  }
`;

const ButtonColorToCSS = {
  [ButtonColor.ACCENT]: css`
    ${({ theme }) => theme.current === Theme.ADULT ? AdultColors : ChildColors}
  `,
  [ButtonColor.ACCENT_OPPOSITE]: css`
    ${({ theme }) => theme.current === Theme.ADULT ? ChildColors : AdultColors}
  `
};

const CSS = css`
  ${({ size }) => ButtonSizeToCSS[size]}
  ${({ variant }) => ButtonVariantToCSS[variant]}
  ${({ color }) => ButtonColorToCSS[color]}

  display: inline-flex;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-radius: ${Radius[4]};

  font-size: 16px;
  line-height: 22px;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  svg {
    color: currentColor;
  }
`;

const StyledButton = styled.button.attrs(({ type, size, variant, color }) => ({
  type: type || 'button',
  size: size || ButtonSize.MEDIUM,
  variant: variant || ButtonVariant.FILLED,
  color: color || ButtonColor.ACCENT
}))`${CSS}`;

const StyledLink = styled(Link).attrs(({ size, variant, color }) => ({
  size: size || ButtonSize.MEDIUM,
  variant: variant || ButtonVariant.FILLED,
  color: color || ButtonColor.ACCENT
}))`${CSS}`;

const StyledButtonIconLeft = styled(Icon)`
  margin-right: 4px;
`;

export {
  ButtonSize,
  ButtonVariant,
  ButtonColor,
  StyledButton as Button,
  StyledLink as Link,
  StyledButtonIconLeft as ButtonIconLeft
};
