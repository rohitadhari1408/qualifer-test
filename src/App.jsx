import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./componets/Home";
import SignIn from "./componets/SignIn";
import SignUp from "./componets/SignUp";
import AccountSettings from "./componets/AccountSettings";
import BottomNavigation from "./componets/BottomNavigation";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-4">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>

            {/* Bottom Navigation */}
            <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;
