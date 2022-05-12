import React from 'react';
import styled, { useTheme } from 'styled-components';
import { VisuallyHidden } from '../helpers/visually-hidden';
import { TypographyVariant, Typography } from '../elements/typography';
import { Container } from '../components/container';
import { BannerList } from '../components/banner-list';
import { Banner } from '../components/banner';
import { CardList } from '../components/card-list';
import { CategoryCard } from '../components/category-card';
import { NewsCard } from '../components/news-card';
import { Subscription } from '../components/subscription';

import { useMockBanners } from '../mocks/banners';
import { useMockCategories } from '../mocks/categories';
import { useMockNews } from '../mocks/news';

const StyledIndexPage = styled(Container)`
  display: grid;
  gap: 36px;

  @media (min-width: 768px) {
    gap: 50px;
  }
`;

const StyledTitle = styled(VisuallyHidden).attrs({
  as: 'h1'
})``;

const StyledSectionTitle = styled(Typography).attrs({
  as: 'h2',
  variant: TypographyVariant.TITLE_2
})`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

function IndexPage() {
  const theme = useTheme();
  const banners = useMockBanners(theme.current);
  const categories = useMockCategories(theme.current);
  const news = useMockNews(theme.current);

  return (
    <StyledIndexPage>
      <StyledTitle>
        Магазин велосипедов «Велик»
      </StyledTitle>
      <BannerList>
        {banners.map((banner) => (
          <Banner key={banner.id} {...banner} />
        ))}
      </BannerList>
      <section>
        <StyledSectionTitle>
          Категории великов
        </StyledSectionTitle>
        <CardList>
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </CardList>
      </section>
      <section>
        <StyledSectionTitle>
          Новости
        </StyledSectionTitle>
        <CardList>
          {news.map((newsItem) => (
            <NewsCard key={newsItem.id} {...newsItem} />
          ))}
        </CardList>
      </section>
      <Subscription />
    </StyledIndexPage>
  );
}

export { IndexPage };
