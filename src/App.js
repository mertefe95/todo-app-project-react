import React from 'react';
import Form from "./components/Form";
import Tailwindcss from "./assets/tailwind.css";

function App() {
  return (
    <div className="app h-screen">
      <header>
        <h1 className="text-center pt-20">Mert's Todo List</h1>
      </header>
      <Form />
    </div> 
  );
}

export default App;
