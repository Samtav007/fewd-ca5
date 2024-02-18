import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Book from "./components/Book";
import NavBar from "./components/NavBar";

function App() {
  const [searchedValue, setSearchedValue] = useState("");
  return (
    <>
      <NavBar setSearchedValue={setSearchedValue} />
      <Routes>
        <Route path="/" element={<Book search={searchedValue} />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
      
      <footer>
        <p className="info">Designed and Developed By -<a href="">Samarth Sehgal</a> </p>
      </footer>
    </>
  );
}

export default App;
