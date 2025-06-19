import { useState } from "react";

export const BasicMore = () => {
  const [className, setClassName] = useState("red");
  const [isChecked, setIsChecked] = useState(false);
  const background = className === "red" ? "bg-red-500" : "bg-blue-500";

  const handleChangeCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  const handleChangeName = () => {
    setClassName((prev) => (prev === "red" ? "blue" : "red"));
  };

  return (
    <div>
      <button
        disabled={isChecked}
        className={background}
        onClick={handleChangeName}
      >
        Change to {className === "red" ? "blue" : "red"}
      </button>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChangeCheckbox}
        id="checkbox"
      />
      <label htmlFor="checkbox">Disable button</label>
    </div>
  );
};
