import './App.scss';
import Aside from './components/aside/Aside.jsx';
import Landing from './components/carousel/Landing.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import React from "react";

function App() {
  return (
    <>
      <Header />
      <Aside />
      <Landing />
      <Main />
      <Footer />
    </>
  );
}
export default App;
