import '../../styles/Form.scss';

interface TextInputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

function TextInput({ label, id, type, placeholder, inputRef }: TextInputProps) {
  return (
    <div className="form_line-wrap">
      <label htmlFor={id} className="form_label">
        {label}
      </label>
      <input type={type} className="form_input" id={id} placeholder={placeholder} ref={inputRef} />
    </div>
  );
}

export default TextInput;
