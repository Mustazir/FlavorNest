import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  
  Route,
  RouterProvider,
} from "react-router-dom";
import { router } from './Routs/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
  </StrictMode>,
)
