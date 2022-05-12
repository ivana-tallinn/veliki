import { createGlobalStyle } from 'styled-components';

const Gradient = {
  CATEGORY_CARD: 'var(--gradient-category-card)'
};

const Gradients = createGlobalStyle`
  :root {
    --gradient-category-card: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

export { Gradient, Gradients };
