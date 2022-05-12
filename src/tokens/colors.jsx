import { createGlobalStyle } from 'styled-components';

const Color = {
  ORANGE_10: 'var(--color-orange-10)',
  ORANGE_20: 'var(--color-orange-20)',
  ORANGE_30: 'var(--color-orange-30)',
  ORANGE_40: 'var(--color-orange-40)',
  GREEN_10: 'var(--color-green-10)',
  GREEN_20: 'var(--color-green-20)',
  GREEN_30: 'var(--color-green-30)',
  GREEN_40: 'var(--color-green-40)',
  WHITE: 'var(--color-white)',
  GRAY_10: 'var(--color-gray-10)',
  GRAY_20: 'var(--color-gray-20)',
  GRAY_30: 'var(--color-gray-30)',
  GRAY_40: 'var(--color-gray-40)',
  GRAY_50: 'var(--color-gray-50)',
  GRAY_60: 'var(--color-gray-60)',
  GRAY_70: 'var(--color-gray-70)'
};

const Colors = createGlobalStyle`
  :root {
    --color-orange-10: #FFC9AA;
    --color-orange-20: #FF9F69;
    --color-orange-30: #FF833E;
    --color-orange-40: #F06314;

    --color-green-10: #BFF5B1;
    --color-green-20: #86DA71;
    --color-green-30: #5FCB45;
    --color-green-40: #42B026;

    --color-white: #FFFFFF;
    --color-gray-10: #EDEDED;
    --color-gray-20: #CCCCCC;
    --color-gray-30: #ADADAD;
    --color-gray-40: #3F3F3F;
    --color-gray-50: #363636;
    --color-gray-60: #2C2C2C;
    --color-gray-70: #1F1F1F;
  }
`;

export { Color, Colors };
