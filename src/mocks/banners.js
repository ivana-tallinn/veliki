import { useMemo } from 'react';
import { Theme } from '../theme';
import { BannerSize } from '../components/banner';

const useMockBanners = (theme = Theme.ADULT) => {
  const banners = useMemo(() => [
    {
      id: 1,
      size: BannerSize.LARGE,
      title: theme === Theme.ADULT ? 'Трековые велики' : 'Беговелы',
      discount: theme === Theme.ADULT ? 50 : 30,
      image: theme === Theme.ADULT ? '/images/banners/banner-1-adult.jpg' : '/images/banners/banner-1-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Чёрный трековый велик' : 'Мальчик едет на деревянном беговеле'
    },
    {
      id: 2,
      size: BannerSize.MEDIUM,
      title: theme === Theme.ADULT ? 'Цветные покрышки' : 'Крутые велики',
      image: theme === Theme.ADULT ? '/images/banners/banner-2-adult.jpg' : '/images/banners/banner-2-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Белый обод с красной покрышкой' : 'Дети в шлемах и гоночные велики'
    },
    {
      id: 3,
      size: BannerSize.MEDIUM,
      title: theme === Theme.ADULT ? 'Стильные велики' : 'Велики для девчонок',
      image: theme === Theme.ADULT ? '/images/banners/banner-3-adult.jpg' : '/images/banners/banner-3-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Голубой прогулочный велик' : 'Девочка в шлеме едет на голубом велике'
    }
  ], [theme]);

  return banners;
};

export { useMockBanners };
