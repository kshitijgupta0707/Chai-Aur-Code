import Card from './Components/card.jsx'
function App() {

  let myObj = {
   na: "kshitij",
   inf: "i am a front end developer"
  }
  let myArr = [1,2,3,4,5];
 
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Card name="kshtiij" information=" I am frontend coder" btnText ="Click me" someObj={myObj} />
        <Card name=" siddhant" information=" I am backended coder" btnText ="visit me" someObj={myArr} />
      </div>
    </>
  )
}

export default App
