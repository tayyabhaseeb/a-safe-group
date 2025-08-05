import React from "react";
import Header from "./components/Header/Header";

import Card from "./components/Card/Card";

function App() {
  return (
    <main
      className="min-h-screen bg-cover bg-center font-serif flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <Header />
      <Card />
    </main>
  );
}

export default App;
