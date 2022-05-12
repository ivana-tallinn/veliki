import { useMemo } from 'react';
import { Theme } from '../theme';

const useMockCategories = (theme = Theme.ADULT) => {
  const categories = useMemo(() => [
    {
      id: 1,
      name: theme === Theme.ADULT ? 'Трековые' : 'Беговелы',
      modelAmount: theme === Theme.ADULT ? 156 : 116,
      image: theme === Theme.ADULT ? '/images/categories/category-1-adult.jpg' : '/images/categories/category-1-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Белый трековый велик' : 'Белый беговел'
    },
    {
      id: 2,
      name: theme === Theme.ADULT ? 'Горные' : 'Трехколесные',
      modelAmount: theme === Theme.ADULT ? 125 : 98,
      image: theme === Theme.ADULT ? '/images/categories/category-2-adult.jpg' : '/images/categories/category-2-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Серый горный велик' : 'Красный трехколесный велик'
    },
    {
      id: 3,
      name: theme === Theme.ADULT ? 'Повседневные' : 'Подростковые',
      modelAmount: theme === Theme.ADULT ? 189 : 173,
      image: theme === Theme.ADULT ? '/images/categories/category-3-adult.jpg' : '/images/categories/category-3-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Красный повседневный велик' : 'Голубой подростковый велик'
    }
  ], [theme]);

  return categories;
};

export { useMockCategories };
