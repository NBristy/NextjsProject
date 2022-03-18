import * as React from 'react';
import type { NextPage } from 'next'
import { makeStyles } from '@mui/styles';
import { AppBar, Avatar, Box, Button, Container, IconButton, Toolbar, Tooltip, Typography, Menu, MenuItem } from '@mui/material'
import Header from '../components/Header/Header'
import HeaderLinks from '../components/Header/HeaderLinks'
import Parallax from '../components/Parallax/Parallax'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import classNames from 'classnames';
import SectionBasics from '../components/Sections/SectionBasics';
import Footer from '../components/Footer/Footer';

import styles from '../styles/jss/pages/index.js'

const useStyles = makeStyles(styles as any);

const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Header 
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Parallax image="/img/nextjs_header.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>NextJS Material Kit.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material Kit based on Material-UI and NextJS.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
