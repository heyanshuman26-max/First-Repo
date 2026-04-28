
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Cursor from "./components/Cursor";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Cursor />
      <div className="noise-layer" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
