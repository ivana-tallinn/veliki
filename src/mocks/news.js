import { useMemo } from 'react';
import { Theme } from '../theme';

const useMockNews = (theme = Theme.ADULT) => {
  const news = useMemo(() => [
    {
      id: 1,
      title: theme === Theme.ADULT ? 'Велопробег в Москве' : 'Гонки на великах',
      date: theme === Theme.ADULT ? '02.04.2022' : '12.04.2022',
      image: theme === Theme.ADULT ? '/images/news/news-1-adult.jpg' : '/images/news/news-1-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Велосипедисты едут по дороге в пасмурный день' : 'Мальчики едут по гоночной трассе'
    },
    {
      id: 2,
      title: theme === Theme.ADULT ? 'Велик зимой' : 'Прогулки с детьми',
      date: theme === Theme.ADULT ? '21.01.2022' : '30.02.2022',
      image: theme === Theme.ADULT ? '/images/news/news-2-adult.jpg' : '/images/news/news-2-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Велик в сугробе на фоне гор' : 'Малыш с беговелом'
    },
    {
      id: 3,
      title: theme === Theme.ADULT ? 'В длинную дорогу' : 'Безопасная езда',
      date: theme === Theme.ADULT ? '17.10.2021' : '27.11.2021',
      image: theme === Theme.ADULT ? '/images/news/news-3-adult.jpg' : '/images/news/news-3-child.jpg',
      imageAlt: theme === Theme.ADULT ? 'Велик в поле на закате' : 'Мальчик в шлеме едет очень быстро'
    }
  ], [theme]);

  return news;
};

export { useMockNews };
