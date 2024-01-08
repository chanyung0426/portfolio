import logo from './logo.svg';
import './App.css';
import Main from './page/Main';
import Search from './component/Search';
import GlobalStyle from './style/GlobalStyle';
import { AuthContextProvider } from './context/AuthContext';
import { Outlet, Route, Routes } from 'react-router-dom';
import AllProduct from './page/AllProduct';

function App() {
  return (
    <>
     <AuthContextProvider>
       <GlobalStyle/>
       <Main/>
       <Search/>
       <Routes>
        <Route path='/products/detail/:id' element={<AllProduct/>}/>
       
       </Routes>  
       
       <Outlet/>
     </AuthContextProvider>
    </>
  );
}

export default App;
