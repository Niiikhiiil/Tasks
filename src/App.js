import React,{createContext, Suspense} from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Faq from './components/Faq'
import Home from './components/Home'
import Task2 from './components/Task2'
import Task3 from './components/Task3'


//task 4 :create lazy load component with context API
export const AppContext=createContext();
const Navbar = React.lazy(()=>import('./components/Navbar'));


const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Suspense fallback={<div>Loading....</div>}><AppContext.Provider value="TasksAPK"><Navbar/></AppContext.Provider></Suspense>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/task2" element={<Task2/>}/>
      <Route path="/task3" element={<Task3/>}/>
    </Routes>
   
    </BrowserRouter>
    </>
  )
}
export default App