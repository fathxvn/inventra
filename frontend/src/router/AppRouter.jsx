import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Items from "../pages/Items";
import ItemDetail from "../pages/ItemDetail";
import MyRequests from "../pages/MyRequests";

import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminItems from "../pages/admin/AdminItems";
import AdminBorrowRequests from "../pages/admin/AdminBorrowRequests";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import ProtectedRoute from "../routes/ProtectedRoute";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  // Default Route
  {
    path: "/",
    element: <Login />,
  },

  // Auth
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  // User
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <MainLayout>
          <Dashboard />
        </MainLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/items",
    element: (
      <MainLayout>
        <Items />
      </MainLayout>
    ),
  },
  {
    path: "/items/:id",
    element: (
      <MainLayout>
        <ItemDetail />
      </MainLayout>
    ),
  },
  {
    path: "/my-requests",
    element: (
      <MainLayout>
        <MyRequests />
      </MainLayout>
    ),
  },

  // Admin
  {
    path: "/admin/dashboard",
    element: (
      <AdminLayout>
        <AdminDashboard />
      </AdminLayout>
    ),
  },
  {
    path: "/admin/items",
    element: (
      <AdminLayout>
        <AdminItems />
      </AdminLayout>
    ),
  },
  {
    path: "/admin/borrow-requests",
    element: (
      <AdminLayout>
        <AdminBorrowRequests />
      </AdminLayout>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;