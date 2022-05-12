import React from 'react';
import styled from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { BaseField } from '../helpers/base-field';
import { Icon } from './icon';

const StyledSelectWrapper = styled.div`
  position: relative;

  display: inline-grid;
`;

const StyledChevron = styled(Icon).attrs({
  name: IconName.CHEVRON_DOWN
})`
  position: absolute;
  top: 1px;
  right: 2px;

  pointer-events: none;
`;

const StyledSelect = styled(BaseField).attrs({
  as: 'select'
})`
  appearance: none;

  width: 100%;
  padding-right: 24px;
  padding-bottom: 2px;
  padding-left: 4px;

  cursor: pointer;

  &:hover {
    + ${StyledChevron} {
      color: ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_20 : Color.GREEN_20};
    }
  }

  &:focus {
    + ${StyledChevron} {
      color: ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_40 : Color.GREEN_40};
    }
  }
`;

function Select({ className, children, ...restProps }) {
  return (
    <StyledSelectWrapper className={className}>
      <StyledSelect {...restProps}>
        {children}
      </StyledSelect>
      <StyledChevron />
    </StyledSelectWrapper>
  );
}

export { Select };
