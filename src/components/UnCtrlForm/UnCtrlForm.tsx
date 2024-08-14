import { useRef, useState } from 'react';
import '../../styles/Form.scss';
import Checkbox from './Checkbox';
import RadioGroup from './RadioGroup';
import TextInput from './TextInput';
import FileUpload from './FileUpload';
import { FormValuesProps } from '../../types/formValuesProps';
import { useDispatch } from 'react-redux';
import { setFormData } from '../../store/slices/formSlice';
import formValidationSchema from '../../utils/formValidation';
import * as Yup from 'yup';

function UnCtrlForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const pass1Ref = useRef<HTMLInputElement>(null);
  const pass2Ref = useRef<HTMLInputElement>(null);
  const agreementRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const dispatch = useDispatch();

  const handleFileChange = () => {
    const file = fileRef.current?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImageBase64(base64String);
        console.log(`Uploaded Image in Base64: ${base64String}`);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formValues: FormValuesProps = {
      name: nameRef.current ? nameRef.current.value : '',
      age: ageRef.current ? ageRef.current.value : '',
      email: emailRef.current ? emailRef.current.value : '',
      pass1: pass1Ref.current ? pass1Ref.current.value : '',
      pass2: pass2Ref.current ? pass2Ref.current.value : '',
      agreement: agreementRef.current ? agreementRef.current.checked : false,
      country: countryRef.current ? countryRef.current.value : '',
      gender,
      imageBase64,
    };

    try {
      await formValidationSchema.validate(formValues, { abortEarly: false });
      setErrors({});
      console.log('Validated form values:', formValues);
      dispatch(setFormData(formValues));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationError: Record<string, string> = {};
        err.inner.forEach((error) => {
          if (error.path) validationError[error.path] = error.message;
        });
        setErrors(validationError);
      }
    }
  };

  return (
    <main className="main">
      <h2>Uncontrolled Form</h2>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form_line">
          <TextInput
            label="Name"
            id="name"
            type="text"
            placeholder="enter your name"
            inputRef={nameRef}
          />
          {errors.name && <div className="form_error">{errors.name}</div>}
        </div>
        <div className="form_line">
          <TextInput
            label="Age"
            id="age"
            type="text"
            placeholder="enter your age"
            inputRef={ageRef}
          />
          {errors.age && <div className="form_error">{errors.age}</div>}
        </div>
        <div className="form_line">
          <TextInput
            label="e-mail"
            id="email"
            type="email"
            placeholder="enter your e-mail"
            inputRef={emailRef}
          />
          {errors.email && <div className="form_error">{errors.email}</div>}
        </div>
        <div className="form_line">
          <TextInput
            label="Password"
            id="password1"
            type="password"
            placeholder="enter your password"
            inputRef={pass1Ref}
          />
          {errors.pass1 && <div className="form_error">{errors.pass1}</div>}
        </div>
        <div className="form_line">
          <TextInput
            label="Confirm Password"
            id="password2"
            type="password"
            placeholder="confirm password"
            inputRef={pass2Ref}
          />
          {errors.pass2 && <div className="form_error">{errors.pass2}</div>}
        </div>
        <div className="form_line">
          <RadioGroup
            label="Gender"
            name="gender"
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
            ]}
            selectedValue={gender}
            onChange={setGender}
          />
          {errors.gender && <div className="form_error">{errors.gender}</div>}
        </div>
        <div className="form_line">
          <Checkbox label="I agree to the terms and conditions" inputRef={agreementRef} />
          {errors.agreement && <div className="form_error">{errors.agreement}</div>}
        </div>
        <div className="form_line">
          <FileUpload label="Upload Image" inputRef={fileRef} onChange={handleFileChange} />
          {errors.imageBase64 && <div className="form_error">{errors.imageBase64}</div>}
        </div>
        <div className="form_line">
          <TextInput
            label="Country"
            id="country"
            type="text"
            placeholder="enter your country"
            inputRef={countryRef}
          />
          {errors.country && <div className="form_error">{errors.country}</div>}
        </div>

        <button className="form_submit" type="submit">
          Submit
        </button>
      </form>

      {imageBase64 && (
        <div>
          <h3>Preview of Uploaded Image</h3>
          <img src={imageBase64} alt="Uploaded Preview" style={{ maxWidth: '30%' }} />
        </div>
      )}
    </main>
  );
}

export default UnCtrlForm;
