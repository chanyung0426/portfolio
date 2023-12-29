import logo from './logo.svg';
import './App.css';
import Main from './page/Main';
import Menu from './component/Menu';
import { Route, Routes } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Search from './component/Search';

function App() {
  return (
    <>
    
      <Main/>
       <Search/>
       
    </>
  );
}

export default App;
