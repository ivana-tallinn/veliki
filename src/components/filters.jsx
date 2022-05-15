import React from 'react';
import styled from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';
import { IconName } from '../tokens/icons';
import { Button, ButtonIconLeft } from '../elements/button';
import { Select } from '../elements/select';
import { Filter } from '../elements/filter';
import { Switch } from '../elements/switch';

const StyledTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

const StyledSort = styled(Select)`
  flex-grow: 1;
  max-width: 220px;
  width: 176px;
`;

const StyledFilterButton = styled(Button)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledSwitches = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const StyledBottom = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    border-radius: ${Radius[4]};
    padding: 8px 16px;

    background-color: ${({ theme }) => theme.current === Theme.ADULT ? Color.ORANGE_30 : Color.GREEN_30};
  }
`;

function Filters({ className }) {
  return (
    <div className={className}>

      <StyledTop>
        <StyledSort>
          <option>Сначала популярные</option>
          <option>Сначала непопулярные</option>
          <option>Сначала дорогие</option>
          <option>Сначала недорогие</option>
        </StyledSort>
        <StyledFilterButton>
          <ButtonIconLeft name={IconName.FILTER} />
          Фильтры
        </StyledFilterButton>
        <StyledSwitches>
          <Switch>В наличии</Switch>
          <Switch>Со скидкой</Switch>
        </StyledSwitches>
      </StyledTop>

      <StyledBottom>
        <Filter>
          <option>Бренд</option>
        </Filter>
        <Filter>
          <option>Вес</option>
        </Filter>
        <Filter>
          <option>Пол</option>
        </Filter>
        <Filter>
          <option>Радиус колес</option>
        </Filter>
        <Filter>
          <option>Количество скоростей</option>
        </Filter>
        <Filter>
          <option>Тормоза</option>
        </Filter>
      </StyledBottom>

    </div>
  );
}

export { Filters };
