import React , { useEffect , useState } from 'react';
import axios from 'axios';





const MenuandPricing = () => {
    const CakeItem = ({ image, price, name, description, quantityAvailable,  }) => (
        <div className="col-lg-6">
            <div className="d-flex h-100">
                <div className="flex-shrink-0">
                    <h6 className='price-item'>{quantityAvailable}</h6>
                    <img className="img-fluid" src={image} alt="" style={{ width: '160px', height: '120px' }} />
                    <h4 className="bg-dark text-primary p-2 m-0">${price}</h4>
                </div>
                <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                    <h5 className="text-uppercase">{name}</h5>
                    
                    <span>{description}</span>
                </div>
            </div>
        </div>
    );
    
    const TabContent = ({ tabId, items }) => (
        <div id={tabId} className={`tab-pane fade show p-0 ${tabId === 'tab-1' ? 'active' : ''}`}>
            <div className="row g-3">
                {items.map((item, index) => (
                    <CakeItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
    const [birthday, setBirthday] = useState([]);
    
      useEffect(() => {
        axios.get('http://localhost:5000/products/category/Birthday')
          .then(response => {
            setBirthday(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
      const [wedding, setWedding] = useState([]);
    
      useEffect(() => {
        axios.get('http://localhost:5000/products/category/Wedding')
          .then(response => {
            setWedding(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

      const [party, setParty] = useState([]);
    
      useEffect(() => {
        axios.get('http://localhost:5000/products/category/Party')
          .then(response => {
            setParty(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    const tabs = [
        { id: 'tab-1', title: 'Birthday', items: birthday },
        { id: 'tab-2', title: 'Wedding', items: wedding },
        { id: 'tab-3', title: 'Party', items: party },
    ];

    return (
        <div className="container-fluid about py-5">
            <div className="container">
                <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: '600px' }}>
                    <h2 className="text-primary font-secondary">Menu & Pricing</h2>
                    <h1 className="display-4 text-uppercase">Explore Our Cakes</h1>
                </div>
                <div className="tab-class text-center">
                    <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase border-inner p-4 mb-5">
                        {tabs.map((tab) => (
                            <li key={tab.id} className="nav-item">
                                <a className={`nav-link text-white ${tab.id === 'tab-1' ? 'active' : ''}`} data-bs-toggle="pill" href={`#${tab.id}`}>
                                    {tab.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content">
                        {tabs.map((tab) => (
                            <TabContent key={tab.id} tabId={tab.id} items={tab.items} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuandPricing;
