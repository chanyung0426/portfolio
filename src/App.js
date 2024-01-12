import logo from './logo.svg';
import './App.css';
import Main from './page/Main';
import GlobalStyle from './style/GlobalStyle';
import { AuthContextProvider } from './context/AuthContext';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
     <AuthContextProvider>
       <GlobalStyle/>
       <Main/>
       <Outlet/>
     </AuthContextProvider>
    </>
  );
}

export default App;
