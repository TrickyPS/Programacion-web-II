import { BrowserRouter,Routes,Route, Navigate  } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Question from "./pages/Question";
import ViewNews from "./pages/ViewNews";
import SeeNews from "./pages/SeeNews";
import SeeProfile from "./pages/SeeProfile";
import './index.css';
import { UserProvider } from "./context/userContext";
import { PrivateRoute } from "./components/Layout/PrivateRoute";
import AddCategory from "./pages/addCategory";
import {StorageProvider,FirebaseAppProvider} from "reactfire";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SeeQuestion from "./pages/SeeQuestion";
import ReportesPage from "./pages/ReportesPage";
import { PrivateRouteAdmin } from "./components/Layout/PrivateRouteAdmin";

const firebaseConfig = {
  apiKey: "AIzaSyB2NcVEvk_wsNWqqbn8Xyn2VgIXbINdR0Q",
  authDomain: "pw2-fcfm.firebaseapp.com",
  projectId: "pw2-fcfm",
  storageBucket: "pw2-fcfm.appspot.com",
  messagingSenderId: "822957861538",
  appId: "1:822957861538:web:39adbdc25d1cf2076a45fb"
};

function App() {


  return (
 
     <UserProvider>

<ToastContainer />
       <FirebaseAppProvider firebaseConfig={firebaseConfig} >
       <Routes>
        
        <Route path="/" element={<Navigate to="/home" ></Navigate>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/News" element={<PrivateRouteAdmin><News/></PrivateRouteAdmin>} />
        <Route path="/perfil" element={<PrivateRoute><Profile/></PrivateRoute>} />
        <Route path="/question" element={<PrivateRoute><Question/></PrivateRoute>} />
        <Route path="/ViewNews" element={<ViewNews/>} />
        <Route path="/SeeNews/:id" element={<SeeNews/>} />
        <Route path="/SeeProfile/:id" element={<SeeProfile/>} />
        <Route path="/SeeQuestion/:id" element={<SeeQuestion/>} />
        <Route path="/addCategory" element={<PrivateRouteAdmin><AddCategory/></PrivateRouteAdmin>} />
        <Route path="/reportes" element={<PrivateRoute><ReportesPage/></PrivateRoute>} />
        <Route path="/*" element={<Navigate to="/home"></Navigate>} />
      </Routes>
       </FirebaseAppProvider>
     </UserProvider>
   
  );
}

export default App;
