import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/navbar/navbar";
import PageContainer from "./containers/PageContainer"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import Like from "./pages/Like";

function App() {
  return (
    <div className="App">
     <PageContainer>
      <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:id" element={<Detail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/likeData" element={<Like/>}/>
        <Route path="/prodycts/:search" element={<Search/>}/>
      </Routes>
    </Router>
    </PageContainer>
    </div>
  );
}

export default App;
