import SideHero from "./component/common/SideHero";
import Protected from "./middleware/Protected";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "jotai";
import Navbar from "./component/common/Navbar";
import { Notifications } from "react-push-notification";
import Public from "./middleware/Public";

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Navbar />
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
            <Route path="/" element={<Public><Home /></Public>} />
          </Routes>
          <Notifications />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
