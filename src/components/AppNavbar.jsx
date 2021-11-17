import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Popover,
  Button,
  Divider,
  Avatar,
  ListItemIcon,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Input, NotificationsOutlined } from "@material-ui/icons";
import { User } from "heroicons-react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  typography: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(3),
  },
  logoutPopover: {
    width: 180,
    borderRadius: 10,
  },
  alertPopover: {
    width: 280,
    borderRadius: 10,
  },
  alertPopoverItemDivider: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  primaryTypographyProps: {
    fontSize: "0.85rem",
    fontWeight: 500,
  },
  icon: { minWidth: "auto" },
}));

const AppNavbar = () => {
  const classes = useStyles();
  const [anchorElLogout, setAnchorElLogout] = React.useState(null);
  const [anchorElAlert, setAnchorElAlert] = React.useState(null);

  const handleLogoutClick = (event) => {
    setAnchorElLogout(event.currentTarget);
  };
  const handleLogoutClose = () => {
    setAnchorElLogout(null);
  };

  const handleAlertClick = (event) => {
    setAnchorElAlert(event.currentTarget);
  };
  const handleAlertClose = () => {
    setAnchorElAlert(null);
  };

  const openLogout = Boolean(anchorElLogout);
  const logoutId = openLogout ? "simple-popover" : undefined;

  const openAlert = Boolean(anchorElAlert);
  const alertId = openAlert ? "simple-popover" : undefined;

  return (
    <AppBar elevation={0}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Typography variant="h3" className={classes.typography}>
          Correspondent Billing System
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          color="inherit"
          size="medium"
          area-describedby={alertId}
          onClick={handleAlertClick}
        >
          <Badge badgeContent={2} color="error">
            <NotificationsOutlined />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          size="medium"
          aria-describedby={logoutId}
          onClick={handleLogoutClick}
        >
          <Input />
        </IconButton>
        <Popover
          id={logoutId}
          open={openLogout}
          anchorEl={anchorElLogout}
          onClose={handleLogoutClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          PaperProps={{ className: classes.logoutPopover }}
        >
          <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                pb: 2,
              }}
            >
              <ListItemIcon className={classes.icon}>
                <User />
              </ListItemIcon>
              <Typography variant="subtitle2" component="h6" align="left">
                Dummy User
              </Typography>
            </Box>

            <Divider />
          </Box>

          <Box sx={{ p: 2 }}>
            <Button variant="outlined" size="medium" fullWidth>
              Logout
            </Button>
          </Box>
        </Popover>
        <Popover
          id={alertId}
          open={openAlert}
          anchorEl={anchorElAlert}
          onClose={handleAlertClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          PaperProps={{ className: classes.alertPopover }}
        >
          <Box sx={{ p: 2, pb: 1 }}>
            <Typography variant="h4">Notifications</Typography>
            <List>
              <ListItem className={classes.alertPopoverItemDivider}>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{
                    className: classes.primaryTypographyProps,
                  }}
                  primary="Batch Refresh Required"
                  secondary="Sep 18, 2021"
                ></ListItemText>
              </ListItem>
              <ListItem className={classes.alertPopoverItemDivider}>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{
                    className: classes.primaryTypographyProps,
                  }}
                  primary="Invoice Due"
                  secondary="Oct 21, 2021"
                ></ListItemText>
              </ListItem>
            </List>
            <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
              <Button variant="text" size="small">
                Mark all as Read
              </Button>
            </Box>
          </Box>
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbar;
