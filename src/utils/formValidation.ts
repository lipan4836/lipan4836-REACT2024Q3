import * as Yup from 'yup';

const formValidationSchema = Yup.object().shape({
  name: Yup.string()
    .strict(true)
    .matches(/^[A-Z][a-zA-Z]*$/, 'Name must start with a capital letter')
    .required('Name is required'),
  age: Yup.string()
    .strict(true)
    .matches(/^[1-9][0-9]*$/, 'Enter positive digits')
    .required('Name is required'),
  email: Yup.string()
    .strict(true)
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
    .required('Email is required'),
  pass1: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character',
    )
    .required('Password is required'),
  pass2: Yup.string()
    .oneOf([Yup.ref('pass1')], 'Passwords must match')
    .required('Confirm Password is required'),
  gender: Yup.string().required('Gender is required'),
  agreement: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('Agreement is required'),
  country: Yup.string()
    .strict(true)
    .matches(/^[A-Z][a-zA-Z]*$/, 'Country must start with a capital letter')
    .required('Name is required'),
  imageBase64: Yup.string().required('Image is required'),
});

export default formValidationSchema;
