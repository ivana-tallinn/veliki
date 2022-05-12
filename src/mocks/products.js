import { useMemo } from 'react';
import { Theme } from '../theme';

const useMockProducts = (theme = Theme.ADULT) => {
  const products = useMemo(() => [
    {
      id: 1,
      name: 'Велик BMC',
      price: theme === Theme.ADULT ? 94000 : 32000,
      image: theme === Theme.ADULT ? '/images/products/product-1-adult.jpg' : '/images/products/product-1-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Серый велик с черными ободами' : 'Розовый велик с белыми ободами',
      hit: true,
      new: false,
      discount: false,
      notAvailable: false
    },
    {
      id: 2,
      name: 'Велик Mongoose',
      price: theme === Theme.ADULT ? 35000 : 18000,
      oldPrice: theme === Theme.ADULT ? 52000 : 24000,
      image: theme === Theme.ADULT ? '/images/products/product-2-adult.jpg' : '/images/products/product-2-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Синий велик с белыми ободами' : 'Красный велик с белыми ободами',
      hit: false,
      new: false,
      discount: true,
      notAvailable: false
    },
    {
      id: 3,
      name: 'Велик Peugeot',
      price: theme === Theme.ADULT ? 58000 : 16000,
      image: theme === Theme.ADULT ? '/images/products/product-3-adult.jpg' : '/images/products/product-3-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Белый велик с чёрными ободами' : 'Красный велик с красными ободами',
      hit: false,
      new: true,
      discount: false,
      notAvailable: false
    },
    {
      id: 4,
      name: 'Велик Trek',
      price: theme === Theme.ADULT ? 76000 : 57000,
      image: theme === Theme.ADULT ? '/images/products/product-4-adult.jpg' : '/images/products/product-4-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Белый велик с чёрными ободами' : 'Красный велик с белыми ободами',
      hit: true,
      new: false,
      discount: false,
      notAvailable: false
    },
    {
      id: 5,
      name: 'Велик Triban',
      price: theme === Theme.ADULT ? 116000 : 46000,
      image: theme === Theme.ADULT ? '/images/products/product-5-adult.jpg' : '/images/products/product-5-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Серый велик с чёрными ободами' : 'Зелёный велик с чёрными ободами',
      hit: false,
      new: true,
      discount: false,
      notAvailable: false
    },
    {
      id: 6,
      name: 'Велик Norco',
      price: theme === Theme.ADULT ? 62000 : 64000,
      oldPrice: theme === Theme.ADULT ? 88000 : 72000,
      image: theme === Theme.ADULT ? '/images/products/product-6-adult.jpg' : '/images/products/product-6-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Коричневый велик с синими ободами' : 'Розовый велик с белыми ободами',
      hit: true,
      new: false,
      discount: true,
      notAvailable: true
    },
  ], [theme]);

  return products;
};

export { useMockProducts };
