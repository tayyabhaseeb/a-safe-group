import React from "react";
import Header from "./components/Header";

import Card from "./components/Card";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center font-serif flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <Header />
      <Card />
    </div>
  );
}

export default App;
