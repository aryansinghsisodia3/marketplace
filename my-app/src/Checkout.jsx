import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const total = location.state?.total || 0;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    gender: '',
    deliveryOption: 'standard'
  });

  const deliveryOptions = [
    { id: 'standard', label: 'Standard Delivery (3-5 business days)', price: 0 },
    { id: 'express', label: 'Express Delivery (1-2 business days)', price: 15 },
    { id: 'overnight', label: 'Overnight Delivery (Next day)', price: 25 }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    // Clear cart after successful order
    localStorage.removeItem('cart');
    // Redirect to a success page or home
    navigate('/');
  };

  const getDeliveryPrice = () => {
    const option = deliveryOptions.find(opt => opt.id === formData.deliveryOption);
    return option ? option.price : 0;
  };

  const finalTotal = total + getDeliveryPrice();

  const showAlert = () => {
    if(formData.firstName && formData.lastName && formData.email && formData.phone && formData.address && formData.city && formData.state && formData.zipCode && formData.gender){
      alert("Order Placed");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      
      <div className="checkout-content">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-group">
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="form-group">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <h2>Shipping Address</h2>
            <div className="form-group">
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Street Address"
                required
              />
            </div>

            <div className="form-group address-group">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                required
              />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="State"
                required
              />
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="ZIP Code"
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h2>Delivery Options</h2>
            <div className="delivery-options">
              {deliveryOptions.map(option => (
                <div className="delivery-option" key={option.id}>
                  <input
                    type="radio"
                    id={option.id}
                    name="deliveryOption"
                    value={option.id}
                    checked={formData.deliveryOption === option.id}
                    onChange={handleInputChange}
                  />
                  <label htmlFor={option.id}>
                    {option.label}
                    <span className="delivery-price">
                      {option.price === 0 ? 'FREE' : `$${option.price.toFixed(2)}`}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery:</span>
              <span>${getDeliveryPrice().toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <button type="submit" onClick={showAlert} className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout; 