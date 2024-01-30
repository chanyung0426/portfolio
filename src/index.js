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
import WhatsNew from './page/WhatsNew';
import Story from './page/Story';
import Recruit from './page/Recruit';
import UploadProduct from './page/UploadProduct';
import CategoryPages from './page/CategoryPages';
import ProductDetail from './page/ProductDetail';
import Search from './component/Search';

import Delivery from './page/Delivery';
import DriveThru from './page/DriveThru';
import Inquiry from './page/Inquiry';
import Promotion from './page/Promotion';
import BrandStory from './page/BrandStory';
import McdonaldList from './api/McdonaldList';
import Facebook from './component/Facebook';


const routes = createBrowserRouter([
  {
    path : '/',
    element  : <App/>,
    errorElement : <NotFound/>,

    children : [
      
      {path:'/products', element : <Menu/>},
      {path:'/store', element : <Store/>},
      {path:'/new', element : <WhatsNew/>},
      {path:'/story', element : <Story/>},
      
      {path:'/renter', element : <Inquiry/>},
      {path:'/recruit', element : <Recruit/>},

      //store 서브 페이지
      {path:'/store/find', element: <McdonaldList/>},
      {path:'/store/delivery', element: <Delivery /> },
      {path:'/store/drive-thru', element: <DriveThru /> },
      {path:'/store/inquiry', element: <Inquiry /> },

      //what's new 서브 페이지
      {path:'/new/promotion', element: <Promotion/>},
      {path:'/new/news', element: <NotFound/>},
      {path:'/new/happymeal', element: <NotFound/>},
      
      //story 서브페이지
      {path:'/story/brand', element: <BrandStory/>},

      //sns
  
      
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
