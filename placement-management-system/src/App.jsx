import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Home } from "./pages/Home";
import { Route,Routes } from "react-router-dom";
import Company from "./components/Company";
import Student from "./components/Student";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
// import StudentRegistration from "./pages/StudentRegistration"
function App() {
  return(
    <>
      {/* <Navbar></Navbar> */}
      <Navbar/>
      <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path="/companies" element={<Company/>}></Route>
           <Route path="/student" element={<Student/>}></Route>
           <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}></Route>
           <Route path="/login" element={<Login/>}></Route>

           {/* <Route path="/students" element={<StudentCard/>}/> */}
      </Routes>

      <Footer/>
      
    </>
  )
}

export default App

