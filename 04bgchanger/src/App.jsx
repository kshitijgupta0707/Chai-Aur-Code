import { useState } from "react";
import "./App.css"; // Import the external CSS file

function App() {
  let [color, setColor] = useState('olive');
  function changecolor(newcolor) {
    setColor(newcolor);
  }

  return (
    <>
      <div className="flex w-full h-screen justify-center items-center" style={{ backgroundColor: color }}>
        <div className="flex relative top-36 w-fit h-fit gap-3 px-5 py-2 bg-white rounded-full">

          <div className="px-4 py-1 rounded-full" onClick={() => changecolor('red')} style={{ backgroundColor: "red" }} >Red</div>
          <div className="px-4 py-1 rounded-full" onClick={() => changecolor('green')} style={{ backgroundColor: "green" }}>Green</div>
          <div className="px-4 py-1 rounded-full" onClick={() => changecolor('blue')} style={{ backgroundColor: "blue" }}>Blue</div>
          <div className="px-4 py-1 rounded-full" onClick={() => changecolor('olive')} style={{ backgroundColor: "olive" }}>Olive</div>
          <div className="px-4 py-1 rounded-full" onClick={() => changecolor('grey')} style={{ backgroundColor: "grey" }}>Grey</div>
          <div className="px-4 py-1 rounded-full" onClick={() => changecolor('yellow')} style={{ backgroundColor: "yellow" }}>yellow</div>
          <div className="px-4 py-1 rounded-full" onClick={() => changecolor('pink')} style={{ backgroundColor: "pink" }}>pink</div>
          <div className="px-4 py-1 rounded-full" onClick={() => changecolor('purple')} style={{ backgroundColor: "purple" }}>purple</div>
          <div className="px-4 py-1 rounded-full" onClick={() => changecolor('lavender')} style={{ backgroundColor: "lavender" }}>lavender</div>
          <div className="px-4 py-1 rounded-full" onClick={() => changecolor('white')} style={{ backgroundColor: "white" }}>white</div>
          <div className="px-4 py-1 rounded-full" onClick={() => changecolor('black')} style={{ backgroundColor: "black", color: "white" }}>black</div>

        </div>
      </div>
    </>
  );
}

export default App;
