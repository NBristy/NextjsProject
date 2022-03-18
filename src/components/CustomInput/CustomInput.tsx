import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { FormControl, Input, InputLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from '../../styles/jss/components/customInputStyle.js'

interface formControlProps {
	className?: string,
	[x: string]: any
}

interface inputProps {
	[x: string]: any
}

interface labelProps {
	[x: string]: any
}

interface CustomInputProps {
	labelText?: ReactNode,
  labelProps?: labelProps,
  id: string,
  inputProps?: inputProps,
  formControlProps?: formControlProps,
  inputRootCustomClasses?: string,
  error?: boolean,
  success?: boolean,
  white?: boolean,
}

const useStyles = makeStyles(styles as any);

const CustomInput: React.FC<CustomInputProps> = (props: CustomInputProps) => {
	const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
  } = props;
	const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = classNames({
    [inputRootCustomClasses as string]: inputRootCustomClasses !== undefined,
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + " " + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      />
    </FormControl>
  )
}

export default CustomInput
