import { useState } from "react";
import Login from "../login";
import Logout from "../logout";
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Logout handleLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Login handleLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
};
export default Home;
