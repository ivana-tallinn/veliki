import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';
import { TypographyVariant, Typography } from './typography';

const StyledSwitchWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const StyledSwitch = styled.button`
  position: relative;

  width: 22px;
  height: 22px;

  cursor: pointer;

  &::before {
    content: '';

    position: absolute;
    top: 8px;
    left: 0;

    width: 22px;
    height: 8px;
    border-radius: ${Radius[4]};

    background-color: ${Color.GRAY_10};
  }

  &::after {
    content: '';

    position: absolute;
    top: 6px;
    left: 0;

    width: 12px;
    height: 12px;
    border-radius: 50%;

    background-color: ${Color.GRAY_20};
  }

  &[aria-checked='true'] {
    &::before {
      background-color: ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_10 : Color.GREEN_10};
    }

    &::after {
      right: 0;
      left: auto;

      background-color: ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_30 : Color.GREEN_30};
    }

    &:hover,
    &:focus {
      &::after {
        background-color: ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_20 : Color.GREEN_20};
      }
    }

    &:active {
      &::after {
        background-color: ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_40 : Color.GREEN_40};
      }
    }
  }
`;

const StyledLabel = styled(Typography).attrs({
  as: 'label',
  variant: TypographyVariant.TEXT_1
})`
  padding-left: 8px;

  cursor: pointer;
`;

function Switch({ className, children }) {
  const id = useMemo(() => nanoid(), []);
  const [checked, setChecked] = useState(false);
  const onSwitchClick = () => setChecked(!checked);

  return (
    <StyledSwitchWrapper className={className}>
      <StyledSwitch
        id={id}
        type='button'
        role='switch'
        aria-checked={checked}
        onClick={onSwitchClick}
      />
      <StyledLabel htmlFor={id}>
        {children}
      </StyledLabel>
    </StyledSwitchWrapper>
  );
}

export { Switch };
