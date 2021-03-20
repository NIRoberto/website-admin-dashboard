import AllBlog from "components/dashboard/blog/AllBlog";
import Footer from "components/dashboard/Footer";
import Navbar from "components/dashboard/Navbar";
import Sidebar from "components/dashboard/Sidebar";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { profileActionCreator } from "redux/action/userProfile";
import Loader from "skeletons/Loader/Loader";

const AllBlogPage = () => {
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
      history.push("/login");
    }
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
        <Navbar dark={Dark} setDark={setDark} Open={Open} setOpen={setOpen} />
        <Sidebar dark={Dark} Open={Open} />
        <AllBlog dark={Dark} Open={Open} setOpen={setOpen} />
        <Footer dark={Dark} />
      </div>
    </>
  );
};

export default AllBlogPage;
