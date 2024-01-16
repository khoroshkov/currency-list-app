import React, { useCallback, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { styled as muiStyled, alpha } from '@mui/material/styles';
import { validateString } from 'utils/validateString';

import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { LanguageSwitcher } from './components/LanguageSwitcher';

const UPPER_HEADER_HEIGHT: number = 65;

const StyledHeaderContainer = styled(AppBar)<{ isHidden: boolean }>`
  top: ${({ isHidden }) => (isHidden ? `-${UPPER_HEADER_HEIGHT}px` : 0)} !important;
  transition: top 0.4s ease-out !important;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  height: ${UPPER_HEADER_HEIGHT}px;
`;

const SwitchersContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const SearchContainer = styled.div`
  display: flex;
  padding: 0 16px 8px 16px;
`;

const Search = muiStyled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}));

const SearchIconWrapper = muiStyled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = muiStyled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

export const Header = () => {
  const { t } = useTranslation(['common']);

  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams({ s: '' });
  const search = searchParams.get('s');

  const handlePageScroll = useCallback(() => {
    const position: number = window.pageYOffset;
    if (position > UPPER_HEADER_HEIGHT) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, []);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchInput = event.target.value.toLowerCase();

      if (validateString(searchInput) || searchInput === '') {
        setSearchParams(
          (prevValue) => {
            prevValue.set('s', searchInput);
            return prevValue;
          },
          { replace: true }
        );
      }
    },
    [setSearchParams]
  );

  useEffect(() => {
    window.addEventListener('scroll', handlePageScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handlePageScroll);
    };
  }, [handlePageScroll]);

  return (
    <StyledHeaderContainer isHidden={isHidden}>
      <StyledToolbar>
        <Typography variant="h6" component="div">
          {t('head.title')}
        </Typography>

        <SwitchersContainer>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </SwitchersContainer>
      </StyledToolbar>
      <SearchContainer>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            autoFocus
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearch}
            placeholder={t('placeHolders.search_input')}
            value={search}
          />
        </Search>
      </SearchContainer>
    </StyledHeaderContainer>
  );
};
