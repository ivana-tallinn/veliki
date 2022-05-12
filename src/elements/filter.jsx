import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { Icon } from './icon';

const StyledFilterWrapper = styled.div`
  position: relative;

  display: inline-grid;
`;

const StyledChevron = styled(Icon).attrs({
  name: IconName.CHEVRON_DOWN
})`
  position: absolute;
  top: -1px;
  right: 0;

  pointer-events: none;
`;

const StyledFilter = styled.select`
  appearance: none;

  padding-right: 24px;

  font-size: 16px;
  line-height: 22px;
  color: ${Color.WHITE};

  cursor: pointer;

  + ${StyledChevron} {
    color: ${Color.WHITE};
  }

  ${({ theme }) => theme.current === Theme.ADULT ? css`
    &:hover {
      color: ${Color.ORANGE_10};

      + ${StyledChevron} {
        color: ${Color.ORANGE_10};
      }
    }

    &:focus {
      color: ${Color.ORANGE_40};

      + ${StyledChevron} {
        color: ${Color.ORANGE_40};
      }
    }
  ` : css`
    &:hover {
      color: ${Color.GREEN_10};

      + ${StyledChevron} {
        color: ${Color.GREEN_10};
      }
    }

    &:focus {
      color: ${Color.GREEN_40};

      + ${StyledChevron} {
        color: ${Color.GREEN_40};
      }
    }
  `}
`;

function Filter({ className, children, ...restProps }) {
  return (
    <StyledFilterWrapper className={className}>
      <StyledFilter {...restProps}>
        {children}
      </StyledFilter>
      <StyledChevron />
    </StyledFilterWrapper>
  );
}

export { Filter };
