import React from "react";
import { Navigate } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import BatchAndInvoice from "./pages/BatchAndInvoice";
import BillTypeList from "./pages/BillTypeList";
import ClientList from "./pages/ClientList";
import Dashboard from "./pages/Dashboard";
import ImportDataForm from "./pages/ImportDataForm";
import ViewInvoice from "./pages/ViewInvoice";
import QuickLinks from "./pages/QuickLinks";
import NotFound from "./pages/NotFound";
import PaymentAdjustmentList from "./pages/PaymentAdjustmentList";
import BatchForm from "./pages/BatchForm";
import ClientDetail from "./pages/ClientDetail";

export const routes = [
  {
    path: "app",
    element: <AppLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "links", element: <QuickLinks /> },
      { path: "importdata", element: <ImportDataForm /> },

      { path: "batches", element: <BatchAndInvoice /> },
      { path: "batches/new", element: <BatchForm /> },
      { path: "batches/:id/edit", element: <BatchForm /> },

      { path: "invoices", element: <ViewInvoice /> },
      { path: "clients", element: <ClientList /> },
      { path: "clients/:id/detail", element: <ClientDetail /> },

      { path: "billtypes", element: <Navigate to="/app/billtypes/epo" /> },
      {
        path: "billtypes/:billtypename",
        element: <BillTypeList mode="list" />,
      },
      {
        path: "billtypes/:billtypename/new",
        element: <BillTypeList mode="new" />,
      },
      {
        path: "billtypes/:billtypename/:billtypeid/edit",
        element: <BillTypeList mode="edit" />,
      },

      {
        path: "paymentadjustments",
        element: <Navigate to="/app/paymentadjustments/payments" />,
      },
      {
        path: "paymentadjustments/:type",
        element: <PaymentAdjustmentList mode="list" />,
      },
      {
        path: "paymentadjustments/:type/new",
        element: <PaymentAdjustmentList mode="new" />,
      },
      {
        path: "paymentadjustments/:type/:typeid/edit",
        element: <PaymentAdjustmentList mode="edit" />,
      },

      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    children: [
      { path: "/", element: <Navigate to="/app/links" /> },
      { path: "app", element: <Navigate to="/app/links" /> },
      { path: "404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];
