import logo from './logo.svg';
import './App.css';
import Ajout from './store/Ajout.js'
import Affichage from './store/Affichage.js'
import Modif from './store/Modif.js'
import { Form, Input, Button, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
     <Router>
           <div>
               <Switch>
                  <Route path="/Ajout">
                    <Ajout />
                   </Route>
                   <Route path="/Affichage">
                      <Affichage />
                   </Route>
                   <Route path="/Modif/:id">
                       < Modif />
                   </Route>
                   
               </Switch>
            </div> 
     </Router>
  );
}

export default App;