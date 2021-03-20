import RegisterComponents from "components/Auth/RegisterComponents";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { userSignup } from "redux/action/userAction";
import Loader from "skeletons/Loader/Loader";

const Register = ({ userInfo }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
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
      <div className={`${loader ? "hidden" : " block"} bg-surface h-screen`}>
        <RegisterComponents />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.auth,
  };
};

export default connect(mapStateToProps)(Register);
