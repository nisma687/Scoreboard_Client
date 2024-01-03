import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-auto max-w-6xl'>
    <AuthProvider>
    <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
    </AuthProvider>
  </div>
)
