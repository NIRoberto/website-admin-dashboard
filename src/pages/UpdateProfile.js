import Footer from 'components/dashboard/Footer';
import Navbar from 'components/dashboard/Navbar';
import Sidebar from 'components/dashboard/Sidebar';
import UpdateForm from 'components/dashboard/users/UpdateForm';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { getSingleActionCreator } from 'redux/action/authProfile';
import { logout } from 'redux/action/userAction';
import Loader from 'skeletons/Loader/Loader';

const UpdateProfile = ({ LOGOUT, user, getAuthProfile }) => {
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
        <ToastContainer />
        <Navbar
          logout={LOGOUT}
          dark={Dark}
          user={authData}
          setDark={setDark}
          Open={Open}
          setOpen={setOpen}
        />
        <Sidebar authUser={authData} dark={Dark} Open={Open} />

        <UpdateForm user={authData} dark={Dark} Open={Open} setOpen={setOpen} />
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
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
