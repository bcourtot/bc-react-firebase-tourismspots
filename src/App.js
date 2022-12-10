import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import List from "./components/pages/spots/List";
import MySpots from './components/pages/spots/MySpots';
import Create from "./components/pages/spots/Create";
import Layout from "./components/layout/Layout";
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';

export default function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="spots" element={<List />} />
          <Route path="myspots" element={<MySpots />} />
          <Route path="create" element={<Create />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}