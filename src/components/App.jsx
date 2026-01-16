import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout.jsx";
const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound.jsx"));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  );
}
