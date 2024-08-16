import '../../styles/Form.scss';

interface CheckboxProps {
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
  onInput: () => void;
}

function Checkbox({ label, inputRef, onInput }: CheckboxProps) {
  return (
    <div className="form_line-wrap">
      <label className="form_label">{label}</label>
      <input type="checkbox" className="form_checkbox" ref={inputRef} onInput={onInput} />
    </div>
  );
}

export default Checkbox;
