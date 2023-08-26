import './App.css'
import Front from './Components/Front/Front'
import Navbar from './Components/Navbar/Navbar'
import About from "./Components/About/About"
import Project from './Components/Project/Project'
import {Routes ,Route} from 'react-router-dom';
import Footer from "./Components/Footer/Footer"
import Certify from './Components/Certify/Certify'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <>
     
     <Routes>
      <Route path="/" element={<>
      <Navbar></Navbar>
             <Front></Front>
     <About></About>
     <Project></Project>
     <Contact></Contact>
     <Footer></Footer>
      </>}></Route>
      <Route path='/certification' element={<Certify/>}></Route>
     </Routes>
    </>
  )
}

export default App
