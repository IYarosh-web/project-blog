'use client';

import { DARK_TOKENS, LIGHT_TOKENS } from '@/constants';
import React from 'react';
import Cookies from 'js-cookie';

import {Sun, Moon} from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';

import styles from './ThemeToggler.module.css';

function ThemeToggler({initialTheme}) {
  const [theme, setTheme] = React.useState(initialTheme);
  console.log({theme});
  const toggle = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(nextTheme);

    const nextTokens = nextTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;

    Cookies.set('theme', nextTheme);

    const root = document.documentElement;
    root.setAttribute('data-color-theme', nextTheme);

    Object.entries(nextTokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    })
  };

  return (
    <button className={styles.action} onClick={toggle}>
      {theme === 'light' ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
      <VisuallyHidden>
        Toggle dark / light mode
      </VisuallyHidden>
    </button>
  );
}

export default ThemeToggler;
