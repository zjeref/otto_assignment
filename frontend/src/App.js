import SideHero from "./component/common/SideHero";
import Protected from "./middleware/Protected";
import Chart from "./pages/Chart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "jotai";
import Navbar from "./component/common/Navbar";

function App() {
  return (
    <div className="App">
      <Provider>
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route
              path="/signup"
              element={
                <Protected>
                  <Signup />
                </Protected>
              }
            />
            <Route
              path="/login"
              element={
                <Protected>
                  <Login />
                </Protected>
              }
            />
            <Route
              path="/"
              element={
                <Protected>
                  <Chart />
                </Protected>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
