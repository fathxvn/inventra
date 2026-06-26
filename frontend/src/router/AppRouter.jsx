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
import ProtectedRoute from "../components/ProtectedRoute";

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
      <ProtectedRoute>
        <MainLayout>
          <Items />
        </MainLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/items/:id",
    element: (
      <ProtectedRoute>
        <MainLayout>
          <ItemDetail />
        </MainLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/my-requests",
    element: (
      <ProtectedRoute>
        <MainLayout>
          <MyRequests />
        </MainLayout>
      </ProtectedRoute>
    ),
  },

  // Admin
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminDashboard />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/items",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminItems />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/borrow-requests",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <AdminBorrowRequests />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
]);

export default router;
