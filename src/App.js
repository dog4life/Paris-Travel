import Caraousel from "./Components/Caraousel";
import Navbar from "./Components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Places from "./Components/Places";
import Home from "./Components/Home"
import Footer from "./Components/Footer";
import Contact from "./Components/Contact"
function App() {
  return (
  <>
   <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path={"/places"} element={<Places></Places>}></Route>
    <Route path={"/"} element={<Home></Home>}></Route>
    <Route path={"/contact"} element={<Contact></Contact>}></Route>
   </Routes>
   <Footer></Footer>
   </BrowserRouter>
  </>
  );
}

export default App;
