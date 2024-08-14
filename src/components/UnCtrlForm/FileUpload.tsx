import '../../styles/Form.scss';

interface FileInputProps {
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
  onChange: () => void;
  required?: boolean;
}

function FileUpload({ label, inputRef, onChange, required }: FileInputProps) {
  return (
    <div className="form_line-wrap">
      <label htmlFor="file" className="form_label">
        {label}
      </label>
      <input
        type="file"
        className="form_input"
        id="file"
        ref={inputRef}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default FileUpload;
