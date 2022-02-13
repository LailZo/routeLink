import About from "./view/components/pages/about/About";
import Product from "./view/components/pages/about/Product";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/about" element={<About/>} />

        <Route path=":productId" element={<Product />} />


    </Routes>
  </BrowserRouter>,
  rootElement
);