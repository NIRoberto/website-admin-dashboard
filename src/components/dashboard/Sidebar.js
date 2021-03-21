/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import {
  AiOutlineDashboard,
  AiOutlineDown,
  AiOutlineFundProjectionScreen,
  AiOutlineMessage,
  AiOutlineUser,
} from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';

import { RiAppsFill } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { BiKey } from 'react-icons/bi';
import { BsChevronRight, BsEnvelope, BsFilePost } from 'react-icons/bs';
import 'react-tippy/dist/tippy.css';

import { Tooltip } from 'react-tippy';
import { MdEmail, MdWidgets } from 'react-icons/md';

import { SiUikit, SiWebauthn } from 'react-icons/si';
import logo from 'assets/img/Eo_circle_light-blue_white_letter-r.svg';
import './scroll.css';

const Sidebar = ({ dark, Open }) => {
  const [sidebar, setSidebar] = useState(false);
  // const [link2, setLink2] = useState(false);
  // const [form, setForm] = useState(false);
  const [pages, setPages] = useState(false);
  const [Email, setEmail] = useState(false);
  const [Kit, setKit] = useState(false);
  const [user, setUser] = useState(false);
  const [blog, setBlog] = useState(false);
  const [profolios, setProfolios] = useState(false);
  // const [Gallery, setGallery] = useState(false);
  const [From, setFrom] = useState(false);
  const [Button, setButton] = useState(false);
  const [Tables, setTables] = useState(false);
  const user1 = JSON.parse(localStorage.getItem('userInfo'));
  const {
    firstName,
    lastName,
    profileImage,
    role,
  } = user1.data.LoggedInAs.user;

  const history = useHistory();
  useEffect(() => {
    if (!localStorage.token) {
      history.push('/login');
    }
  }, []);

  return (
    <div
      className={`${dark ? 'bg-NavDark' : 'bg-main'} ${
        Open
          ? 'w-56 lg:w-full transition duration-200 ease-in-out block'
          : 'hidden'
      } row-start-1 row-end-5 col-start-1 col-end-3  min-h-full-h-screen bg-main z-20 lg:block text-white`}
    >
      <div
        className={`${
          dark ? 'bg-profileDark' : 'bg-logo'
        } flex items-center bg-logo p-1.5 border-b border-line`}
      >
        <div>
          <img className="w-14" src={logo} alt="Logo" />
        </div>
        <div className="text-2xl ml-2 font-bold">
          <h1>Robert</h1>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex-col flex  items-center justify-center border-b border-line p-4">
          <div>
            <img
              src={profileImage}
              alt="profile"
              className="w-16 h-16 object-cover rounded-full"
            />
          </div>
          <div className="w-full flex justify-center flex-col items-center ">
            <span className="text-base ">{`${firstName} ${lastName}`}</span>
            <span className="text-xs">{role}</span>
            <ul className="flex justify-around  mt-3 w-full ">
              <li>
                <a href="#m" className="text-sm">
                  <Tooltip title="User">
                    <span>
                      <FiUser />
                    </span>
                  </Tooltip>
                </a>
              </li>
              <li>
                <a href="#p" className="text-xs">
                  <Tooltip title="Email">
                    <span>
                      <BsEnvelope />
                    </span>
                  </Tooltip>
                </a>
              </li>
              <li>
                <a href="#c" className="text-xs">
                  <Tooltip title="Message">
                    <span>
                      <AiOutlineMessage />
                    </span>
                  </Tooltip>
                </a>
              </li>
              <li>
                <a href="#c" className="text-xs">
                  <Tooltip title="Logout">
                    <span>
                      <IoLogOutOutline />
                    </span>
                  </Tooltip>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <section>
          <article>
            <div className="my-2 mx-1 font-bold">
              <span>General</span>
            </div>
            <div>
              <ul>
                <li>
                  <div
                    href="#link"
                    className={`${
                      sidebar ? 'bg-hover' : ''
                    } flex justify-between ${
                      dark ? 'hover:bg-profileDark ' : 'hover:bg-hover '
                    }  ${dark && sidebar ? 'bg-profileDark' : ''}   ${
                      !dark && sidebar ? 'bg-hover' : ''
                    }   p-2`}
                  >
                    <div className="flex">
                      <span className="mr-2">
                        <AiOutlineDashboard className="text-base mt-0.5 font-bold" />
                      </span>
                      <span>Dashboard</span>
                    </div>
                    {sidebar ? (
                      <div>
                        <AiOutlineDown
                          className={`${
                            sidebar ? 'block ' : 'hidden'
                          } text-sm mt-1  mx-2 font-bold`}
                          onClick={() => setSidebar(!sidebar)}
                        />
                      </div>
                    ) : (
                      <div>
                        <BsChevronRight
                          className={`${
                            sidebar ? 'hidden ' : 'block'
                          } text-sm mt-1 mx-2 font-bold`}
                          onClick={() => setSidebar(!sidebar)}
                        />
                      </div>
                    )}
                  </div>
                  <div className={`${!sidebar ? 'hidden ' : 'block'}`}>
                    <div className="flex justify-between my-2">
                      <Link to="/" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Dashboard</span>
                      </Link>
                      <div />
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#link"
                    className="flex justify-between hover:bg-hover p-2"
                  >
                    <Link to="widget" className="flex">
                      <span className="mr-2">
                        <MdWidgets className="text-base mt-0.5 font-bold" />
                      </span>
                      <span>Widgets</span>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </article>
          {/* ***************************** components ****************************** */}
          <article>
            <div className="my-2 mx-1 font-bold">
              <span>Components</span>
            </div>
            <div>
              <ul>
                <li>
                  <a
                    href="#link"
                    className={`${Kit ? 'bg-hover' : ''} flex justify-between ${
                      dark ? 'hover:bg-profileDark ' : 'hover:bg-hover '
                    }  ${dark && Kit ? 'bg-profileDark' : ''}   ${
                      !dark && Kit ? 'bg-hover' : ''
                    }   p-2`}
                  >
                    <div className="flex">
                      <span className="mr-2">
                        <SiUikit className="text-base mt-0.5 font-bold" />
                      </span>
                      <span>Basic UI kit</span>
                    </div>
                    {Kit ? (
                      <div>
                        <AiOutlineDown
                          className={`${
                            Kit ? 'block ' : 'hidden'
                          } text-sm mt-1  mx-2 font-bold`}
                          onClick={() => setKit(!Kit)}
                        />
                      </div>
                    ) : (
                      <div>
                        <BsChevronRight
                          className={`${
                            Kit ? 'hidden ' : 'block'
                          } text-sm mt-1 mx-2 font-bold`}
                          onClick={() => setKit(!Kit)}
                        />
                      </div>
                    )}
                  </a>
                  <div className={`${!Kit ? 'hidden ' : 'block'}`}>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Form</span>
                      </a>
                      <div />
                    </div>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Tables</span>
                      </a>
                      <div />
                    </div>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Form</span>
                      </a>
                      <div />
                    </div>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Button</span>
                      </a>
                      <div />
                    </div>
                  </div>
                </li>

                <li>
                  <a
                    href="#link"
                    className={`${
                      Tables ? 'bg-hover' : ''
                    } flex justify-between ${
                      dark ? 'hover:bg-profileDark ' : 'hover:bg-hover '
                    }  ${dark && Tables ? 'bg-profileDark' : ''}   ${
                      !dark && Tables ? 'bg-hover' : ''
                    }   p-2`}
                  >
                    <div className="flex">
                      <span className="mr-2">
                        <RiAppsFill className="text-base mt-0.5 font-bold" />
                      </span>
                      <span>Tables</span>
                    </div>
                    {Tables ? (
                      <div>
                        <AiOutlineDown
                          className={`${
                            Tables ? 'block ' : 'hidden'
                          } text-sm mt-1  mx-2 font-bold`}
                          onClick={() => setTables(!Tables)}
                        />
                      </div>
                    ) : (
                      <div>
                        <BsChevronRight
                          className={`${
                            Tables ? 'hidden ' : 'block'
                          } text-sm mt-1 mx-2 font-bold`}
                          onClick={() => setTables(!Tables)}
                        />
                      </div>
                    )}
                  </a>
                  <div className={`${!Tables ? 'hidden ' : 'block'}`}>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Portfolio</span>
                      </a>
                      <div />
                    </div>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Blog</span>
                      </a>
                      <div />
                    </div>
                    {' '}
                  </div>
                </li>
                <li>
                  <a
                    href="#link"
                    className={`${
                      From ? 'bg-hover' : ''
                    } flex justify-between ${
                      dark ? 'hover:bg-profileDark ' : 'hover:bg-hover '
                    }  ${dark && From ? 'bg-profileDark' : ''}   ${
                      !dark && From ? 'bg-hover' : ''
                    }   p-2`}
                  >
                    <div className="flex">
                      <span className="mr-2">
                        <RiAppsFill className="text-base mt-0.5 font-bold" />
                      </span>
                      <span>Form</span>
                    </div>
                    {From ? (
                      <div>
                        <AiOutlineDown
                          className={`${
                            From ? 'block ' : 'hidden'
                          } text-sm mt-1  mx-2 font-bold`}
                          onClick={() => setFrom(!From)}
                        />
                      </div>
                    ) : (
                      <div>
                        <BsChevronRight
                          className={`${
                            From ? 'hidden ' : 'block'
                          } text-sm mt-1 mx-2 font-bold`}
                          onClick={() => setFrom(!From)}
                        />
                      </div>
                    )}
                  </a>
                  <div className={`${!From ? 'hidden ' : 'block'}`}>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">TextInput</span>
                      </a>
                      <div />
                    </div>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">TextArea</span>
                      </a>
                      <div />
                    </div>
                    {' '}
                  </div>
                </li>
                <li>
                  <a
                    href="#link"
                    className={`${
                      Button ? 'bg-hover' : ''
                    } flex justify-between ${
                      dark ? 'hover:bg-profileDark ' : 'hover:bg-hover '
                    }  ${dark && Button ? 'bg-profileDark' : ''}   ${
                      !dark && Button ? 'bg-hover' : ''
                    }   p-2`}
                  >
                    <div className="flex">
                      <span className="mr-2">
                        <RiAppsFill className="text-base mt-0.5 font-bold" />
                      </span>
                      <span>Button</span>
                    </div>
                    {Button ? (
                      <div>
                        <AiOutlineDown
                          className={`${
                            Button ? 'block ' : 'hidden'
                          } text-sm mt-1  mx-2 font-bold`}
                          onClick={() => setButton(!Button)}
                        />
                      </div>
                    ) : (
                      <div>
                        <BsChevronRight
                          className={`${
                            Button ? 'hidden ' : 'block'
                          } text-sm mt-1 mx-2 font-bold`}
                          onClick={() => setButton(!Button)}
                        />
                      </div>
                    )}
                  </a>
                  <div className={`${!Button ? 'hidden ' : 'block'}`}>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Button</span>
                      </a>
                      <div />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <div className="my-2 mx-1 font-bold">
              <span>Apps</span>
            </div>
            <div>
              <ul>
                <li>
                  <a
                    href="#link"
                    className={`${
                      user ? 'bg-hover' : ''
                    } flex justify-between ${
                      dark ? 'hover:bg-profileDark ' : 'hover:bg-hover '
                    }  ${dark && user ? 'bg-profileDark' : ''}   ${
                      !dark && user ? 'bg-hover' : ''
                    }   p-2`}
                  >
                    <div className="flex">
                      <span className="mr-2">
                        <AiOutlineUser className="text-base mt-0.5 font-bold" />
                      </span>
                      <span>User</span>
                    </div>
                    {user ? (
                      <div>
                        <AiOutlineDown
                          className={`${
                            user ? 'block ' : 'hidden'
                          } text-sm mt-1  mx-2 font-bold`}
                          onClick={() => setUser(!user)}
                        />
                      </div>
                    ) : (
                      <div>
                        <BsChevronRight
                          className={`${
                            user ? 'hidden ' : 'block'
                          } text-sm mt-1 mx-2 font-bold`}
                          onClick={() => setUser(!user)}
                        />
                      </div>
                    )}
                  </a>
                  <div className={`${!user ? 'hidden ' : 'block'}`}>
                    <div className="flex justify-between my-2">
                      <Link
                        to="/users"
                        href="laudantium"
                        className="flex text-gray-200"
                      >
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Users profile</span>
                      </Link>
                      <div />
                    </div>
                    <div className="flex justify-between my-2">
                      <Link
                        to="/user/profile"
                        href="laudantium"
                        className="flex text-gray-200"
                      >
                        <div>
                          <BiKey className="mt-0.5 mx-3 text-gray-200" />
                        </div>
                        <span className="text-sm">Single profile</span>
                      </Link>
                      <div />
                    </div>
                    <div className="flex justify-between my-2">
                      <Link
                        to="/user/profile/update"
                        className="flex text-gray-200"
                      >
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Edit Profile </span>
                      </Link>
                      <div />
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#link"
                    className={`${
                      profolios ? 'bg-hover' : ''
                    } flex justify-between ${
                      dark ? 'hover:bg-profileDark ' : 'hover:bg-hover '
                    }  ${dark && profolios ? 'bg-profileDark' : ''}   ${
                      !dark && profolios ? 'bg-hover' : ''
                    }   p-2`}
                  >
                    <div className="flex">
                      <span className="mr-2">
                        <AiOutlineFundProjectionScreen className="text-base mt-0.5 font-bold" />
                      </span>
                      <span>Portfolios</span>
                    </div>
                    {profolios ? (
                      <div>
                        <AiOutlineDown
                          className={`${
                            profolios ? 'block ' : 'hidden'
                          } text-sm mt-1  mx-2 font-bold`}
                          onClick={() => setProfolios(!profolios)}
                        />
                      </div>
                    ) : (
                      <div>
                        <BsChevronRight
                          className={`${
                            profolios ? 'hidden ' : 'block'
                          } text-sm mt-1 mx-2 font-bold`}
                          onClick={() => setProfolios(!profolios)}
                        />
                      </div>
                    )}
                  </a>
                  <div className={`${!profolios ? 'hidden ' : 'block'}`}>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">All project</span>
                      </a>
                      <div />
                    </div>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3 text-gray-200" />
                        </div>
                        <span className="text-sm">Single project</span>
                      </a>
                      <div />
                    </div>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Edit Project</span>
                      </a>
                      <div />
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#link"
                    className={`${
                      blog ? 'bg-hover' : ''
                    } flex justify-between ${
                      dark ? 'hover:bg-profileDark ' : 'hover:bg-hover '
                    }  ${dark && blog ? 'bg-profileDark' : ''}   ${
                      !dark && blog ? 'bg-hover' : ''
                    }   p-2`}
                  >
                    <div className="flex">
                      <span className="mr-2">
                        <BsFilePost className="text-base mt-0.5 font-bold" />
                      </span>
                      <span>Blog</span>
                    </div>
                    {blog ? (
                      <div>
                        <AiOutlineDown
                          className={`${
                            blog ? 'block ' : 'hidden'
                          } text-sm mt-1  mx-2 font-bold`}
                          onClick={() => setBlog(!blog)}
                        />
                      </div>
                    ) : (
                      <div>
                        <BsChevronRight
                          className={`${
                            blog ? 'hidden ' : 'block'
                          } text-sm mt-1 mx-2 font-bold`}
                          onClick={() => setBlog(!blog)}
                        />
                      </div>
                    )}
                  </a>
                  <div className={`${!blog ? 'hidden ' : 'block'}`}>
                    <div className="flex justify-between my-2">
                      <Link to="/blogs" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">All blog</span>
                      </Link>
                      <div />
                    </div>
                    <div className="flex justify-between my-2">
                      <Link to="/blogs/:id" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3 text-gray-200" />
                        </div>
                        <span className="text-sm">Single blog</span>
                      </Link>
                      <div />
                    </div>
                    <div className="flex justify-between my-2">
                      <Link
                        to="/blogs/Create/:id"
                        className="flex text-gray-200"
                      >
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Create Blog</span>
                      </Link>
                      <div />
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#link"
                    className={`${
                      Email ? 'bg-hover' : ''
                    } flex justify-between ${
                      dark ? 'hover:bg-profileDark ' : 'hover:bg-hover '
                    }  ${dark && Email ? 'bg-profileDark' : ''}   ${
                      !dark && Email ? 'bg-hover' : ''
                    }   p-2`}
                  >
                    <div className="flex">
                      <span className="mr-2">
                        <MdEmail className="text-base mt-0.5 font-bold" />
                      </span>
                      <span>Email</span>
                    </div>
                    {Email ? (
                      <div>
                        <AiOutlineDown
                          className={`${
                            Email ? 'block ' : 'hidden'
                          } text-sm mt-1  mx-2 font-bold`}
                          onClick={() => setEmail(!Email)}
                        />
                      </div>
                    ) : (
                      <div>
                        <BsChevronRight
                          className={`${
                            Email ? 'hidden ' : 'block'
                          } text-sm mt-1 mx-2 font-bold`}
                          onClick={() => setEmail(!Email)}
                        />
                      </div>
                    )}
                  </a>
                  <div className={`${!Email ? 'hidden ' : 'block'}`}>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Inbox</span>
                      </a>
                      <div />
                    </div>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3 text-gray-200" />
                        </div>
                        <span className="text-sm">Compose</span>
                      </a>
                      <div />
                    </div>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Read</span>
                      </a>
                      <div />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <div className="my-2 mx-1 font-bold">
              <span>Pages</span>
            </div>
            <div>
              <ul>
                <li>
                  <a
                    href="#link"
                    className={`${
                      pages ? 'bg-hover' : ''
                    } flex justify-between ${
                      dark ? 'hover:bg-profileDark ' : 'hover:bg-hover '
                    }  ${dark && pages ? 'bg-profileDark' : ''}   ${
                      !dark && pages ? 'bg-hover' : ''
                    }   p-2`}
                  >
                    <div className="flex">
                      <span className="mr-2">
                        <SiWebauthn className="text-base mt-0.5 font-bold" />
                      </span>
                      <span>Auth</span>
                    </div>
                    {pages ? (
                      <div>
                        <AiOutlineDown
                          className={`${
                            pages ? 'block ' : 'hidden'
                          } text-sm mt-1  mx-2 font-bold`}
                          onClick={() => setPages(!pages)}
                        />
                      </div>
                    ) : (
                      <div>
                        <BsChevronRight
                          className={`${
                            pages ? 'hidden ' : 'block'
                          } text-sm mt-1 mx-2 font-bold`}
                          onClick={() => setPages(!pages)}
                        />
                      </div>
                    )}
                  </a>
                  <div className={`${!pages ? 'hidden ' : 'block'}`}>
                    <Link to="/register" className="flex justify-between my-2">
                      <div className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Register</span>
                      </div>
                      <div />
                    </Link>
                    <Link to="/login" className="flex justify-between my-2">
                      <div href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Login</span>
                      </div>
                      <div />
                    </Link>
                    <div className="flex justify-between my-2">
                      <a href="laudantium" className="flex text-gray-200">
                        <div>
                          <BiKey className="mt-0.5 mx-3" />
                        </div>
                        <span className="text-sm">Forgot password</span>
                      </a>
                      <div />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
