import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import Login from "../src/pages/Login"
import Signup from "../src/pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "../src/pages/ForgotPassword"
import UpdatePassword from "../src/pages/UpdatePassword"


function App() {
  return (
      <div className=" w-screen min-h-screen  bg-blue-800 flex flex-col ">
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home></Home>}> </Route>
            <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
            <Route
                  path="login"
                  element={
                    <OpenRoute>
                      <Login />
                    </OpenRoute>
                  }
            />
          <Route
              path="verify-email"
              element={
                <OpenRoute>
                  <VerifyEmail />
                </OpenRoute>
              }
            />  

        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />  

          <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />  


          </Routes>
      </div>
  );
}

export default App;
