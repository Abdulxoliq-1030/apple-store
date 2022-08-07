import "./shipping-address.scss";

function ShippingAddress({ userData, onPageChange, onInputLabel }) {
  return (
    <div className="shipping">
      <h1>Shipping Address</h1>
      <div className="data-change">
        <ul className="user-data">
          <li>{userData.userName}</li>
          <li>{userData.userStreetName}</li>
          <li>{userData.userCity}</li>
          <li>{userData.userState}</li>
          <li>{userData.userCountry}</li>
        </ul>
        <button onClick={() => (onPageChange("login"), onInputLabel("Save"))}>
          Change
        </button>
      </div>
    </div>
  );
}

export default ShippingAddress;
