import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//css
import './index.css';

//컴포넌트
import App from './App';
import NotFound from './page/NotFound';
import Menu from './page/Menu';
import Store from './page/Store';
import New from './page/Store';
import Story from './page/Story';
import Renter from './page/Renter';
import Recruit from './page/Recruit';
import Language from './page/Language';
import UploadProduct from './page/UploadProduct';
import CategoryPages from './page/CategoryPages';
import ProductDetail from './page/ProductDetail';
import Search from './component/Search';
import Kakao from './component/Kakao';

import Delivery from './page/Delivery';
import DriveThru from './page/DriveThru';
import Inquiry from './page/Inquiry';


const routes = createBrowserRouter([
  {
    path : '/',
    element  : <App/>,
    errorElement : <NotFound/>,

    children : [
      
      {path:'/products', element : <Menu/>},
      {path:'/store', element : <Store/>},
      {path:'/new', element : <New/>},
      {path:'/story', element : <Story/>},
      
      //새로운 컴포넌트들 추가
      {path:'/store/find', element: <Kakao/>},
      { path: '/store/delivery', element: <Delivery /> },
      { path: '/store/drive-thru', element: <DriveThru /> },
      { path: '/store/inquiry', element: <Inquiry /> },

      {path:'/renter', element : <Renter/>},
      {path:'/recruit', element : <Recruit/>},
      {path:'/lang', element : <Language/>},
      
      {path:'/products/detail/:id', element : <ProductDetail/>},
      {path:'/products/:category', element : <CategoryPages/>},

      {path:'/searchresult', element:<Search/>},
   
      {path:'/product/upload', element : <UploadProduct/>}

    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={routes}/>
  
  </React.StrictMode>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
