import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home"

function App() {
  return (
      <div className=" w-screen min-h-screen  bg-blue-800 flex flex-col ">
          <Routes>
            <Route path="/" element={<Home></Home>}> </Route>
          </Routes>
      </div>
  );
}

export default App;
