/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import {
  AiFillHome,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai';
import { GiTakeMyMoney } from 'react-icons/gi';
import { ImFacebook2 } from 'react-icons/im';
import { BsFilePost } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import logo from 'assets/img/Eo_circle_light-blue_white_letter-r.svg';
import { useHistory } from 'react-router';
import Testimonials from './Testimonials';

const Content = ({ dark, setOpen, userData }) => {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.token) {
      history.push('/login');
    }
  }, []);

  return (
    <div
      className={`${
        dark ? 'bg-dark text-white' : 'bg-surface text-gray-800'
      } col-end-13 bg-surface col-start-1 lg:col-start-3  row-start-2  row-end-4 p-3`}
      onClick={() => setOpen(false)}
    >
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-2xl">Business</h2>
          <span className="text-xs">Business admin panel</span>
        </div>
        <div className="flex mt-6">
          <span>
            <AiFillHome className="text-main mr-1 mt-1 " />
          </span>
          /<span className="mx-1">Dashboard</span>/
          <span className="mx-1">Business</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  my-4 gap-4">
        <div
          className={`${
            dark ? 'bg-profileDark' : 'bg-white'
          } items-center justify-around p-4 shadow-md flex rounded-md `}
        >
          <div className="flex flex-col ">
            <span className="">Users</span>
            <CountUp className="font-bold text-xl" end={4040} duration={5} />
          </div>
          <div>
            <span className="text-5xl ">
              <FaUsers />
            </span>
          </div>
        </div>
        <div
          className={`${
            dark ? 'bg-profileDark' : 'bg-white'
          } items-center justify-around p-4 shadow-md flex rounded-md `}
        >
          <div className="flex flex-col ">
            <span className="">Income</span>
            <CountUp
              className="font-bold text-xl"
              end={7000}
              prefix="$"
              duration={10}
            />
          </div>
          <div>
            <span className="text-5xl ">
              <GiTakeMyMoney className="text-yellow-600" />
            </span>
          </div>
        </div>
        <div
          className={`${
            dark ? 'bg-profileDark text-white' : 'bg-white'
          } items-center justify-around p-4 shadow-md flex rounded-md `}
        >
          <div className="flex flex-col ">
            <span className="">Project</span>
            <CountUp className="font-bold text-xl" end={50} duration={10} />
          </div>
          <div>
            <span className="text-5xl ">
              <AiOutlineFundProjectionScreen className="text-green-600" />
            </span>
          </div>
        </div>
        <div
          className={`${
            dark ? 'bg-profileDark' : 'bg-white'
          } items-center justify-around p-4 shadow-md flex rounded-md `}
        >
          <div className="flex flex-col ">
            <span className="">Post</span>
            <CountUp className="font-bold text-xl" end={50} duration={10} />
          </div>
          <div>
            <span className="text-5xl ">
              <BsFilePost className="text-blue-600" />
            </span>
          </div>
        </div>
      </div>
      {/*   short description to our business  */}
      <div
        className={`${
          dark ? 'bg-profileDark text-white' : ' text-gray-800 bg-white'
        } grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shadow-md p-4`}
      >
        <div className="flex flex-col items-center justify-center  col-span-1 border-gray-200 border-r">
          <div>
            <img className="w-14" src={logo} alt="Logo" />
          </div>
          <div className="text-2xl ml-2 font-bold">
            <h1>Robert</h1>
          </div>
        </div>
        <div className="flex-col flex md:col-span-2 lg:col-span-3 p-2 md:p-4">
          <div className="flex my-0.5">
            <span className="font-bold mr-1 ">Name :</span>
            <span className="text-sm md:text-base">RwandaYouthDev</span>
          </div>
          <div className="flex my-0.5">
            <span className="font-bold mr-1 ">Founded :</span>
            <span className="text-sm md:text-base">
              rwandayouthdev@gmail.com
            </span>
          </div>
          <div className="flex my-0.5">
            <span className="font-bold mr-1 ">Phone :</span>
            <span className="text-sm md:text-base">+250787491276</span>
          </div>
          <div className="flex my-0.5 w-full ">
            <span className="font-bold mr-1 ">About: </span>
            <span className="text-sm md:text-base">
              Lorem ipsum, dolor sit amet consect adipisicing.
            </span>
          </div>
        </div>
      </div>
      <div>
        {/* social followers */}
        <div className="grid grid-cols-1 md:grid-cols-2  mt-6 gap-4">
          <div
            className={`${
              dark ? 'bg-profileDark text-white' : ' bg-white text-gray-800 '
            } shadow-md   flex p-4 rounded-md item-center  `}
          >
            <span>
              <ImFacebook2 className="text-blue-800 text-5xl mr-2 " />{' '}
            </span>
            <div className="flex flex-col">
              <span>Facebook</span>
              <span>
                <CountUp end={12222} duration={24} />
              </span>
            </div>
          </div>
          <div
            className={`${
              dark ? 'bg-profileDark text-white' : ' bg-white text-gray-800 '
            } shadow-md  flex p-4 rounded-md item-center   `}
          >
            <span>
              <AiFillTwitterSquare className="text-main text-5xl mr-2 " />{' '}
            </span>
            <div className="flex flex-col">
              <span>Twitter</span>
              <span>
                <CountUp end={2056} duration={20} />
              </span>
            </div>
          </div>
          <div
            className={`${
              dark ? 'bg-profileDark text-white' : ' bg-white text-gray-800 '
            } shadow-md  flex p-4 rounded-md item-center   `}
          >
            <span>
              <AiFillLinkedin className="text-blue-600 text-5xl mr-2 " />{' '}
            </span>
            <div className="flex flex-col">
              <span>LinkedIn</span>
              <span>
                <CountUp end={500} />
              </span>
            </div>
          </div>
          <div
            className={`${
              dark ? 'bg-profileDark text-white' : ' bg-white text-gray-800 '
            } shadow-md   flex p-4 rounded-md item-center  `}
          >
            <span>
              <AiFillYoutube className="text-red-600 text-5xl mr-2 " />{' '}
            </span>
            <div className="flex flex-col">
              <span>Youtube</span>
              <span>
                <CountUp end={5450} duration={20} />
              </span>
            </div>
          </div>
        </div>
        {/* services */}
        <div
          className={`${
            dark ? ' bg-profileDark  text-white' : 'bg-white text-gray-800'
          }  mt-4 overflow-x-auto lg:overflow-hidden  p-4`}
        >
          <div className="text-2xl border-b font-bold border-gray-200 py-4 ">
            <h1>Services cart</h1>
          </div>
          <div>
            <table className=" w-full  ">
              <thead className="text-left border-b border-gray-200">
                <tr>
                  <th className="py-2">Details</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="py-2">Web development</td>
                  <td>100</td>
                  <td>$12320</td>
                </tr>
                <tr className="">
                  <td className="py-2">Web designing</td>
                  <td>200</td>
                  <td>$12055</td>
                </tr>
                <tr className="">
                  <td className="py-2">Training</td>
                  <td>40</td>
                  <td>$12</td>
                </tr>
                <tr className="">
                  <td className="py-2">Mobile app development</td>
                  <td>30</td>
                  <td>$1200</td>
                </tr>
                <tr>
                  <td>Video editing</td>
                  <td>100</td>
                  <td>$121</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/*  Employee */}
        <div
          className={`${
            dark ? ' bg-profileDark  text-white' : 'bg-white text-gray-800'
          }  mt-4  p-4`}
        >
          <div className="text-2xl border-b font-bold border-gray-200 py-4 ">
            <h1>Employee status</h1>
          </div>
          <div>
            <table className=" w-full  ">
              <thead className="text-left border-b border-gray-200">
                <tr>
                  <th className="py-2">Name</th>
                  <th>Designation</th>
                  <th>Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="py-2">Rene</td>
                  <td>Web developer</td>
                  <td> 10 years</td>
                </tr>
                <tr className="">
                  <td className="py-2">Jean Mugabo</td>
                  <td>Web designer</td>
                  <td>2 years</td>
                </tr>
                <tr className="">
                  <td className="py-2">Angel Divine</td>
                  <td>Video editor</td>
                  <td>3 years</td>
                </tr>
                <tr className="">
                  <td className="py-2"> Robert Dev</td>
                  <td>Mobile app development</td>
                  <td>4 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className={`${dark ? ' bg-profileDark' : ' bg-white'} mt-4 shadow-md`}
        >
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Content;
