import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { logout } from "redux/action/userAction";

import Footer from "components/dashboard/Footer";
import Navbar from "components/dashboard/Navbar";
import Sidebar from "components/dashboard/Sidebar";
import Profile from "components/dashboard/users/Profile";
import Loader from "skeletons/Loader/Loader";

const SingleProfile = ({ LOGOUT }) => {
  const [Dark, setDark] = useState(false);
  const [Open, setOpen] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, []);
  return (
    <>
      <div
        className={`${
          loader ? "flex items-center justify-center h-screen" : "hidden"
        }`}
      >
        <Loader />
      </div>
      <div
        className={`${
          loader ? "hidden" : "grid"
        }   grid-cols-1 lg:grid-cols-main font-body  grid-rows-main`}
      >
        <Navbar
          logout={LOGOUT}
          dark={Dark}
          setDark={setDark}
          Open={Open}
          setOpen={setOpen}
        />
        <Sidebar dark={Dark} Open={Open} />
        <Profile dark={Dark} Open={Open} setOpen={setOpen} />
        <Footer dark={Dark} />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    LOGOUT: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProfile);
