import { Login } from './pages/Login/Login';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { RightSideBar } from './components/RightSideBar/RightSideBar';
import { HomePage } from './pages/HomePage/HomePage';

const Layout = (() => {
  return <div className="app">
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="maincontainer">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="outlet">
        <Outlet />
      </div>
    </div>

    <div className="rightSidebar">
      <RightSideBar />
    </div>

  </div>
})
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
