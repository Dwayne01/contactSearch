import React from 'react';
import './App.scss';
import Header from './components/Header';
import Search from './components/Search';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PlaceHolder from './components/PlaceHolder';
import Result from './components/Result'

function App() {
  return (
    <div className="App">
       <Header />
       <Search />
       <Footer/>
    </div>
  );
}

export default App;
