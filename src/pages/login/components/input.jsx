import "../login.scss";

const Input = ({
  onLogin,
  userName,
  userStreetName,
  userCity,
  userState,
  userCountry,
}) => {
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
        <>
          <label>{input.label}</label>
          <input
            ref={input.ref}
            required
            type="text"
            placeholder={input.placeholder}
          />
        </>
      ))}

      <button>Login</button>
    </div>
  );
};

export default Input;
