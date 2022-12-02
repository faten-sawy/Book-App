import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import BookDetails from "./Pages/Details";
import NotFound from "./Pages/NotFound";
import NavBar from "./Components/NavBar";
function App() {
 
  return (
    <div className="App">
    <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/book-details/:id" element={<BookDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
