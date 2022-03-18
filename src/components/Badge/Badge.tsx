import React, { ReactNode } from 'react';
import { makeStyles } from '@mui/styles';

import styles from '../../styles/jss/components/badgeStyle.js'

interface BadgeProps {
	color: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'rose' | 'gray' | string,
	children: ReactNode
}

const useStyles = makeStyles(styles as any);

const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
	const classes = useStyles();
  const { color, children } = props;
  return (
    <span className={classes.badge + " " + classes[color]}>{children}</span>
  );
}

export default Badge
