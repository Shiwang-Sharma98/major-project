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
import About from "./pages/About";
import Contact from "../src/pages/Contact"
import PrivateRoute from "../src/components/core/Auth/PrivateRoute"
import Dashboard from "../src/pages/Dashboard"
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from "./components/core/Dashboard/Settings";
import { ACCOUNT_TYPE } from "./utils/constants";
import AddCourse from "../src/components/core/Dashboard/AddCourse"
import { useSelector } from "react-redux";
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse";




function App() {
  
  const { user } = useSelector((state) => state.profile)
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

        <Route
          path="/about"
          element={
            
              <About />
            
          }
        />

        <Route
          path="/about"
          element={
            
              <About />
            
          }
        />

        <Route path="/contact" element={<Contact />} />

        <Route
            element={
              <PrivateRoute>
                  <Dashboard></Dashboard>
              </PrivateRoute>
            }
        >
              <Route path="dashboard/my-profile" element={<MyProfile />} />
              
              <Route path="dashboard/Settings" element={<Settings />} />

              {
                user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
                  <>
                  <Route path="dashboard/add-course" element={<AddCourse />} />   
                  <Route path="dashboard/my-courses" element={<MyCourses></MyCourses>}/>  
                  <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />            
                  </>
                )
              }

        </Route>


          </Routes>
      </div>
  );
}

export default App;
