import React from "react";
import './styles/App.css'
import Header from "./pages/layout/Header.jsx";
import Nav from "./pages/layout/Nav.jsx";
import Footer from "./pages/layout/Footer.jsx";

function App() {


  return (
    <>
      <Header />
      <Nav />
      {/*<Main />*/}
      {<Footer />}
    </>
  )
}

export default App
