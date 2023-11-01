import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarB from "../src/Components/NavbarB/NavbarB";
import ItemListContainer from "../src/Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../src/Components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "../src/Components/Error404/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarB />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
