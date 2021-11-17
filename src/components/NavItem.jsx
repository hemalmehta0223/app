import React from "react";
import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
} from "react-router-dom";
import { ListItem, Button, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  button: {
    fontWeight: 450,
    fontSize: "0.88rem",
    justifyContent: "flex-start",
    letterSpacing: 0,
    textTransform: "none",
    width: "100%",
    color: (s) =>
      s.active ? theme.palette.primary.main : theme.palette.text.secondary,
    "& svg": { mr: 1 },
  },
  listItem: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
}));

const NavItem = ({ href, icon: Icon, title }) => {
  const location = useLocation();
  const active = href
    ? !!matchPath({ path: href, end: false }, location.pathname)
    : false;

  const classes = useStyles({ active });

  return (
    <ListItem disableGutters className={classes.listItem}>
      <Button to={href} component={RouterLink} className={classes.button}>
        {Icon && <Icon size="20" />}
        <span style={{ paddingLeft: "5px" }}>{title}</span>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
};

export default NavItem;
