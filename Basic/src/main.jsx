import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <>
      <h1>I am in main.jsx file</h1>
    </>
  );
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google'
)
const anotherElement = (
  <a href="https://google.com" target='_blank'> Visit Google</a>
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* ese tum function ki tarah call kr skte ho */}
    {/* <MyApp /> */}
    {/* {MyApp()} */}
    {/* {anotherElement} */}
    <A pp />
    {reactElement}
  </React.StrictMode>,
)
