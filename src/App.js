import logo from './logo.svg';
import './App.css';
import Main from './page/Main';
import { Route, Routes } from 'react-router-dom';
import Search from './component/Search';
import GlobalStyle from './style/GlobalStyle';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>
       <GlobalStyle/>
       <Main/>
       <Search/>
       
    
      </AuthContextProvider>
    </>
  );
}

export default App;
