import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header, PrivateRoutes } from "./components";
import {
  CreateListing,
  EditListing,
  ForgotPassword,
  Home,
  Listing,
  Offers,
  Profile,
  Signin,
  Signup,
} from "./pages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/create-listing" element={<PrivateRoutes />}>
            <Route path="/create-listing" element={<CreateListing />} />
          </Route>

          <Route path="/edit-listing" element={<PrivateRoutes />}>
            <Route path="/edit-listing/:listingId" element={<EditListing />} />
          </Route>
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />
          {/* <Route path="" element={<Home />} /> */}
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgress={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocus
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
