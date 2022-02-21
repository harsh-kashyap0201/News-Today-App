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
            <Route path="/home" element={<News key="general" category="general" country="in"/>}/>
            <Route path="/business" element={<News key="business" category="business" country="in"/>}/>
            <Route path="/entertainment" element={<News key="entertainment" category="entertainment" country="in"/>}/>
            <Route path="/health" element={<News key="health" category="health" country="in"/>}/>
            <Route path="/science" element={<News key="science" category="science" country="in"/>}/>
            <Route path="/sports" element={<News key="sports" category="sports" country="in"/>}/>
            <Route path="/technology" element={<News key="technology" category="technology" country="in"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
