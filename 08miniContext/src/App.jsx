
import React from "react"
import UserContextProvider from "./context/UserContextProvider"
import Login from "./Component/Login/Login"
import Profile from "./Component/Profile/Profile"
function App() {

  return (
    <>
      <UserContextProvider>

        <h1>React with Chai</h1>
        <Login />
        <Profile />

      </UserContextProvider>
    </>
  )
}

export default App
