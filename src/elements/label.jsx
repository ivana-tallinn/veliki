import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';

const LabelColor = {
  ACCENT: 'accent',
  WHITE: 'white'
};

const LabelColorToCSS = {
  [LabelColor.ACCENT]: css`
    color: ${Color.WHITE};

    background-color: ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_30 : Color.GREEN_30};
  `,
  [LabelColor.WHITE]: css`
    ${({ theme }) => theme.current === Theme.ADULT ? css`
      color: ${Color.WHITE};

      background-color: ${Color.GRAY_60};
    ` : css`
      color: ${Color.GRAY_60};

      background-color: ${Color.WHITE};
    `}
  `
};

const StyledLabel = styled.div.attrs(({ color }) => ({
  color: color || LabelColor.ACCENT
}))`
  ${({ color }) => LabelColorToCSS[color]}

  display: inline-block;
  border-radius: ${Radius[4]};
  padding-right: 6px;
  padding-bottom: 4px;
  padding-left: 6px;
`;

export {
  LabelColor,
  StyledLabel as Label
};
