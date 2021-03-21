import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter valid email Address')
    .required('Email is required'),

  password: Yup.string().trim().required('Password is required'),
});
export default validationSchema;
