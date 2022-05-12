import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Theme } from './theme';

import { Fonts } from './tokens/fonts';
import { Colors } from './tokens/colors';
import { Gradients } from './tokens/gradients';
import { Shadows } from './tokens/shadows';
import { Radiuses } from './tokens/radiuses';
import { Resets } from './tokens/resets';
import { Icons } from './tokens/icons';

import { DefaultLayout } from './layouts/default';
import { IndexPage } from './pages/index';
import { CatalogPage } from './pages/catalog';

function App() {
  const [theme, setTheme] = useState(Theme.ADULT);

  const toggleTheme = () => {
    const newTheme = theme === Theme.ADULT ? Theme.CHILD : Theme.ADULT;
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={{ current: theme, toggleTheme }}>

      <Fonts />
      <Colors />
      <Gradients />
      <Shadows />
      <Radiuses />
      <Resets />

      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
          <Route path='catalog' element={<CatalogPage />} />
        </Route>
      </Routes>

      <Icons />

    </ThemeProvider>
  );
}

export { App };
