type Props = {
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  customClass?: string;
};

const Input = ({
  type,
  label,
  onChange,
  value,
  placeholder,
  customClass,
}: Props) => {
  const inputName = label.replace(" ", "").toLocaleLowerCase();

  return (
    <div className={`grid ${customClass}`}>
      <label htmlFor={inputName} className="font-bold">
        {label}
      </label>
      <input
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : label}
        required
        value={value}
        name={inputName}
        onChange={onChange}
        className="border-b-2 outline-none border-[#8D8D8D]"
      />
    </div>
  );
};

export default Input;
