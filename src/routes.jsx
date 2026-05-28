import { createHashRouter } from 'react-router-dom'

import App from './App'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import FirstAccess from './pages/FirstAccess'
import Destinations from './pages/Destinations'
import Packages from './pages/Packages'
import Team from './pages/Team'
import Faculties from './pages/Faculties'
import ForgotPassword from './pages/ForgotPassword'
import Register from './pages/Register'

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        index: true,
        element: <Dashboard />
      },

      {
        path: 'login',
        element: <Login />
      },

      {
        path: 'first-access',
        element: <FirstAccess />
      },

      {
        path: 'team',
        element: <Team />
      },

      {
        path: 'destinations',
        element: <Destinations />
      },

      {
        path: 'packages',
        element: <Packages />
      },

      {
        path: 'faculties',
        element: <Faculties />
      },

      {
        path: 'forgot-password',
        element: <ForgotPassword />
      },

      {
        path: 'register',
        element: <Register />
      }
    ]
  }
])