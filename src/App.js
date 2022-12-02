import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import BookDetails from "./pages/Details";
import NotFound from "./pages/NotFound";
function App() {
 
  return (
    <div className="App">
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
