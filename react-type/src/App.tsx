import React from 'react';
import './assets/css/App.css';
// import {Routes, Route, Link} from 'react-router-dom'
// import Home from "./pages/Home";
// import Counter from "./pages/Counter"
// import Input from "./pages/Input"
// import Input2 from "./pages/Input2"
// import List from "./pages/List"
// import Test from "./pages/Test"
import Header from "./components/Header";
import ProductList from "./pages/ProductList";

function App() {
  return (
      //className ==> 나중에 class로 변경
      // <div className="App">
      //   <nav>
      //     <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/input2">Input2</Link>
      //     | <Link to="/list">List</Link> | <Link to="/test">Test</Link>
      //   </nav>
      //   <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="/counter" element={<Counter />} />
      //     <Route path="/input" element={<Input />} />
      //     <Route path="/input2" element={<Input2 />} />
      //     <Route path="/list" element={<List />} />
      //     <Route path="/test" element={<Test />} />
      //   </Routes>
      // </div>
      <>
          <Header />
          <ProductList />
      </>
  );
}

export default App;
