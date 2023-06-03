import Caraousel from "./Components/Caraousel";
import Navbar from "./Components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Places from "./Components/Places";
import Home from "./Components/Home"
function App() {
  return (
  <>
   <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path={"/places"} element={<Places></Places>}></Route>
    <Route path={"/home"} element={<Home></Home>}></Route>
   </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;
