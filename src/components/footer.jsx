import React from 'react';
import styled from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { AccentBlock } from '../helpers/accent-block';
import { Icon } from '../elements/icon';
import { Logo } from '../elements/logo';
import { TypographyVariant, Typography } from '../elements/typography';
import { IconButton } from '../elements/icon-button';
import { TextButton } from '../elements/text-button';
import { Container } from './container';

const StyledFooter = styled.footer`
  background-color: ${Color.GRAY_60};
`;

const StyledContainer = styled(Container)`
  display: grid;
  gap: 24px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    grid-template-columns: min-content 1fr;
    gap: 70px;
  }
`;

const StyledLinkList = styled(AccentBlock).attrs({
  as: 'ul'
})`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledLinkItem = styled.li`
  @media (min-width: 768px) {
    &:nth-child(3) {
      grid-column: span 3;
      order: 1;
    }
  }
`;

const StyledLinkName = styled(Typography).attrs(({ theme }) => ({
  variant: TypographyVariant.TITLE_4,
  color: theme.current === Theme.ADULT ? Color.ORANGE_40 : Color.GREEN_40
}))`
  margin-bottom: 2px;
`;

const StyledTextLink = styled(TextButton).attrs({
  as: 'a'
})`
  color: ${Color.WHITE};
`;

const StyledSocialMediaList = styled.ul`
  display: flex;
  gap: 8px;
`;

const StyledSocialMediaItem = styled.li`
  display: grid;
`;

const StyledSocialMediaLink = styled(IconButton).attrs({
  as: 'a'
})`
  color: ${Color.WHITE};
`;

function Footer({ className }) {
  return (
    <StyledFooter className={className}>
      <StyledContainer>
        <Logo />
        <StyledLinkList>
          <StyledLinkItem>
            <StyledLinkName>
              Пиши
            </StyledLinkName>
            <StyledTextLink href='mailto:hello@velik.ru'>
              hello@velik.ru
            </StyledTextLink>
          </StyledLinkItem>
          <StyledLinkItem>
            <StyledLinkName>
              Звони
            </StyledLinkName>
            <StyledTextLink href='tel:+79999999999'>
              +7 999 999 99 99
            </StyledTextLink>
          </StyledLinkItem>
          <StyledLinkItem>
            <StyledLinkName>
              Заходи
            </StyledLinkName>
            <StyledTextLink href='https://yandex.ru/maps/-/CCUFJMdF8D' target='_blank'>
              г. Санкт-Петербург, наб. реки Карповки, 5 корпус П
            </StyledTextLink>
          </StyledLinkItem>
          <StyledLinkItem>
            <StyledLinkName>
              Следи
            </StyledLinkName>
            <StyledSocialMediaList>
              <StyledSocialMediaItem>
                <StyledSocialMediaLink
                  href='#'
                  aria-label='Магазин велосипедов «Велик» в Telegram'
                >
                  <Icon name={IconName.TELEGRAM} />
                </StyledSocialMediaLink>
              </StyledSocialMediaItem>
              <StyledSocialMediaItem>
                <StyledSocialMediaLink
                  href='#'
                  aria-label='Магазин велосипедов «Велик» на YouTube'
                >
                  <Icon name={IconName.YOUTUBE} />
                </StyledSocialMediaLink>
              </StyledSocialMediaItem>
              <StyledSocialMediaItem>
                <StyledSocialMediaLink
                  href='#'
                  aria-label='Магазин велосипедов «Велик» во ВКонтакте'
                >
                  <Icon name={IconName.VK} />
                </StyledSocialMediaLink>
              </StyledSocialMediaItem>
            </StyledSocialMediaList>
          </StyledLinkItem>
        </StyledLinkList>
      </StyledContainer>
    </StyledFooter>
  );
}

export { Footer };
