import React, { useEffect, useState } from "react";
import LoginComponents from "components/Auth/LoginComponents";
import Loader from "skeletons/Loader/Loader";

const Login = () => {
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
      <div
        className={`${
          loader ? "hidden" : " block"
        } w-screen h-screen bg-surface`}
      >
        <LoginComponents />
      </div>
    </>
  );
};

export default Login;
