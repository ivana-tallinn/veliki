import React from 'react';
import styled from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { BaseCard } from '../helpers/base-card';
import { TypographyVariant, Typography } from '../elements/typography';

const StyledNewsCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100px;

  object-fit: cover;
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: end;
  gap: 8px;
  padding: 8px;
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_4
})`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const StyledDate = styled(Typography).attrs(({ theme }) => ({
  variant: TypographyVariant.TEXT_2,
  color: theme.current === Theme.ADULT ? Color.ORANGE_30 : Color.GREEN_30
}))``;

function NewsCard({ className, title, date, image, imageAlt }) {
  return (
    <BaseCard className={className} to='#'>
      <StyledNewsCard>
        <StyledImage src={image} alt={imageAlt} />
        <StyledContent>
          <StyledTitle>
            {title}
          </StyledTitle>
          <StyledDate>
            {date}
          </StyledDate>
        </StyledContent>
      </StyledNewsCard>
    </BaseCard>
  );
}

export { NewsCard };
