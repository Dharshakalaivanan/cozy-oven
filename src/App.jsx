 
 import Home from "./pages/Home";
 import Explore from "./pages/Explore";
 import {BrowserRouter, Routes, Route} from 'react-router-dom';
 import Footer from "./components/Footer";
import DryCakes from "./pages/DryCakes";
import CupCakes from "./pages/CupCakes";
 import Muffins from "./pages/Muffins";
 import Cookies from "./pages/Cookies";
 import BirthdayCakes from "./pages/BirthdayCakes";
 import Breads from "./pages/Breads";
 import Pizza from "./pages/Pizza";
  import BreakfastSeries from "./pages/BreakfastSeries";
  import CheeseCake from "./pages/CheeseCake";
 export default function App(){

  return(
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/explore' element={<Explore />}></Route>
    <Route path="/dry-cakes" element={<DryCakes />} />
       <Route path="/cupcakes" element={<CupCakes />} />
        <Route path="/muffins" element={<Muffins />} />
         <Route path="/cookies" element={<Cookies />} />
          <Route path="/birthday-cakes" element={<BirthdayCakes />} />
         <Route path="/breads" element={<Breads />} />
          <Route path="/pizza" element={<Pizza />} />
         <Route path="/breakfast-series" element={<BreakfastSeries />} />
         <Route path="/cheese-cake" element={<CheeseCake />} />
   </Routes>
   <Footer/>
   </BrowserRouter>
  
  )

}