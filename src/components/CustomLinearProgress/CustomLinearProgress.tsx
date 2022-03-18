import React from 'react';
import { LinearProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';

import styles from '../../styles/jss/components/customLinearProgressStyle.js'

interface CustomLinearProgressProps {
	color: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'rose' | 'gray' | string;
	[x: string]: any
}

const useStyles = makeStyles(styles as any);

const CustomLinearProgress: React.FC<CustomLinearProgressProps> = (props: CustomLinearProgressProps) => {
	const classes = useStyles();
  const { color, ...rest } = props;
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: classes.root + " " + classes[color + 'Background'],
        bar: classes.bar + " " + classes[color],
      }}
    />
  );
}

export default CustomLinearProgress
