import { useCallback, useEffect, useRef, useState } from "react";


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //use reference hoook
  const passwordReference = useRef(null);

  function getRandomCharFromString(str) {
    // Generate a random index within the range of the string's length
    var randomIndex = Math.floor(Math.random() * str.length);
    // Return the character at the random index
    return str.charAt(randomIndex);
  }

  const passwordGenerator = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numberAllowed) {
        str += "1234567890";
      }
      if (charAllowed) {
        str += "!@#$%^&*()_+-+{}[]|"
      }
      for (let i = 0; i < length; i++) {
        let char = getRandomCharFromString(str);
        pass += char;
      }
      setPassword(pass);
    }
    , [length, numberAllowed, charAllowed, setPassword])






const handleClick = () => alert("Button pressed");


  function copyPasswordToTheClipBoard() {
    // window.navigator.clipboard.writeText(password);
    passwordReference.current.focus();
    passwordReference.current.addEventListener('click', handleClick);

    // passwordReference.current?.select();
    //  passwordReference.current?.setSelectionRange(0, 5); 
  }

  useEffect(() => passwordGenerator(), [length, numberAllowed, charAllowed, passwordGenerator]);


  return (
    <>


      <div className="w-3/5 bg-gray-800 mx-auto p-5  rounded-xl ">

        <h1 className="text-white text-center " >Password Generator</h1>
        <div className=" w-3/4 mx-auto  mt-2 mb-4" >
          <input className="  w-4/5 rounded-lg m-auto py-1 px-3"
            type="text"
            placeholder="Password"
            value={password}
            ref={passwordReference}
            readOnly />

          <button onClick={copyPasswordToTheClipBoard} className=" p-1 px-4 ml-3 bg-blue-700 rounded-xl">Copy</button>

        </div>

        <div className="flex justify-evenly  text-orange-500">

          <div>
            <input type="range"
              max={100}
              min={6}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label> Length: {length} </label>
          </div>


          <div className="flex  items-center">
            <input className="w-5 h-5"
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label className=" px-1" htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex  items-center">
            <input className="w-5 h-5"
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label className=" px-1" htmlFor="charInput">Characters</label>
          </div>



        </div>

      </div>

    </>
  );
}

export default App;
