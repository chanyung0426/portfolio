import logo from './logo.svg';
import './App.css';
import Main from './page/Main';
import GlobalStyle from './style/GlobalStyle';
import { AuthContextProvider } from './context/AuthContext';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './component/Header';

function App() {
  return (
    <>
     <AuthContextProvider>
       <GlobalStyle/>
       <Header/>
         <Routes>
           <Route path='/' element={<Main/>}/>
         </Routes>
         <Outlet/> 
     </AuthContextProvider>
    </>
  );
}

export default App;