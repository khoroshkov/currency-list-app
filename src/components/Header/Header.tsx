import React, { useCallback } from 'react';
import styled from 'styled-components';
import { styled as muiStyled, alpha } from '@mui/material/styles';

import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { LanguageSwitcher } from './components/LanguageSwitcher';

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
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
  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event', event.target.value);
  }, []);

  return (
    <AppBar>
      <StyledToolbar>
        <Typography variant="h6" component="div">
          Currency List App
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
            placeholder="Search…"
          />
        </Search>
      </SearchContainer>
    </AppBar>
  );
};
