import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

//css
import './index.css';

//컴포넌트
import NotFound from './page/NotFound';
import Menu from './component/Menu';
import Store from './component/Store';
import New from './component/Store';
import Story from './component/Story';
import Renter from './component/Renter';
import Recruit from './component/Recruit';
import Language from './component/Language';
import UploadProduct from './page/UploadProduct';

const router = createBrowserRouter([
  {
    path : '/',
    element  : <App/>,
    errorElement : <NotFound/>,

    children : [
      
      {path:'/menu', element : <Menu/>},
      {path:'/store', element : <Store/>},
      {path:'/new', element : <New/>},
      {path:'/story', element : <Story/>},

      {path:'/renter', element : <Renter/>},
      {path:'/recruit', element : <Recruit/>},
      {path:'/lang', element : <Language/>},
 
      {
        path: '/product/upload',
        element :
        
        <UploadProduct/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
