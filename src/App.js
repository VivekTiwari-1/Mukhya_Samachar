
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  
    state = {
        progress : 0
    }
    setProgress = (progress) => {
        this.setState({progress : progress})
    }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={2}
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />

          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pagesize={20} country={'in'} category={'general'} />} />
            {/* <Route exact path="/business"><News setProgress={this.setProgress} key="business" pagesize={20} country={'in'} category={'business'} /></Route> --> Wrong Syntax for Routes*/}
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pagesize={20} country={'in'} category={'business'} />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pagesize={20} country={'in'} category={'health'} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pagesize={20} country={'in'} category={'technology'} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pagesize={20} country={'in'} category={'science'} />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pagesize={20} country={'in'} category={'sports'} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pagesize={20} country={'in'} category={'entertainment'} />} />
          </Routes>

        </Router>
      </div>
    )
  }
}

