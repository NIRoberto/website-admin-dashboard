import React from 'react';
import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { GrFacebookOption } from 'react-icons/gr';

const UserCard = ({ firstName, lastName, dark, role, bio, profileImage }) => (
  <div
    className={`${
      dark ? 'bg-profileDark ' : 'bg-white '
    }  flex items-center p-4 flex-col justify-center shadow-md rounded-md`}
  >
    <div>
      <img
        src={profileImage}
        alt="profileImage"
        className="h-24  w-24 border-surface border-8 rounded-full"
      />
    </div>
    <div className="py-4">
      <ul className="flex justify-center ">
        <li>
          <a href="#fb">
            <GrFacebookOption className="hover:text-main" />
          </a>
        </li>
        <li className="ml-4">
          <a href="#fb">
            <FiTwitter className="hover:text-main" />
          </a>
        </li>{' '}
        <li className="ml-4">
          <a href="#fb">
            <FiInstagram className="hover:text-main" />
          </a>
        </li>
      </ul>
    </div>
    <div className="pb-4">
      <div className="pb-2">
        <h1 className="flex   items-center justify-center text-xl">
          <span>{firstName}</span>
          <span className="ml-1.5">{lastName}</span>
        </h1>
      </div>
      <div className=" text-center">
        <span>{role}</span>
      </div>

      <div className="py-2 text-sm text-center">
        <p>{bio}</p>
      </div>
    </div>
  </div>
);

export default UserCard;
