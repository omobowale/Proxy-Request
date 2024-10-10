import { ErrorMessage, Field } from "formik";

function CustomInputField({
  type,
  placeholder,
  name,
  label,
  singleLine = false,
}: {
  type: string;
  placeholder?: string;
  name: string;
  label: string;
  singleLine?: boolean;
}) {
  return (
    <div className={`${singleLine ? 'flex' : ""} text-left mb-2`}>
      <div className="w-1/3 flex items-center py-1">
        <label className="font-[500]">{label}</label>
      </div>
      <div className="w-full">
        <Field
          type={type}   
          placeholder={placeholder ? placeholder : "Enter " + name}
          name={name}
          className="w-full border border-gray outline-none p-2 rounded-[5px]"
        />
        <ErrorMessage name={name} component="div" />
      </div>
    </div>
  );
}

export default CustomInputField;
