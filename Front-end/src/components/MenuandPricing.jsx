import React from 'react';

const CakeItem = ({ imgSrc, price, title, description }) => (
    <div className="col-lg-6">
        <div className="d-flex h-100">
            <div className="flex-shrink-0">
                <img className="img-fluid" src={imgSrc} alt="" style={{ width: '150px', height: '85px' }} />
                <h4 className="bg-dark text-primary p-2 m-0">${price}</h4>
            </div>
            <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                <h5 className="text-uppercase">{title}</h5>
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


const MenuandPricing = () => {
    const tabs = [
        { id: 'tab-1', title: 'Birthday', items: [/* ... */] },
        { id: 'tab-2', title: 'Wedding', items: [/* ... */] },
        { id: 'tab-3', title: 'Custom', items: [/* ... */] },
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
