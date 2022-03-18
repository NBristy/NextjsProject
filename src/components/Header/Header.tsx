import React, { ReactNode, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { AppBar, Button, Drawer, Hidden, IconButton, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Menu } from '@mui/icons-material';
import styles from '../../styles/jss/components/headerStyle.js';

interface ShapeType {
  height: number;
  color: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'transparent' | 'white' | 'rose' | 'dark' | string;
}

interface HeaderProps {
  appBar?: ReactNode;
  rightLinks?: ReactNode;
  leftLinks?: ReactNode;
  brand?: string;
  fixed?: boolean;
  absolute?: boolean;
  changeColorOnScroll: ShapeType;
  color: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'transparent' | 'white' | 'rose' | 'dark' | string;
}

const useStyles = makeStyles(styles as any);

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  useEffect(()=>{
    if (props.changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }
    return function cleanUp(){
      if (props.changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange);
      }
    }
  }, [])
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[`${props.color}`]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  const logoComponent = (
    <Link href="/" as="/">
      <Button className={classes.title}>{brand}</Button>
    </Link>
  );

  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? logoComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            logoComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}>
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  )
}

export default Header
