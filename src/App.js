import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "react-toastify/dist/ReactToastify.css";
import First from "./Pages/First";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./Pages/Home";
import "react-toastify/dist/ReactToastify.css";
import setAuthToken from "./utils/setAuthToken";
import { ToastContainer, toast } from "react-toastify";
import Admin from "./Pages/Admin";
import Forgot from "./Pages/Forgot";
import ResetPassword from "./Pages/ResetPassword";
import Sites from "./Pages/Sites";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const publicUrl = ["/", "/login", "/register"];

const App = () => {
  const auth = useSelector((store) => store.auth);
  let url = window.location.pathname;
  if (!auth.isAuthenticated) {
    for (let i = 0, n = publicUrl.length; i < n; i++) {
      if (url != publicUrl[i]) window.location.href = "/";
      break;
    }
  }

  return (
    <>
      <Router>
        <GoogleOAuthProvider clientId="985831163230-p8ikof87hp64oef10m3b9o7cdjb1gb3q.apps.googleusercontent.com">
          <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgot" element={<Forgot />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/reset/:token" element={<ResetPassword />} />

            <Route exact path="/" element={<First />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/admin" element={<Admin />} />

            <Route exact path="/sites" element={<Sites />} />
          </Routes>
        </GoogleOAuthProvider>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
