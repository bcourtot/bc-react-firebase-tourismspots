import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import List from "./components/pages/spots/List";
import Create from "./components/pages/spots/Create";
import Update from "./components/pages/spots/Update";
import Layout from "./components/layout/Layout";


export default function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="spots" element={<List />} />
          <Route path="create" element={<Create />} />
          <Route path="update" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}