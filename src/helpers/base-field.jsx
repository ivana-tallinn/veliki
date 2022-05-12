import styled from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';

const StyledBaseField = styled.div`
  border: 1px solid ${Color.GRAY_20};
  border-radius: ${Radius[4]};

  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.current === Theme.ADULT ? Color.WHITE : Color.GRAY_60};
  text-overflow: ellipsis;

  &:hover {
    border-color: ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_20 : Color.GREEN_20};
  }

  &:focus {
    border-color: ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_40 : Color.GREEN_40};
  }

  &::placeholder {
    color: currentColor;
  }
`;

export {
  StyledBaseField as BaseField
};
