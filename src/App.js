import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Xflood from './Xflood/Xflood';
import AirX from './AirX/AirX';
import TrashX from './TrashX/TrashX';
import Xground from './Xground/Xground';
import TentangAlat from './TentangAlat/TentangAlat';
import ProfilTim from './ProfilTim/ProfilTim';
import Faq from './Faq/Faq';
import CaraKerja from './CaraKerja/CaraKerja';
import StatusWilayah from './StatusWilayah/StatusWilayah';
import './App.css';

function App() {
  return (
    <div>

      <Router>
        <div className="App">
            <Route exact path="/" component={Home} />
              <Route path="/xflood/:lokasi" component={Xflood} />
              <Route path="/airx/:lokasi" component={AirX} />
              <Route path="/trashx/:lokasi" component={TrashX} />
              <Route path="/xground/:lokasi" component={Xground} />
              <Route path="/tentangalat/" component={TentangAlat} />
              <Route path="/profiltim/" component={ProfilTim} />
              <Route path="/faq/" component={Faq} />
              <Route path="/carakerja/" component={CaraKerja} />
          
        </div>
        <Nav />
      </Router>

      
      <StatusWilayah />
    </div>
  );
}

export default App;