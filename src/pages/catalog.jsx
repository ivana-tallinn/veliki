import React from 'react';
import styled, { useTheme } from 'styled-components';
import { TypographyVariant, Typography } from '../elements/typography';
import { ButtonSize, Button } from '../elements/button';
import { Container } from '../components/container';
import { Filters } from '../components/filters';
import { CardList } from '../components/card-list';
import { ProductCard } from '../components/product-card';

import { useMockProducts } from '../mocks/products';

const StyledCatalogPage = styled(Container)`
  display: grid;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h1',
  variant: TypographyVariant.TITLE_1
})``;

const StyledShowMoreButton = styled(Button).attrs({
  size: ButtonSize.LARGE
})`
  display: block;
  margin-right: auto;
  margin-left: auto;
`;

// TODO На этой странице нет хлебных крошек и пагинации
// TODO Это нормально - позднее нужно просто убрать эти элементы с макетов

function CatalogPage() {
  const theme = useTheme();
  const products = useMockProducts(theme.current);

  return (
    <StyledCatalogPage>
      <StyledTitle>
        Каталог великов
      </StyledTitle>
      <Filters />
      <CardList>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </CardList>
      <StyledShowMoreButton>
        Показать ещё
      </StyledShowMoreButton>
    </StyledCatalogPage>
  );
}

export { CatalogPage };
