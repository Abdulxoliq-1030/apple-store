import "../login.scss";

const Input = ( { userName, userStreetName, userCity, userState, userCountry } ) => {
  return (
    <div className="control">
      <label>Shipping Name</label>
      <input ref={userName} required type="text" placeholder="John Maker" />
      <label>Street Name</label>
      <input ref={userStreetName} required type="text" placeholder="123 Plae Grond Stret" />
      <label>City</label>
      <input ref={userCity} required type="text" placeholder="Vermont" />
      <label>State / Province</label>
      <input ref={userState} required type="text" placeholder="California" />
      <label>Country</label>
      <input ref={userCountry} required type="text" placeholder="United States of America" />
    </div>
  );
};

export default Input;
