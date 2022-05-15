import { createGlobalStyle } from 'styled-components';
import { Theme } from '../theme';
import { Font } from './fonts';
import { Color } from './colors';

const Resets = createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    border: none;
    border-radius: 0;

    background: none;
    box-shadow: none;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_40 : Color.GREEN_40};
    }
  }

  body {
    font-family: ${Font.COMMISSIONER};
    font-weight: 400;

    background-color: ${({ theme }) => theme.current === Theme.ADULT ? Color.GRAY_50 : Color.WHITE};
  }

  button,
  input,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
  }

  ol,
  ul,
  dl {
    list-style: none;
  }
`;

export { Resets };
