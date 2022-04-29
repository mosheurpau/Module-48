import React, { useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneNumberdBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, address, phone };
    console.log(shipping);
  };

  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Your Shipping Information</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                onBlur={handleNameBlur}
                type="text"
                name="name"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input
                value={user?.email}
                readOnly
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input
                onBlur={handleAddressBlur}
                type="text"
                name="address"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone-number">Phone Number</label>
              <input
                onBlur={handlePhoneNumberdBlur}
                type="text"
                name="phone"
                id=""
                required
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <input className="form-submit" type="submit" value="Add Shipping" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
