import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home"
import NavBar from "./components/common/NavBar"


function App() {
  return (
      <div className=" w-screen min-h-screen  bg-blue-800 flex flex-col ">
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home></Home>}> </Route>
            

          </Routes>
      </div>
  );
}

export default App;
