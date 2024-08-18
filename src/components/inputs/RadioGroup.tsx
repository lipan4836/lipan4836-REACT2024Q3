import '../../styles/Form.scss';

interface RadioGroupProps {
  label: string;
  options: { value: string; label: string }[];
  name: string;
  selectedValue: string | null;
  onChange: (value: string) => void;
}

function RadioGroup({ label, options, name, selectedValue, onChange }: RadioGroupProps) {
  return (
    <div className="form_line-wrap">
      <span className="form_label">{label}</span>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default RadioGroup;
