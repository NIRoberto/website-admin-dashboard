import React, { useEffect, useState } from "react";
import Loader from "skeletons/Loader/Loader";
import Content from "../components/dashboard/Content";
import Footer from "../components/dashboard/Footer";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

const Dashboard = () => {
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
        <Navbar dark={Dark} setDark={setDark} Open={Open} setOpen={setOpen} />
        <Sidebar dark={Dark} Open={Open} />
        <Content dark={Dark} Open={Open} setOpen={setOpen} />
        <Footer dark={Dark} />
      </div>
    </>
  );
};

export default Dashboard;
