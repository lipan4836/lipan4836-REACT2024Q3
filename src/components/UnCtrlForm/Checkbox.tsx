import '../../styles/Form.scss';

interface CheckboxProps {
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
  required?: boolean;
}

function Checkbox({ label, inputRef, required }: CheckboxProps) {
  return (
    <div className="form_line-wrap">
      <label className="form_label">{label}</label>
      <input type="checkbox" className="form_checkbox" ref={inputRef} required={required} />
    </div>
  );
}

export default Checkbox;
