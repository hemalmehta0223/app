import React from "react";
import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import AppSidebar from "./AppSidebar";
import { styled } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

const AppLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const AppLayoutWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingTop: 72,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 256,
  },
}));

const AppLayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const AppLayoutContent = styled("div")({
  flex: "1 1 auto",
  height: "100%",
  overflow: "auto",
});

const AppLayout = () => {
  return (
    <AppLayoutRoot>
      <AppNavbar />
      <Hidden smDown>
        <AppSidebar />
      </Hidden>

      <AppLayoutWrapper>
        <AppLayoutContainer>
          <AppLayoutContent>
            <Outlet />
          </AppLayoutContent>
        </AppLayoutContainer>
      </AppLayoutWrapper>
    </AppLayoutRoot>
  );
};

export default AppLayout;
