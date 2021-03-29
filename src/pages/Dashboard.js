import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { logout } from 'redux/action/userAction';
import { getSingleActionCreator } from 'redux/action/authProfile';

import Loader from 'skeletons/Loader/Loader';
import Content from '../components/dashboard/Content';
import Footer from '../components/dashboard/Footer';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/Sidebar';

const Dashboard = ({ LOGOUT, user, userData, getAuthProfile }) => {
  const [Dark, setDark] = useState(false);
  const [Open, setOpen] = useState(false);
  const [loader, setLoader] = useState(true);

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
              logout={LOGOUT}
              dark={Dark}
              user={user}
              setDark={setDark}
              Open={Open}
              setOpen={setOpen}
            />
            <Sidebar authUser={user} dark={Dark} Open={Open} />
            <Content
              userData={userData}
              dark={Dark}
              Open={Open}
              setOpen={setOpen}
            />
            <Footer dark={Dark} />
          </div>
        </>
      )}
    </>
  );
};
const mapStateToProps = state => ({
  userData: state.profile.userData,
  user: state.authProfile.user,
});
const mapDispatchToProps = dispatch => ({
  LOGOUT: () => dispatch(logout()),
  getAuthProfile: () => dispatch(getSingleActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
