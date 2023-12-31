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



const routes = createBrowserRouter([
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
      
      {path:'/products/detail/:id', element : <ProductDetail/>},
      {path:'/products/:category', element: <CategoryPages/>},
 
      {
        path: '/product/upload',
        element : <UploadProduct/>
      }

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
