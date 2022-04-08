import { BrowserRouter,Routes,Route  } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Question from "./pages/Question";
import ViewNews from "./pages/ViewNews";
import SeeNews from "./pages/SeeNews";
import SeeProfile from "./pages/SeeProfile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/News" element={<News/>} />
        <Route path="/perfil" element={<Profile/>} />
        <Route path="/question" element={<Question/>} />
        <Route path="/ViewNews" element={<ViewNews/>} />
        <Route path="/SeeNews" element={<SeeNews/>} />
        <Route path="/SeeProfile" element={<SeeProfile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
