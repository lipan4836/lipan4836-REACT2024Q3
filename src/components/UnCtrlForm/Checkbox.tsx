import '../../styles/Form.scss';

interface CheckboxProps {
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

function Checkbox({ label, inputRef }: CheckboxProps) {
  return (
    <div className="form_line-wrap">
      <label className="form_label">{label}</label>
      <input type="checkbox" className="form_checkbox" ref={inputRef} />
    </div>
  );
}

export default Checkbox;
