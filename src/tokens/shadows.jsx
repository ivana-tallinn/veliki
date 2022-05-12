import { createGlobalStyle } from 'styled-components';

const Shadow = {
  CARD_CHILD: 'var(--shadow-card-child)'
};

const Shadows = createGlobalStyle`
  :root {
    --shadow-card-child: 0 4px 10px rgba(0, 0, 0, 0.07);
  }
`;

export { Shadow, Shadows };
