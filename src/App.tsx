import React from 'react';
import './App.css';
import AddColorForm from "./components/AddColorForm/AddColorForm";
import ColorList from "./components/ColorList/ColorList";

function App() {
  return (
    <div className="App">
        <AddColorForm/>
        <ColorList/>
    </div>
  );
}

export default App;
