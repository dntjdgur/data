// Core Libraries //
import * as React from 'react';
import { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TagIcon from '@mui/icons-material/Tag';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Divider from '@mui/material/Divider';
import { Text } from 'react-native';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';

// Bottom NavBar Components //
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useNavigate } from 'react-router-dom';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Mobile View NavBar at bottom //
import { BrowserView, MobileView } from 'react-device-detect';

// Page Contents //
import HomeContent from '../modules/HomeContent';
import AboutContent from '../modules/AboutContent';
import AnalysisContent from '../modules/AnalysisContent';
import ContactContent from '../modules/ContactContent';
import CarbonContent from '../modules/CarbonContent';

const pages = ['About Me', 'Projects', 'Contact'];

function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired
};

export default function AppTheme(props) {
  const { home, about, analysis, contact, carbon } = props;
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const currDate = new Date();
  const thisYear = currDate.getFullYear();

  const navigate = useNavigate();

  {/** Scroll to the top of the page. */}
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    switch (page.target.innerText) {
      case 'HOME':
        return navigate('/home');
      case 'ABOUT ME':
        return navigate('/aboutme');
      case 'PROJECTS':
        return navigate('/analysis');
      case 'CONTACT':
        return navigate('/contact');
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Fragment>
      <a id="back-to-top-anchor" />
      <AppBar position="sticky" style={{ background: '#E0E0E0' }}> {/** Change Background Color */}
        <Container maxWidth="xl">
          <Toolbar disableGutters >
            <TagIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Home
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" variant="h3">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <TagIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={(event) => handleCloseNavMenu(event)}
                  sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'monoSpace', }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xxl" sx={{ mt: 4, mb: 4 }} style={{ background: '#E0E0E0' }}>
        <Grid container spacing={9}>
          <Grid item xs={12}>
            {home ? <HomeContent /> :
              about ? <AboutContent /> :
                analysis ? <AnalysisContent /> :
                  contact ? <ContactContent /> : 
                    carbon ? <CarbonContent /> : <></>
            }
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={1} style={{ alignItems: 'center', textAlign: 'center' }}>
          <Grid item xs={12}>
            <Text>Developed by Sunghyuk Woo{"\n"}</Text>
            <Text>© {thisYear} Copyright by Alex, All rights reserved :)</Text>
          </Grid>
        </Grid>
        <br />
      </Container>
      <BrowserView>
        <Grid container spacing={3}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <br />
            <Divider variant="middle">
            </Divider>
            <Grid container spacing={4}>
              <Grid item xs={3} style={{ alignItems: 'center', textAlign: 'center' }}>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    navigate('/home');
                  }}
                  style={{ fontSize: 18, textDecoration: 'none', color: 'black' }}
                >Home</Link>
              </Grid>
              <Grid item xs={3} style={{ alignItems: 'center', textAlign: 'center' }}>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    navigate('/aboutme');
                  }}
                  style={{ fontSize: 18, textDecoration: 'none', color: 'black' }}
                >About Me</Link>
              </Grid>
              <Grid item xs={3} style={{ alignItems: 'center', textAlign: 'center' }}>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    navigate('/analysis');
                  }}
                  style={{ fontSize: 18, textDecoration: 'none', color: 'black' }}
                >Projects</Link>
              </Grid>
              <Grid item xs={3} style={{ alignItems: 'center', textAlign: 'center' }}>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    navigate('/contact');
                  }}
                  style={{ fontSize: 18, textDecoration: 'none', color: 'black' }}
                >Contact</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BrowserView>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Fragment>
  );
}; 