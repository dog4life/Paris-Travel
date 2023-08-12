import Caraousel from "./Components/Caraousel";
import Navbar from "./Components/Navbar";
import {BrowserRouter,HashRouter, Routes, Route} from "react-router-dom"
import Places from "./Components/Places";
import Home from "./Components/Home"
import Footer from "./Components/Footer";
import Contact from "./Components/Contact"
import About from "./Components/About"
function App() {
  return (
  <>
   <HashRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path={"/places"} element={<Places></Places>}></Route>
    <Route path={"/"} element={<Home></Home>}></Route>
    <Route path={"/contact"} element={<Contact></Contact>}></Route>
    <Route path={"/about"} element={<About></About>}></Route>
   </Routes>
   <Footer></Footer>
   </HashRouter>
  </>
  );
}

export default App;
