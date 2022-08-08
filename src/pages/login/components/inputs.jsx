import { Fragment } from "react";
import "../login.scss";

const Inputs = ({userName,userStreetName,userCity,userState,userCountry,inputLabel }) => {
  
  const inputs = [
    {
      label: "Shipping Name",
      ref: userName,
      placeholder: "John Maker",
    },
    {
      label: "Street Name",
      ref: userStreetName,
      placeholder: "123 Plae Grond Stret",
    },
    {
      label: "City",
      ref: userCity,
      placeholder: "Vermont",
    },
    {
      label: "State / Province",
      ref: userState,
      placeholder: "California",
    },
    {
      label: "Country",
      ref: userCountry,
      placeholder: "United States of America",
    },
  ];

  return (
    <div className="control">
      {inputs.map((input, idx) => (
        <Fragment key={idx}>
          <label>{input.label}</label>
          <input
            ref={input.ref}
            required
            type="text"
            placeholder={input.placeholder}
          />
        </Fragment>
      ))}

      <button>{inputLabel}</button>
    </div>
  );
};

export default Inputs;
