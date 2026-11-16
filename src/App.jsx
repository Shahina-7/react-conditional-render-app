import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="login-card">
      <h2>Conditional Rendering</h2>

      <button onClick={handleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {isLoggedIn && (
        <div className="welcome">
          <h3>Welcome Ravi!</h3>
          <p>You have successfully logged in.</p>
        </div>
      )}

      {!isLoggedIn && (
        <p className="prompt">Please login to continue.</p>
      )}
    </div>
  );
}

export default App;