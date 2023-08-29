import React from "react";


const Navbar = () => {
  return (
    <div className="navbar-desktop">
      <div className="frame">
        <img className="logo" alt="Logo" src="icons8-logo-1.svg" />
        <div className="text-wrapper">Ecommerce</div>
      </div>
      <div className="group">
        <div className="div">
        <div className="tabler-chevron-down-screen">
        <img className="vector" alt="Vector" src="vector.svg" />
      </div>
            <div className="ph-magnifying-glass-wrapper">
          <div className="ph-magnifying-glass">
          <img className="vector" alt="Vector" src="vector.svg" />
        </div>
              </div>
          <img className="line" alt="Line" src="line-1.svg" />
          <div className="text-wrapper-2">Categories</div>
          <p className="p">I’m Shopping for. . .</p>
        </div>
      </div>
      <div className="frame-2">
        <div className="frame-3">
        <button className="fluent-cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
      </svg>
            </button>
            <button className="text-wrapper-3">Cart</button>
          <div className="div-wrapper">
            <div className="text-wrapper-4">3</div>
          </div>
        </div>
        <div className="frame-3">
        <div className="ph-heart-screen">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg>
            </div>
            <div className="text-wrapper-3">Wishlist</div>
        </div>
        <button className="radius">
          <div className="text-wrapper-5">Sign In
          <button></button>
          </div>
        </button>
      </div>
    </div>
  );
};



    export default Navbar;