import '../../styles/Form.scss';

interface TextInputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  inputRef: React.RefObject<HTMLInputElement>;
  onInput: () => void;
}

function TextInput({ label, id, type, placeholder, inputRef, onInput }: TextInputProps) {
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

export default TextInput;
