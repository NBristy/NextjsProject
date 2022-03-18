import React, { ReactNode, useEffect } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material';
import styles from '../../styles/jss/components/parallaxStyle.js';

interface ParallaxProps {
	// className: string,
	filter?: boolean,
	// style?: string,
	image: string,
	responsive?: boolean,
	children?: ReactNode,
	small?: boolean // this will add a min-height of 660px on small screens
}

const theme = createTheme();
const useStyles = makeStyles(styles(theme) as any);

const Parallax: React.FC<ParallaxProps> = (props: ParallaxProps) => {
	const [transform, setTransform] = React.useState("translate3d(0,0px,0)");
	useEffect(()=>{
    if (window.innerWidth >= 768) {
			window.addEventListener("scroll", resetTransform);
		}
		return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  }, [])
	const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };
	const {
    filter,
    // className,
    children,
    // style,
    image,
    small,
    responsive,
  } = props;
	const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [classes.parallaxResponsive]: responsive,
    // [className]: className !== undefined,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        // ...style,
        backgroundImage: "url(" + image + ")",
        transform: transform,
      }}
    >
      {children}
    </div>
  );
}
export default Parallax