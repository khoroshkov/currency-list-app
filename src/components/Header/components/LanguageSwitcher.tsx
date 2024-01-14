import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SELECTED_LANGUAGE_KEY } from 'constants/localStorageKeys';
import styled from 'styled-components';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { SkFlagIcon, GBFlagIcon } from 'assets/svg';

const IconWrapper = styled.div`
  width: 26px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const savedLanguage = localStorage.getItem(SELECTED_LANGUAGE_KEY) || 'en';

  const [language, setLanguage] = useState<string>(savedLanguage);

  const handleLanguageChange = useCallback(
    (event: React.MouseEvent<HTMLElement>, value: string) => {
      if (value !== null) {
        setLanguage(value);
        localStorage.setItem(SELECTED_LANGUAGE_KEY, value);
        i18n.changeLanguage(value);
      }
    },
    [i18n]
  );

  return (
    <ToggleButtonGroup
      value={language}
      exclusive
      onChange={handleLanguageChange}
      aria-label={t('language_switcher.form_label')}>
      <ToggleButton
        value="en"
        aria-label={t('language_switcher.lang_en')}
        disabled={language === 'en'}>
        <IconWrapper>
          <GBFlagIcon />
        </IconWrapper>
      </ToggleButton>
      <ToggleButton
        value="sk"
        aria-label={t('language_switcher.lang_uk')}
        disabled={language === 'sk'}>
        <IconWrapper>
          <SkFlagIcon />
        </IconWrapper>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
