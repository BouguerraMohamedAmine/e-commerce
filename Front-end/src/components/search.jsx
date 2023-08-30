import React from 'react';

function Search({ searchResults }) {
    console.log(searchResults);
    
    return (
        <div>
            {searchResults.length === 0 ? (
                <h1 className="display-4 text-uppercase" style={{ textAlign: "center", marginTop: "50px" }}>No result was found</h1>
            ) : (
                <div className="tab-content" style={{"margin-top":"50px","margin-left":"30px"}}>
                    <div className="row g-3">
                        {searchResults.map((item) => (
                            <div className="col-lg-6" key={item.id}>
                                <div className="d-flex h-100">
                                    <div className="flex-shrink-0">
                                        <h6 className="price-item">{item.quantityAvailable}</h6>
                                        <img
                                            className="img-fluid"
                                            src={item.image}
                                            alt=""
                                            style={{ width: '160px', height: '120px' }}
                                        />
                                        <h4 className="bg-dark text-primary p-2 m-0">${item.price}</h4>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                                        <h5 className="text-uppercase">{item.name}</h5>
                                        <span>{item.description}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Search;
