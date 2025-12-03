import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
}
