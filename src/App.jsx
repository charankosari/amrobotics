import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Aboutus from "./components/Aboutus/Aboutus";
import Service from "./components/Services/Services";
import Marketplace from "./components/Marketplace/Marketplace";
import SpecificProduct from "./components/MarketPlace/SpecificProduct";
import Blogs from "./components/Blog/Blogs";
import IndividualBlog from "./components/Blog/SpecificBlog";
import SignupPage from "./components/LoginAndSignup/SignupPage";
import Login from "./components/LoginAndSignup/Login";
import Profile from "./components/Profile/Profile";
import Cart from "./components/profileTabsDetailview/cart";
import Checkmail from "./components/LoginAndSignup/checkmail.jsx";
import GmailAccountPage from "./components/LoginAndSignup/gmailRedirect.jsx";
import ResetPasswordFunc from "./components/LoginAndSignup/resetPass.jsx";
import RequireAuth from "./RequireAuth.jsx";
import Unauthorized from "./Unauthorized.jsx";
import Adminpage from "./ProtectedRoutes/Adminpage.jsx";
// import AdminPanel from "./ProtectedRoutes/AdminPanel.jsx";
// import Adminusers from "./ProtectedRoutes/Adminusers.jsx";
// import AdminProducts from "./ProtectedRoutes/AdminProducts.jsx";
// import Adminorders from "./ProtectedRoutes/Adminorders.jsx";
import SuccessPage from './components/success.jsx'
import RequireLogin from './RequireLogin.jsx'
import Checkout from "./components/profileTabsDetailview/checkout.jsx"
// import AdminSidebar from "./ProtectedRoutes/AdminSidebar.jsx";
import { Sidebar } from "./ProtectedRoutes/Sidebar.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Service />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/:id" element={<SpecificProduct />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<IndividualBlog />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/forgotpassword" element={<Checkmail />} />
          <Route path="/gmailredirect" element={<GmailAccountPage />} />
          <Route path="/resetpassword/:id" element={<ResetPasswordFunc />} />
          <Route element={<RequireLogin  />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/success" element={<SuccessPage/>} />

          </Route>

          <Route element={<RequireAuth allowedRoles={["admin"]} />}>
            <Route path="/admin" element={<Adminpage />} />
            <Route path="/adminpanel" element={<Sidebar />} />
       
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;