import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormValuesProps } from '../../types/formValuesProps';
import '../../styles/Form.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFormData } from '../../store/slices/formSlice';
import formValidationSchema from '../../utils/formValidation';

const schema = formValidationSchema;

export function CtrlForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resolver: Resolver<FormValuesProps> = yupResolver(schema);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValuesProps>({
    defaultValues: {
      name: '',
      age: '',
      email: '',
      pass1: '',
      pass2: '',
      gender: '',
      agreement: false,
      country: '',
      imageBase64: '',
    },
    resolver,
  });

  const allFields = watch();
  const isFormFilled = Object.values(allFields).every((value) => value !== '' && value !== false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setValue('imageBase64', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<FormValuesProps> = (data) => {
    dispatch(addFormData(data));
    navigate('/');
  };

  return (
    <main className="main">
      <h2>Hook Form</h2>

      <form className="hook-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="hook-form_wrap">
          <label className="hook-form_line">
            <span className="hook-form_line__label">Name</span>
            <input
              className="hook-form_line__input"
              {...register('name')}
              placeholder="enter your name"
              type="text"
            />
          </label>
          {errors.name && (
            <p className="hook-form_error" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="hook-form_wrap">
          <label className="hook-form_line">
            <span className="hook-form_line__label">Age</span>
            <input
              className="hook-form_line__input"
              {...register('age')}
              placeholder="enter your age"
              type="text"
            />
          </label>
          {errors.age && (
            <p className="hook-form_error" role="alert">
              {errors.age.message}
            </p>
          )}
        </div>

        <div className="hook-form_wrap">
          <label className="hook-form_line">
            <span className="hook-form_line__label">E-mail</span>
            <input
              className="hook-form_line__input"
              {...register('email')}
              placeholder="enter your e-mail"
              type="email"
            />
          </label>
          {errors.email && (
            <p className="hook-form_error" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="hook-form_wrap">
          <label className="hook-form_line">
            <span className="hook-form_line__label">Password</span>
            <input
              className="hook-form_line__input"
              {...register('pass1')}
              placeholder="enter your password"
              type="password"
            />
          </label>
          {errors.pass1 && (
            <p className="hook-form_error" role="alert">
              {errors.pass1.message}
            </p>
          )}
        </div>

        <div className="hook-form_wrap">
          <label className="hook-form_line">
            <span className="hook-form_line__label">Confirm Password</span>
            <input
              className="hook-form_line__input"
              {...register('pass2')}
              placeholder="confirm your password"
              type="password"
            />
          </label>
          {errors.pass2 && (
            <p className="hook-form_error" role="alert">
              {errors.pass2.message}
            </p>
          )}
        </div>

        <div className="hook-form_line-gender">
          <p className="hook-form_line-gender__label">Gender</p>
          {[
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
          ].map(({ label, value }, index) => (
            <label className="hook-form_line-gender__inputs" key={value + index}>
              <input
                className="hook-form_line-gender__inputs__input"
                {...register('gender')}
                aria-invalid={errors.gender ? 'true' : 'false'}
                value={value}
                type="radio"
              />
              <span className="hook-form_line-gender__inputs__label">{label}</span>
            </label>
          ))}
          {errors.gender && (
            <p className="hook-form_error" role="alert">
              {errors.gender.message}
            </p>
          )}
        </div>

        <div className="hook-form_wrap">
          <label className="hook-form_line">
            <span className="hook-form_line__label">I agree to the terms and conditions</span>
            <input className="hook-form_line__input" type="checkbox" {...register('agreement')} />
          </label>
          {errors.agreement && (
            <p className="hook-form_error" role="alert">
              {errors.agreement.message}
            </p>
          )}
        </div>

        <div className="hook-form_wrap">
          <label className="hook-form_line">
            <span className="hook-form_line__label">Upload Image</span>
            <input className="hook-form_line__input" type="file" onChange={handleFileChange} />
          </label>
          {errors.imageBase64 && (
            <p className="hook-form_error" role="alert">
              {errors.imageBase64.message}
            </p>
          )}
        </div>

        <div className="hook-form_wrap">
          <label className="hook-form_line">
            <span className="hook-form_line__label">Country</span>
            <input
              className="hook-form_line__input"
              {...register('country')}
              placeholder="enter your country"
              type="text"
            />
          </label>
          {errors.country && (
            <p className="hook-form_error" role="alert">
              {errors.country.message}
            </p>
          )}
        </div>

        <button type="submit" disabled={!isFormFilled || isSubmitting}>
          Submit
        </button>
      </form>
    </main>
  );
}

export default CtrlForm;
