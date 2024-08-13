import { useRef, useState } from 'react';
import '../../styles/Form.scss';

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

    let name: string = '',
      age: string = '',
      email: string = '',
      pass1: string = '',
      pass2: string = '',
      agreement: boolean = false,
      country: string = '';

    if (nameRef.current) name = nameRef.current.value;
    if (ageRef.current) age = ageRef.current.value;
    if (emailRef.current) email = emailRef.current.value;
    if (pass1Ref.current) pass1 = pass1Ref.current.value;
    if (pass2Ref.current) pass2 = pass2Ref.current.value;
    if (agreementRef.current) agreement = agreementRef.current.checked;
    if (countryRef.current) country = countryRef.current.value;

    console.log(
      `submit value:\nname - ${name},\nage - ${age},\ne-mail - ${email},\npass1 - ${pass1},\npass2 - ${pass2},\ngender - ${gender},\nagreement - ${agreement},\ncountry - ${country},\nfile - ${imageBase64}`,
    );
  };

  return (
    <main className="main">
      <h2>Uncontrolled Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        {/* // name */}
        <div className="form_line-wrap">
          <label htmlFor="name" className="form_label">
            Name
          </label>
          <input
            type="text"
            className="form_input"
            id="name"
            placeholder="enter your name"
            ref={nameRef}
            required
          />
        </div>
        {/* age */}
        <div className="form_line-wrap">
          <label htmlFor="age" className="form_label">
            Age
          </label>
          <input
            type="text"
            className="form_input"
            id="age"
            placeholder="enter your age"
            ref={ageRef}
            required
          />
        </div>
        {/* email */}
        <div className="form_line-wrap">
          <label htmlFor="email" className="form_label">
            e-mail
          </label>
          <input
            type="email"
            className="form_input"
            id="email"
            placeholder="enter your e-mail"
            ref={emailRef}
            required
          />
        </div>
        {/* password 1 */}
        <div className="form_line-wrap">
          <label htmlFor="password1" className="form_label">
            Password
          </label>
          <input
            type="password"
            className="form_input"
            id="password1"
            placeholder="enter your password"
            ref={pass1Ref}
            required
          />
        </div>
        {/* password 2 */}
        <div className="form_line-wrap">
          <label htmlFor="password2" className="form_label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form_input"
            id="password2"
            placeholder="confirm password"
            ref={pass2Ref}
            required
          />
        </div>
        {/* gender */}
        <div className="form_line-wrap">
          <span className="form_label">Gender</span>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={() => setGender('male')}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={() => setGender('female')}
              required
            />
            Female
          </label>
        </div>
        {/* agreement */}
        <div className="form_line-wrap">
          <label className="form_label">I agree to the terms and conditions</label>
          <input type="checkbox" className="form_checkbox" ref={agreementRef} required />
        </div>
        {/* upload image */}
        <div className="form_line-wrap">
          <label htmlFor="file" className="form_label">
            Upload Image
          </label>
          <input
            type="file"
            className="form_input"
            id="file"
            ref={fileRef}
            onChange={handleFileChange}
            required
          />
        </div>
        {/* country selector */}
        <div className="form_line-wrap">
          <label htmlFor="country" className="form_label">
            Country
          </label>
          <input
            type="text"
            className="form_input"
            id="country"
            placeholder="enter your country"
            ref={countryRef}
            required
          />
        </div>
        {/* submit button */}
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
