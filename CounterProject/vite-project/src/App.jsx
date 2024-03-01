import { useState, useEffect } from "react";
function App() {

    let [counter, setCounter] = useState(15);

    function increaseValue() {
        if (counter == 20) {
            console.log("values can not go above 20");
            return;
        }


        counter++;

        //iske andar updated values he jati hain bs jo ki set krni hain tumahh

        setCounter(counter);
        console.log("Increased the value to ", counter);

    }
    function decreaseValue() {
        if (counter == 0) {
            console.log("values can not go below 0");
            return;
        }
        counter--;
        setCounter(counter);
        console.log("Decreased the value to ", counter);
    }

    return (
        <>
            <h1>Chai - aur - React</h1>
            <h2>Counter Value: {counter}</h2>
            <button onClick={increaseValue}>Increase Value {counter}</button>
            <br /> <br />
            <button onClick={decreaseValue}>Decrease Value {counter}</button>
        </>
    )
}

export default App
