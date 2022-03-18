import React, { ReactNode } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

interface GridItemProps {
	className?: string,
	children: ReactNode,
  [x: string]: any
}

const styles = {
  grid: {
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto",
		position: "relative",
    width: "100%",
    minHeight: "1px",
  },
};

const useStyles = makeStyles(styles as any);

const GridItem: React.FC<GridItemProps> = (props: GridItemProps) => {
	const classes = useStyles();
	const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

export default GridItem
