import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthStatus } from "../hooks/useAuthStatus";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, loggedIn } = useAuthStatus();
  const [pageState, setPageState] = useState("Sign In");
  // const userName = auth.currentUser
  // console.log(userName)
  // console.log(location)

  const pathMatch = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign In");
      }
    });
  }, [auth]);
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto py-2">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex items-center space-x-10">
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] cursor-pointer border-b-transparent ${
                pathMatch("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] cursor-pointer border-b-transparent ${
                pathMatch("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] cursor-pointer border-b-transparent ${
                pathMatch("/signin") ||
                (pathMatch("/profile") && "text-black border-b-red-500")
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
