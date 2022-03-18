import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import buttonStyle from '../../styles/jss/components/buttonStyle.js';

interface ButtonProps {
	color: string | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'rose' | 'white' | 'facebook' | 'twitter' | 'google' | 'github' | 'transparent',
	size?: string | 'sm' | 'lg',
	simple?: boolean,
	round?: boolean,
	fullWidth?: boolean,
	disabled?: boolean,
	block?: boolean,
	link?: boolean,
	justIcon?: boolean,
	children?: ReactNode,
	className: string,
  // onAction?: () => void;
	[x: string]: any
}
const makeComponentStyles = makeStyles((()=>({...buttonStyle})) as any);

const RegularButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    // onAction,
    ...rest
  } = props;

	const classes = makeComponentStyles();

	const btnClasses = classNames({
    [classes.button]: true,
    [classes[size as string]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });

  return (
		<Button {...rest} ref={ref} classes={{ root: btnClasses }}>
      {children}
    </Button>
  )
});

export default RegularButton;