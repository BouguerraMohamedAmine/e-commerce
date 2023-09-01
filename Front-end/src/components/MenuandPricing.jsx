import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const CakeItem = ({ image, price, name, description, quantityAvailable }) => (
  <div className="col-lg-3 col-md-6 mb-3">
    <div className="team-item">
      <div className="position-relative overflow-hidden">
        <img className="img-fluid w-100" src={image} alt=""/>
        <div className="team-overlay position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-start">
            <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#">
              <FontAwesomeIcon icon={faTwitter} className="fw-normal" />
            </a>
            <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#">
              <FontAwesomeIcon icon={faFacebookF} className="fw-normal" />
            </a>
            <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#">
              <FontAwesomeIcon icon={faLinkedinIn} className="fw-normal" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-dark border-inner text-center p-4" style={{ overflow: "auto", maxHeight: "120px" }}>
        <h4 className="text-uppercase text-primary">{name}</h4>
        <p className="text-white m-0">{description}</p>
      </div>
    </div>
  </div>
);


const MenuandPricing = () => {
  const [birthday, setBirthday] = useState([]);
  const [wedding, setWedding] = useState([]);
  const [party, setParty] = useState([]);



  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const birthdayResponse = await axios.get('http://localhost:5000/products/category/Birthday');
        const weddingResponse = await axios.get('http://localhost:5000/products/category/Wedding');
        const partyResponse = await axios.get('http://localhost:5000/products/category/Party');

        setBirthday(birthdayResponse.data);
        setWedding(weddingResponse.data);
        setParty(partyResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Split the products into three equal parts
  const chunkedBirthday = chunkArray(birthday, 4);
  const chunkedWedding = chunkArray(wedding, 4);
  const chunkedParty = chunkArray(party, 4);

  function chunkArray(arr, chunkSize) {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArr.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArr;
  }

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: '600px' }}>
          <h2 className="text-primary font-secondary">Menu & Pricing</h2>
          <h1 className="display-4 text-uppercase">Explore Our Cakes</h1>
        </div>
        <div className="row g-3">
          {chunkedBirthday.map((row, rowIndex) => (
            <div key={rowIndex} className="row mb-3">
              {row.map((item, index) => (
                <CakeItem key={index} {...item} />
              ))}
            </div>
          ))}
          {chunkedWedding.map((row, rowIndex) => (
            <div key={rowIndex} className="row mb-3">
              {row.map((item, index) => (
                <CakeItem key={index} {...item} />
              ))}
            </div>
          ))}
          {chunkedParty.map((row, rowIndex) => (
            <div key={rowIndex} className="row mb-3">
              {row.map((item, index) => (
                <CakeItem key={index} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuandPricing;
