
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<News key="general" pagesize={20} country={'in'} category={'general'} />}/>
            {/* <Route exact path="/business"><News key="business" pagesize={20} country={'in'} category={'business'} /></Route> --> Wrong Syntax for Routes*/}
            <Route exact path="/business" element={<News key="business" pagesize={20} country={'in'} category={'business'} />} />
            <Route exact path="/health" element={<News key="health" pagesize={20} country={'in'} category={'health'} />} />
            <Route exact path="/technology" element={<News key="technology" pagesize={20} country={'in'} category={'technology'} />} />
            <Route exact path="/science" element={<News key="science" pagesize={20} country={'in'} category={'science'} />} />
            <Route exact path="/sports" element={<News key="sports" pagesize={20} country={'in'} category={'sports'} />} />         
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={20} country={'in'} category={'entertainment'} />} />
          </Routes>

        </Router>
      </div>
    )
  }
}

