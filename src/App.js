
import { useState } from 'react';
import './App.css';
import StudentAdd from './components/StudentAdd';
import StudentUpdate from './components/StudentUpdate'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/update/:id' Component={StudentUpdate} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
