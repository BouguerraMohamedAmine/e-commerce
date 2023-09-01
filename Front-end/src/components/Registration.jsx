import React, { useState } from 'react';
import axios from 'axios';

function Registration({ auth }) {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    image: '',
    phoneNumber: '',
    city: '',
    

  });

  const [usageType, setUsageType] = useState('buying');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
const usin={using:usageType}
    try {
      const userDataWithUsageType = { ...userData , ...usin };
      const response = await axios.post('http://localhost:5000/users', userDataWithUsageType);
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
    auth();
  };

  return (
    <div className='body-register'>
    <form style={{width:"500px" , "font-family":"monoscope"}}>
    <h2 style={{"margin-bottom":"20PX"}} >Sign Up</h2>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={userData.image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={userData.city}
            onChange={handleInputChange}
          />
          <div>
          <label>Usage Type:</label>
          <div >
            <label style={{"cursor": "pointer"   ,  "font-size": "20px",
            "font-weight": "bold", "margin-top":"8px"}}>
              <input
                type="checkbox"
                name="usageType"
                checked={usageType === 'buying'}
                onChange={handleInputChange}
              />
              Buying
            </label>
            <label style={{"cursor": "pointer"   ,  "font-size": "20px",
            "font-weight": "bold"}}>
              <input
                type="checkbox"
                name="usageType"
                checked={usageType === 'selling'}
                onChange={() => {
                  if (usageType === 'selling') {
                    setUsageType('buying');
                  } else {
                    setUsageType('selling');
                  }
                }}
              />
              Selling
            </label>
          </div>
        </div>
        </div>

        <button onClick={handleRegistration}>Sign Up</button>
      </form>
    </div>
  );
}

export default Registration;
