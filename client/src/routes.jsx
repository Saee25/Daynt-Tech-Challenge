import { Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import ProtectedRoute from './guards/ProtectedRoute';

export const routes = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/',
    element: <Navigate to="/login" />
  }
];