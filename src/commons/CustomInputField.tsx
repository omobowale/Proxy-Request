function CustomInputField({
  type,
  placeholder,
  name,
  label,
}: {
  type: string;
  placeholder?: string;
  name: string;
  label: string;
}) {
  return (
    <div className="text-left mb-4">
      <label className="font-[500] mb-4">{label}</label>
      <input
        type={type}
        placeholder={placeholder ? placeholder : "Enter " + name }
        name={name}
        className="w-full mt-2 border border-gray outline-none p-2 rounded-[5px]"
      />
    </div>
  );
}

export default CustomInputField;
