/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { AiFillHome } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { updateFailed, updateSuccess } from 'redux/action/userProfile';
import { useHistory } from 'react-router';

const UpdateForm = ({ dark, setOpen, user }) => {
  // const {
  //   _id,
  //   firstName,
  //   lastName,
  //   email,
  //   desc,
  //   profileImage,
  //   twitter,
  //   facebook,
  //   phone,
  //   birthDate,
  //   git,
  //   location,
  // } = user;

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    twitter: '',
    facebook: '',
    birthDate: '',
    phone: '',
    git: '',
    desc: '',
    location: '',
  };
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = values => {
    const newInfo = new FormData();
    newInfo.append('profileImage', values.profileImage);
    newInfo.append('firstName', values.firstName);
    newInfo.append('lastName', values.lastName);
    newInfo.append('email', values.email);
    newInfo.append('location', values.location);
    newInfo.append('desc', values.desc);
    newInfo.append('desc', values.desc);
    newInfo.append('birthDate', values.birthDate);
    newInfo.append('phone', values.phone);

    axios
      .patch(
        `https://dashboard-r-api.herokuapp.com/api/v1/users/update/`,
        newInfo,
      )
      .then(data => {
        dispatch(updateSuccess(data));
        toast.success('Profile updated successfully');
        setTimeout(() => {
          history.push('/user/profile');
        }, 3000);
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(updateFailed(errorMsg));
        toast.error(errorMsg);
      });
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {formProps => (
        <>
          <div
            className={`${
              dark ? 'bg-dark text-white' : 'bg-surface text-gray-800'
            } col-end-13 bg-surface col-start-1 lg:col-start-3  row-start-2  row-end-4 p-3`}
            onClick={() => setOpen(false)}
          >
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-xl md:text-2xl"> Profile</h2>
                <span className="text-xs">Business admin panel</span>
              </div>
              <div className="flex mt-6">
                <span>
                  <AiFillHome className="text-main mr-1" />
                </span>
                /<span className="mx-1">User</span>/
                <span className="mx-1   text-sm md:text-lg">
                  Update profile
                </span>
              </div>
            </div>

            <div
              className={`${
                dark ? 'bg-hoverDark ' : 'bg-white'
              } rounded-md shadow-md w-full my-4`}
            >
              <div className="text-main px-4 py-4 text-xl font-bold ">
                <h2 className="mx-5"> Update profile</h2>
              </div>

              <Form className="w-full  pb-4">
                <div className="grid  grid-cols-1 md:grid-cols-2 w-full justify-items-center">
                  <div className="flex-col md:my-4  flex w-10/12">
                    <label htmlFor="firstName" className="my-2 ">
                      First name
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      className={`${
                        dark ? 'bg-hoverDark' : ''
                      } border px-2 py-1 rounded-md focus:border-gray focus:outline-none border-gray-400`}
                    />
                  </div>
                  <div className="flex-col my-4 w-10/12    flex">
                    <label htmlFor="LastName" className="my-2 ">
                      {' '}
                      Last name
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      className={`${
                        dark ? 'bg-hoverDark' : ''
                      } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
                    />
                  </div>
                </div>
                <div className="grid  grid-cols-1 md:grid-cols-2 w-full justify-items-center">
                  <div className="flex-col md:my-2  flex w-10/12">
                    <label htmlFor="Email" className="my-2 ">
                      Email
                    </label>
                    <Field
                      type="text"
                      name="email"
                      className={`${
                        dark ? 'bg-hoverDark' : ''
                      } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
                    />
                  </div>
                  <div className="flex-col my-2 w-10/12    flex">
                    <label htmlFor="Phone" className="my-2 ">
                      {' '}
                      Phone
                    </label>
                    <Field
                      type="text"
                      name="phone"
                      className={`${
                        dark ? 'bg-hoverDark' : ''
                      } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
                    />
                  </div>
                </div>
                <div className="grid  grid-cols-1 md:grid-cols-2 w-full justify-items-center">
                  <div className="flex-col md:my-2  flex w-10/12">
                    <label htmlFor="DateOfBirth" className="my-2 ">
                      Date of birth
                    </label>
                    <Field
                      type="text"
                      name="birthDate"
                      className={`${
                        dark ? 'bg-hoverDark' : ''
                      } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
                    />
                  </div>
                  <div className="flex-col my-2 w-10/12    flex">
                    <label htmlFor="Location" className="my-2 ">
                      {' '}
                      Location
                    </label>
                    <Field
                      type="text"
                      name="location"
                      className={`${
                        dark ? 'bg-hoverDark' : ''
                      } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
                    />
                  </div>
                </div>{' '}
                <div className="grid  grid-cols-1 md:grid-cols-2 w-full justify-items-center">
                  <div className="flex-col md:my-2  flex w-10/12">
                    <label htmlFor="Facebook" className="my-2 ">
                      Facebook link
                    </label>
                    <Field
                      type="text"
                      name="facebook"
                      className={`${
                        dark ? 'bg-hoverDark' : ''
                      } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
                    />
                  </div>
                  <div className="flex-col my-2 w-10/12    flex">
                    <label htmlFor="Twitter" className="my-2 ">
                      {' '}
                      Twitter link
                    </label>
                    <Field
                      type="text"
                      name="twitter"
                      className={`${
                        dark ? 'bg-hoverDark' : ''
                      } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
                    />
                  </div>
                </div>
                <div className="grid  mb-2  grid-cols-1 w-full justify-items-center">
                  <div className="flex-col    flex w-10/12 md:w-11/12">
                    <label htmlFor="Git" className="my-2 ">
                      GitHub Link
                    </label>
                    <Field
                      type="text"
                      name="git"
                      className={`${
                        dark ? 'bg-hoverDark' : ''
                      } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
                    />
                  </div>
                  <div className="flex-col  w-10/12 md:w-11/12    flex">
                    <label htmlFor="Bio" className="my-2  ">
                      {' '}
                      Bio
                    </label>
                    <Field
                      as="textarea"
                      name="desc"
                      id="desc"
                      className={`${
                        dark ? 'bg-hoverDark  ' : ''
                      }border   h-20  focus:border-gray-400 focus:outline-none  border-gray-400 rounded-md p-2`}
                    />
                  </div>
                </div>
                <div className="flex  flex-col   w-5/12 md:w-11/12 ml-7  md:ml-10 ">
                  <label htmlFor="image" className="my-2 ">
                    {' '}
                    Image
                  </label>
                  <input
                    type="file"
                    className="py-4 h-12 mr-10 md:m-0 focus:border-none  text-xs"
                    name="profileImage"
                    onChange={event =>
                      formProps.setFieldValue(
                        'profileImage',
                        event.target.files[0],
                      )
                    }
                  />
                </div>
                <div className="flex items-center  w-5/12 md:w-11/12 ml-7 md:ml-10 my-10">
                  <button
                    type="submit"
                    className="px-8 py-1 bg-main rounded-md text-white hover:bg-hover"
                  >
                    Update
                  </button>
                </div>
              </Form>
            </div>

            <p className="invisible">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              molestiae quo, aliquid accusamus, maxime alias optio ipsa
              perspiciatis ea culpa aperiam necessitatibus praesentium?
              Repudiandae ratione rerum fugiat maxime beatae laboriosam?
            </p>
          </div>
        </>
      )}
    </Formik>
  );
};

export default UpdateForm;
