import "./App.css";
import Box from "./main_page/Box";
import Home from "./get_started/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main_page" element={<Box />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
