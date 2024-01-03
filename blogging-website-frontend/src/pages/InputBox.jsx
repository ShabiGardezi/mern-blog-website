import React, { useState } from "react";

function InputBox({ id, name, value, placeholder, type, icon }) {
  const [passwordVisibity, setPasswordVisibity] = useState(false);
  return (
    <div className="relative w-[100%] mb-4">
      <input
        id={id}
        name={name}
        value={value}
        type={
          type == "password" ? (passwordVisibity ? "text" : "password") : type
        }
        defaultValue={value}
        placeholder={placeholder}
        className="input-box"
      />
      <i className={"fi " + icon + " input-icon"}></i>
      {type == "password" ? (
        <i
          className={
            "fi fi-rr-eye" +
            (!passwordVisibity ? "-crossed" : "") +
            " input-icon cursor-pointer left-[90%]"
          }
          onClick={() => setPasswordVisibity((currentValue) => !currentValue)}
        ></i>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputBox;
