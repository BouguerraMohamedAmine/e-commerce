import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductItem = ({ product }) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-grid3">
        <div className="product-image3">
          <a href="#">
            <img className="pic-2" src={product.image} alt={product.title} />
            <img className="pic-1" src={product.image} alt={product.title} />
          </a>
          <ul className="social">
            <li><a href="#"><i className="fa fa-eye"></i></a></li>
            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
          </ul>
          <span className="product-new-label">New</span>
        </div>
        <div className="product-content">
          <h3 className="title"><a href="#">{`${product.name}`}</a></h3>
          <div className="price">
            {`$${product.price}`}
          </div>
          <ul className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <li key={i} className={`fa fa-star${i >= product.rating ? ' enable' : ''}`}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

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

  return (
    <div className="products-wrapper" style={{"margin-top" : "90px" }}>
      <div className="row" >
        {birthday.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
        {wedding.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
        {party.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MenuandPricing;
