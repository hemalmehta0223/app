import { Box, Drawer, List, ListSubheader } from "@material-ui/core";
import {
  ChartSquareBar,
  Link,
  Refresh,
  ReceiptRefund,
  Users,
  ViewList,
  CurrencyDollar,
  Adjustments,
  DocumentReport,
} from "heroicons-react";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import NavItem from "./NavItem";

const items = [
  {
    subHeaderText: "General",
    subItems: [
      { title: "Quick Links", href: "/app/links", icon: Link },
      { title: "Dashboard", href: "/app/dashboard", icon: ChartSquareBar },
    ],
  },
  {
    subHeaderText: "Billing",
    subItems: [
      { title: "Import Data", href: "/app/importdata", icon: Refresh },
      {
        title: "Batch & Invoice",
        href: "/app/batches",
        icon: ReceiptRefund,
      },
      { title: "View Invoices", href: "/app/invoices", icon: ViewList },
    ],
  },
  {
    subHeaderText: "Management",
    subItems: [
      { title: "Clients", href: "/app/clients", icon: Users },
      { title: "Bill Types", href: "/app/billtypes", icon: Adjustments },
      {
        title: "Payments & Adjustments",
        href: "/app/paymentadjustments",
        icon: CurrencyDollar,
      },
    ],
  },
  {
    subHeaderText: "Reporting",
    subItems: [
      { title: "Report 1", href: "", icon: DocumentReport },
      { title: "Report 2", href: "", icon: DocumentReport },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  listSubHeader: {
    color: theme.palette.text.primary,
    textTransform: "uppercase",
    padding: theme.spacing(0),
    lineHeight: 2,
    fontSize: "0.85rem",
    fontWeight: 800,
  },
  itemList: {
    padding: theme.spacing(0),
  },
  paperProps: {
    top: "74px",
    width: "256px",
    height: "calc(100% - 74px)",
    boxShadow: "2px 0 10px 0 rgb(0 0 0 / 13%)",
  },
}));

const AppSidebar = () => {
  const classes = useStyles();

  const content = (
    <Box sx={{ p: 2 }}>
      {items.map((item) => (
        <List key={item.subHeaderText}>
          <ListSubheader className={classes.listSubHeader}>
            {item.subHeaderText}
          </ListSubheader>
          <List className={classes.itemList}>
            {item.subItems.map((subItem) => (
              <NavItem
                href={subItem.href}
                title={subItem.title}
                icon={subItem.icon}
                key={subItem.title}
              />
            ))}
          </List>
        </List>
      ))}
    </Box>
    // </Box>
  );
  return (
    <Drawer
      anchor="left"
      open
      variant="persistent"
      PaperProps={{ classes: { root: classes.paperProps } }}
    >
      {content}
    </Drawer>
  );
};

export default AppSidebar;
