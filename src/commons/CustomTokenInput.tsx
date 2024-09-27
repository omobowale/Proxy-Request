import { useRef, useState } from "react";

function CustomTokenInput({
  type = "number",
  name,
  value,
  numberOfChars = 8,
  label,
  onChange,
}: {
  type?: string;
  name: string;
  label: string;
  numberOfChars?: number;
  value: string;
  onChange?: (data: any) => void;
}) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [index, setIndex] = useState<number>(1);
  const [text, setText] = useState("");

  const handleChange = (val: any, index: number) => {
    console.log("val", val, index);
    if (inputRefs.current[index]) {
      if (val?.toString().length == 1) {
        inputRefs.current[index + 1]?.focus();
        if (onChange) {
          onChange(value + val);
        }
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Backspace") {
      let newString = value.slice(0, -1);
      if (onChange) {
        onChange(newString);
        inputRefs.current[newString.length]?.focus();
      }
    }
    if (event.key == "Delete") {
      let newString = value.slice(0, -1);
      if (onChange) {
        onChange(newString);
        inputRefs.current[newString.length]?.focus();
      }
    }
  };

  return (
    <div className="text-left mb-4">
      {value}
      <label className="font-[500] mb-4">{label}</label>
      <div className="flex gap-2">
        {Array.from({ length: numberOfChars }, (_, i) => i).map(
          (num: number, index: number) => {
            return (
              <input
                type={type}
                maxLength={1}
                value={value[index] ?? ""}
                onKeyDown={handleKeyDown}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-full text-center mt-2 border border-gray outline-none p-2 rounded-[5px]"
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default CustomTokenInput;
