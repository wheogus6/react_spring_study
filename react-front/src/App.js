import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from "./Home";
import About from "./About";
import Counter from "./Counter"
import Input from "./Input"
import Input2 from "./Input2"
import List from "./List"
import Test from "./Test"

function App() {
  return (
      //className ==> 나중에 class로 변경
    <div className="App">
        <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/input2">Input2</Link>
            | <Link to="/list">List</Link> | <Link to="/test">Test</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/input" element={<Input />} />
          <Route path="/input2" element={<Input2 />} />
          <Route path="/list" element={<List />} />
          <Route path="/test" element={<Test />} />
        </Routes>
    </div>
  );
}

export default App;
