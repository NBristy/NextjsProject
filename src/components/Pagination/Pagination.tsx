import React from 'react';
import classNames from 'classnames';
import { Button } from '@mui/material';

import styles from '../../styles/jss/components/paginationStyle.js'
import { makeStyles } from '@mui/styles';

interface shape {
	active?: boolean,
	disabled?: boolean,
	text: number | 'PREV' | 'NEXT' | string,
	onClick?: Function
}

interface PaginationProps {
	pages: Array<shape>,
	color?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | string
}

const useStyles = makeStyles(styles as any);

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
	const classes = useStyles();
  const { pages, color } = props;
  return (
    <ul className={classes.pagination}>
      {pages.map((prop, key) => {
        const paginationLink = classNames({
          [classes.paginationLink]: true,
          [classes[color as string]]: prop.active,
          [classes.disabled]: prop.disabled,
        });
        return (
          <li className={classes.paginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button onClick={()=>prop.onClick} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button
                onClick={() => alert("you've clicked " + prop.text)}
                className={paginationLink}
              >
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Pagination
