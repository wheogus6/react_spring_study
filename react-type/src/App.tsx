import React from 'react';
import './assets/css/App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Header from "./components/Header";
import AllRoutes from "./routes/AllRoute";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                { AllRoutes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </>
    );
}

export default App;
