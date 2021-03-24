import Footer from 'components/dashboard/Footer';
import Navbar from 'components/dashboard/Navbar';
import Sidebar from 'components/dashboard/Sidebar';
import AllUsers from 'components/dashboard/users/AllUsers';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { getSingleActionCreator } from 'redux/action/authProfile';
import { logout } from 'redux/action/userAction';
import { profileActionCreator } from 'redux/action/userProfile';
import Loader from 'skeletons/Loader/Loader';

const AllProfile = ({
  userData,
  getAllProfile,
  LOGOUT,
  user,
  getAuthProfile,
}) => {
  const [Dark, setDark] = useState(false);
  const [Open, setOpen] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, []);
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.token) {
      history.push('/login');
    }
  }, []);
  useEffect(() => {
    getAllProfile();
    getAuthProfile();
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
          logout={LOGOUT}
          dark={Dark}
          user={user}
          setDark={setDark}
          Open={Open}
          setOpen={setOpen}
        />
        <Sidebar authUser={user} dark={Dark} Open={Open} />
        <AllUsers dark={Dark} Open={Open} users={userData} setOpen={setOpen} />
        <Footer dark={Dark} />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  userData: state.profile.userData,
  user: state.authProfile.user,
});
const mapDispatchToProps = dispatch => ({
  getAllProfile: () => dispatch(profileActionCreator()),
  LOGOUT: () => dispatch(logout()),
  getAuthProfile: () => dispatch(getSingleActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProfile);
