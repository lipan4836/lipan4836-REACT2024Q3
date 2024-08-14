import { useRef, useState } from 'react';
import '../../styles/Form.scss';
import Checkbox from './Checkbox';
import RadioGroup from './RadioGroup';
import TextInput from './TextInput';
import FileUpload from './FileUpload';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formValues = {
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

    console.log(
      `submit value:\nname - ${formValues.name},\nage - ${formValues.age},\ne-mail - ${formValues.email},\npass1 - ${formValues.pass1},\npass2 - ${formValues.pass2},\ngender - ${formValues.gender},\nagreement - ${formValues.agreement},\ncountry - ${formValues.country},\nfile - ${formValues.imageBase64}`,
    );
  };

  return (
    <main className="main">
      <h2>Uncontrolled Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          id="name"
          type="text"
          placeholder="enter your name"
          inputRef={nameRef}
          required
        />
        <TextInput
          label="Age"
          id="age"
          type="text"
          placeholder="enter your age"
          inputRef={ageRef}
          required
        />
        <TextInput
          label="e-mail"
          id="email"
          type="email"
          placeholder="enter your e-mail"
          inputRef={emailRef}
          required
        />
        <TextInput
          label="Password"
          id="password1"
          type="password"
          placeholder="enter your password"
          inputRef={pass1Ref}
          required
        />
        <TextInput
          label="Confirm Password"
          id="password2"
          type="password"
          placeholder="confirm password"
          inputRef={pass2Ref}
          required
        />
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
        <Checkbox label="I agree to the terms and conditions" inputRef={agreementRef} required />
        <FileUpload label="Upload Image" inputRef={fileRef} onChange={handleFileChange} required />
        <TextInput
          label="Country"
          id="country"
          type="text"
          placeholder="enter your country"
          inputRef={countryRef}
          required
        />
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
