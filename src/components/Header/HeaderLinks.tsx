import React from 'react';
import { Button, createTheme, Icon, List, ListItem, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Alarm, CloudDownload } from '@mui/icons-material';
import CsButton from '../CustomButtons/Button';
import styles from '../../styles/jss/components/headerLinksStyle.js'

interface HeaderLinksProps {
}
const theme = createTheme();
const useStyles = makeStyles(styles(theme) as any);

const HeaderLinks: React.FC<HeaderLinksProps> = (props: HeaderLinksProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {/* dropdown */}
        <CsButton
          id={"basic-button"}
          color="transparent"
          className={classes.navLink}
          aria-controls={"basic-menu"}
          aria-haspopup={"true"}
          aria-expanded={open ? 'true' : undefined}
          // onClick={handleClick}
        >
          Home
        </CsButton>
        {/* <Menu 
          id={"basic-menu"}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Home One</MenuItem>
          <MenuItem onClick={handleClose}>Home two</MenuItem>
        </Menu> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        <CsButton
          color="transparent"
          // href="#"
          // target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>unarchive</Icon> Upgrade to PRO
        </CsButton>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CsButton
          // href="#"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </CsButton>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <CsButton
            // href="https://twitter.com/CreativeTim?ref=creativetim"
            // target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            {/* <Alarm/> */}
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </CsButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <CsButton
            color="transparent"
            // href="#"
            // target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </CsButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <CsButton
            color="transparent"
            // href="#"
            // target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </CsButton>
        </Tooltip>
      </ListItem>
    </List>
  )
}

export default HeaderLinks
