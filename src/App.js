import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

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
            <Route path="/" element={<News key="general" keyApi="537f77edb5124130939cad30859abbf7" category="general" country="in"/>}/>
            <Route path="/business" element={<News key="business" keyApi="537f77edb5124130939cad30859abbf7" category="business" country="in"/>}/>
            <Route path="/entertainment" element={<News key="entertainment" keyApi="537f77edb5124130939cad30859abbf7" category="entertainment" country="in"/>}/>
            <Route path="/health" element={<News key="health" keyApi="537f77edb5124130939cad30859abbf7" category="health" country="in"/>}/>
            <Route path="/science" element={<News key="science" keyApi="537f77edb5124130939cad30859abbf7" category="science" country="in"/>}/>
            <Route path="/sports" element={<News key="sports"  keyApi="537f77edb5124130939cad30859abbf7" category="sports" country="in"/>}/>
            <Route path="/technology" element={<News key="technology" keyApi="537f77edb5124130939cad30859abbf7" category="technology" country="in"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
