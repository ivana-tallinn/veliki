import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { Icon } from '../elements/icon';
import { Logo } from '../elements/logo';
import { IconButton, IconLink } from '../elements/icon-button';
import { ButtonColor, Button, ButtonIconLeft } from '../elements/button';
import { TextButtonSize, TextLink } from '../elements/text-button';
import { Input } from '../elements/input';
import { Container } from './container';

const StyledNavigation = styled(Container).attrs({
  as: 'nav'
})`
  padding-top: 14px;

  @media (min-width: 768px) {
    display: grid;
    gap: 6px;
    padding-top: 6px;
  }
`;

const StyledTop = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogoTop = styled(Logo)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledTextLinkList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 12px;
  }
`;

const StyledTextLink = styled(TextLink).attrs({
  size: TextButtonSize.LARGE
})``;

const StyledThemeToggle = styled(Button).attrs({
  color: ButtonColor.ACCENT_OPPOSITE
})`
  margin-left: auto;
`;

const StyledMenuButton = styled(IconButton)`
  margin-left: 4px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledSeparator = styled.div`
  @media (min-width: 768px) {
    height: 1px;

    background-color: ${Color.GRAY_20};
  }
`;

const StyledBottom = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const StyledIconLinkList = styled.ul`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;

const StyledSearchForm = styled.form`
  position: relative;

  margin-left: 20px;
  width: 200px;
`;

const StyledSearchInput = styled(Input)`
  width: 100%;
`;

const StyledSearchButton = styled(IconButton).attrs({
  type: 'submit'
})`
  position: absolute;
  top: 4px;
  right: 4px;
`;

function Header({ className }) {
  const theme = useTheme();
  const themeToggleIcon = theme.current === Theme.ADULT ? IconName.BIKE_CHILD : IconName.BIKE_ADULT;
  const themeToggleText = theme.current === Theme.ADULT ? 'Детям' : 'Взрослым';
  const onThemeToggleClick = () => theme.toggleTheme();

  return (
    <header className={className}>
      <StyledNavigation>

        <StyledTop>
          <StyledLogoTop />
          <StyledTextLinkList>
            <li>
              <StyledTextLink to='/catalog'>
                Велики
              </StyledTextLink>
            </li>
            <li>
              <StyledTextLink to='#'>
                Новости
              </StyledTextLink>
            </li>
            <li>
              <StyledTextLink to='#'>
                Услуги
              </StyledTextLink>
            </li>
          </StyledTextLinkList>
          <StyledThemeToggle onClick={onThemeToggleClick}>
            <ButtonIconLeft name={themeToggleIcon} />
            {themeToggleText}
          </StyledThemeToggle>
          <StyledMenuButton aria-label='Меню'>
            <Icon name={IconName.MENU} />
          </StyledMenuButton>
        </StyledTop>

        <StyledSeparator />

        <StyledBottom>
          <Logo />
          <StyledIconLinkList>
            <li>
              <IconLink to='#' aria-label='Профиль'>
                <Icon name={IconName.USER} />
              </IconLink>
            </li>
            <li>
              <IconLink to='#' aria-label='Избранные товары'>
                <Icon name={IconName.HEART} />
              </IconLink>
            </li>
            <li>
              <IconLink to='#' aria-label='Сравнение товаров'>
                <Icon name={IconName.BAR_CHART} />
              </IconLink>
            </li>
            <li>
              <IconLink to='#' aria-label='Корзина'>
                <Icon name={IconName.SHOPPING_CART} />
              </IconLink>
            </li>
          </StyledIconLinkList>
          <StyledSearchForm>
            <StyledSearchInput placeholder='Найти велик...' />
            <StyledSearchButton>
              <Icon name={IconName.SEARCH} />
            </StyledSearchButton>
          </StyledSearchForm>
        </StyledBottom>

      </StyledNavigation>
    </header>
  );
}

export { Header };
