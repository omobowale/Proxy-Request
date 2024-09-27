function CustomButton({
  label,
  type = "button",
  onClick,
}: {
  label: string;
  type: any;
  onClick?: (data: any) => void;
}) {
  const handleClick = (data: any) => {
    if (type == "button") {
      if (onClick) {
        onClick(data);
      }
    }
  };

  return (
    <div className="mb-4">
      <button
        onClick={handleClick}
        type={type}
        className="w-full mt-2 border outline-none p-2 rounded-[5px] text-white bg-blue"
      >
        {label}
      </button>
    </div>
  );
}

export default CustomButton;
