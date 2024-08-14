import { useRef, useState, useEffect, useCallback } from 'react';
import '../../styles/Form.scss';
import Checkbox from './Checkbox';
import RadioGroup from './RadioGroup';
import TextInput from './TextInput';
import FileUpload from './FileUpload';
import { FormValuesProps } from '../../types/formValuesProps';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../../store/slices/formSlice';
import formValidationSchema from '../../utils/formValidation';
import * as Yup from 'yup';
import { RootState } from '../../store/store';
import CountryInput from './CountryInput';

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
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);

  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
  const countries = useSelector((state: RootState) => state.countries.list);

  const dispatch = useDispatch();

  const checkFormCompleteness = useCallback(() => {
    const isComplete =
      nameRef.current?.value &&
      ageRef.current?.value &&
      emailRef.current?.value &&
      pass1Ref.current?.value &&
      pass2Ref.current?.value &&
      agreementRef.current?.checked &&
      gender &&
      imageBase64 &&
      countryRef.current?.value;

    setIsFormComplete(!!isComplete);
  }, [
    nameRef,
    ageRef,
    emailRef,
    pass1Ref,
    pass2Ref,
    agreementRef,
    gender,
    imageBase64,
    countryRef,
  ]);

  useEffect(() => {
    checkFormCompleteness();
  }, [imageBase64, gender, checkFormCompleteness]);

  const handleFileChange = () => {
    const file = fileRef.current?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImageBase64(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = () => {
    checkFormCompleteness();
  };

  const handleCountryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const filtered = countries.filter((country) =>
      country.toLowerCase().includes(input.toLowerCase()),
    );
    setFilteredCountries(filtered);
    handleInputChange();
  };

  const handleCountrySelect = (country: string) => {
    if (countryRef.current) {
      countryRef.current.value = country;
    }
    setFilteredCountries([]);
    checkFormCompleteness();
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
            onInput={handleInputChange}
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
            onInput={handleInputChange}
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
            onInput={handleInputChange}
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
            onInput={handleInputChange}
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
            onInput={handleInputChange}
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
            onChange={(value) => {
              setGender(value);
              checkFormCompleteness();
            }}
          />
          {errors.gender && <div className="form_error">{errors.gender}</div>}
        </div>
        <div className="form_line">
          <Checkbox
            label="I agree to the terms and conditions"
            inputRef={agreementRef}
            onInput={handleInputChange}
          />
          {errors.agreement && <div className="form_error">{errors.agreement}</div>}
        </div>
        <div className="form_line">
          <FileUpload label="Upload Image" inputRef={fileRef} onChange={handleFileChange} />
          {errors.imageBase64 && <div className="form_error">{errors.imageBase64}</div>}
        </div>
        <div className="form_line">
          <CountryInput
            label="Country"
            id="country"
            type="text"
            placeholder="enter your country"
            inputRef={countryRef}
            onInput={handleCountryInputChange}
          />
          {errors.country && <div className="form_error">{errors.country}</div>}
          {filteredCountries.length > 0 && (
            <ul className="autocomplete_list">
              {filteredCountries.map((country) => (
                <li
                  key={country}
                  onClick={() => handleCountrySelect(country)}
                  className="autocomplete_item"
                >
                  {country}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="form_submit" type="submit" disabled={!isFormComplete}>
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
