import React from "react";
import Nav from "./Nav";
import { Route, BrowserRouter, Routes , Link} from "react-router-dom";

import HotDog from './components/HotDog'
import DevilDog from './components/DevilDog'
import Vending from "./components/VendingMachine";
import Angel from './components/AngelFood'


function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Nav />
        <h1>Welcome to Ed's Vending Machine</h1>
      <h2>Here's what we have today</h2>

        <li><a href= "/devil-dog" >Devil Dog </a></li>
        <li><a href="/angel">Angel Food Cake</a></li>
        <li><a href="/hot-dog">Hot Dogs</a></li>
        
        <Routes>
        <Route path="/" alt="vending" element={<Vending />} />
          <Route path="/hot-dog" alt="dogs" element={<HotDog />} />
          <Route path="/devil-dog" alt="devil" element={<DevilDog />} />
          <Route path="/angel" alt="angel" element={<Angel />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


