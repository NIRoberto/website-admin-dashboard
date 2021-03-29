import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { getSingleActionCreator } from 'redux/action/authProfile';
import { connect } from 'react-redux';
import { logout } from 'redux/action/userAction';
import Footer from 'components/dashboard/Footer';
import Navbar from 'components/dashboard/Navbar';
import Sidebar from 'components/dashboard/Sidebar';
import Widget from 'components/dashboard/Widget';
import Loader from 'skeletons/Loader/Loader';

const Widgets = ({ user, getAuthProfile, LOGOUT }) => {
  const [Dark, setDark] = useState(false);
  const [Open, setOpen] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getAuthProfile();
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, []);

  return (
    <>
      {!localStorage.token ? (
        <Redirect to="/login" />
      ) : (
        <>
          <div
            className={`${
              loader ? 'flex items-center justify-center h-screen' : 'hidden'
            }`}
          >
            <Loader />
          </div>
          <div
            className={`${
              loader ? 'hidden' : 'grid'
            }   grid-cols-1 lg:grid-cols-main font-body  grid-rows-main`}
          >
            <Navbar
              dark={Dark}
              logout={LOGOUT}
              user={user}
              setDark={setDark}
              Open={Open}
              setOpen={setOpen}
            />
            <Sidebar authUser={user} dark={Dark} Open={Open} />
            <Widget dark={Dark} Open={Open} setOpen={setOpen} />
            <Footer dark={Dark} />
          </div>
        </>
      )}
    </>
  );
};
const mapStateToProps = state => ({
  user: state.authProfile.user,
});
const mapDispatchToProps = dispatch => ({
  LOGOUT: () => dispatch(logout()),
  getAuthProfile: () => dispatch(getSingleActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
