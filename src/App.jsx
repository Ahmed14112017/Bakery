import Navbar from "./component/Navbar"
import "../src/App.css"
import Home from "./component/Home"
import About from "./component/About"
import Recipes from "./component/Recipes"
import Testymonials from "./component/Testymonials"
import Contact from "./component/Contact"
export default function App() {
  return (
   <div className="w-full h-auto">
     <Navbar />
     <div>
      <Home />
      <About />
      <Recipes />
      <Testymonials/>
      <Contact />
     </div>
     </div>
  )
}