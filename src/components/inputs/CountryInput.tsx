import '../../styles/Form.scss';

interface CountryInputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  inputRef: React.RefObject<HTMLInputElement>;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CountryInput({ label, id, type, placeholder, inputRef, onInput }: CountryInputProps) {
  return (
    <div className="form_line-wrap">
      <label htmlFor={id} className="form_label">
        {label}
      </label>
      <input
        type={type}
        className="form_input"
        id={id}
        placeholder={placeholder}
        ref={inputRef}
        onInput={onInput}
      />
    </div>
  );
}

export default CountryInput;
