import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Home } from "./components/Home"
import StudentRegistration from "./pages/StudentRegistration"
function App() {
  return(
    <>
      {/* <Navbar></Navbar> */}
      <Navbar/>
      <StudentRegistration />
      <Home/>
      <Footer/>
      
    </>
  )
}

export default App
