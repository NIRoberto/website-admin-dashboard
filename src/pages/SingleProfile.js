/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { logout } from 'redux/action/userAction';

import Footer from 'components/dashboard/Footer';
import Navbar from 'components/dashboard/Navbar';
import Sidebar from 'components/dashboard/Sidebar';
import Profile from 'components/dashboard/users/Profile';
import Loader from 'skeletons/Loader/Loader';
import { useHistory } from 'react-router';
import { getSingleActionCreator } from 'redux/action/authProfile';

const SingleProfile = ({ LOGOUT, user, getAuthProfile }) => {
  const [Dark, setDark] = useState(false);
  const [Open, setOpen] = useState(false);
  const [loader, setLoader] = useState(true);
  const authData = user.user.data.data;
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, []);

  useEffect(() => {
    getAuthProfile();
  }, []);
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.token) {
      history.push('/login');
    }
  }, []);
  return (
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
          user={authData}
          logout={LOGOUT}
          dark={Dark}
          setDark={setDark}
          Open={Open}
          setOpen={setOpen}
        />
        <Sidebar authUser={authData} dark={Dark} Open={Open} />
        <Profile
          authUser={authData}
          dark={Dark}
          Open={Open}
          setOpen={setOpen}
        />
        <Footer dark={Dark} />
      </div>
    </>
  );
};
const mapStateToProps = state => ({
  userData: state.profile,
  user: state.authProfile,
});
const mapDispatchToProps = dispatch => ({
  LOGOUT: () => dispatch(logout()),
  getAuthProfile: () => dispatch(getSingleActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProfile);
