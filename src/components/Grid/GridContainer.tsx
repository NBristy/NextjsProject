import React, { ReactNode } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

interface GridContainerProps {
	className?: string,
	children: ReactNode,
	[x: string]: any
}

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto",
  },
};

const useStyles = makeStyles(styles);

const GridContainer: React.FC<GridContainerProps> = (props: GridContainerProps) => {
	const classes = useStyles();
	const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

export default GridContainer
