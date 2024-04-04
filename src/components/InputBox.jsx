const InputBox = ({ title }) => {
  return (
    <div className="w-full flex flex-col">
      <p className="text-xs font-light">{title}</p>
      <input
        type="text"
        className="w-full rounded-lg text-sm border border-primary bg-blandGreen p-3 mt-2 outline-green-700"
      />
    </div>
  );
};

export default InputBox;

