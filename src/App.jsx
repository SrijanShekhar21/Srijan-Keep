import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Body from "./components/Body/Body.jsx";

function App() {
  return (
    <div className="screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
