import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LocationDisplay from './pages/LocationDisplay'

import FormHook from './pages/FormHook'
import SimpleInput from './pages/SimpleInput'

import Profile from './pages/Profile'


import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'

import Params from './pages/Params'
import Form from './pages/Form'
//import Forms from './pages/Forms'

import MyComponents from './pages/MyComponents'
import ErrorFallback from './pages/ErrorFallback'
import { ErrorBoundary } from 'react-error-boundary'
import MemoParent from './pages/MemoParent'
import Formss from './pages/Formss'
import MemoComputation from './pages/MemoComputation'
import CallBackExample from './pages/CallBackExample'
import Button from './pages/Button'
import ParentComponent from './pages/ParentComponent'
function App() {

        return(
        <>
       
        {/* <Formss/>
        <FormHook/>
        <MemoParent/>
        <MemoComputation/>
        <CallBackExample/> */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <MyComponents/>
        </ErrorBoundary> 

         <ParentComponent/>
        </>
            );
        }

export default App;



//  return( 
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path='/page/:id' element={<Params/>}/>
//     </Routes>
//     </BrowserRouter>
    
//   );







 // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )



  // return(
  //   <>
  //   <LocationDisplay />
    
  //   </>
  
  // )
