import React , {useState} from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import axios from 'axios'
// import { BiPhoneVibrate } from 'react-icons/bi';

function Navbar({changeRc,changehome, changemenu  ,  changemasterchefs ,changecontact , Searches,changesearch  , changeforums}) {

	const [searchText, setSearchText] = useState("");





    const handleSearch = async () => {
		changesearch();
		try {
			if (searchText.trim() === "") {
				console.error("Search text is empty.");
				return;
			}
	
			console.log("Fetching all products.");
			const response = await axios.get(`http://127.0.0.1:5000/products`);
	
			const filteredProducts = response.data.filter((product) => {
				const lowerSearchText = searchText.toLowerCase();
				return (
					product.name.toLowerCase().includes(lowerSearchText) ||
					product.description.toLowerCase().includes(lowerSearchText) ||
					product.price.toLowerCase().includes(lowerSearchText) ||
					product.category.toLowerCase().includes(lowerSearchText)
				);
			});
	
			Searches(filteredProducts);
			console.log("Filtered products:", filteredProducts);
		} catch (error) {
			console.error("Error fetching products:", error.response);
			Searches([]);
		}
	};
	
	
	return (
		<div>
			{/* <div class="container-fluid px-0 d-none d-lg-block">
				<div class="row gx-0">
					<div class="col-lg-4 text-center bg-secondary py-3">
						<div class="d-inline-flex align-items-center justify-content-center">
							<BiEnvelope className="fs-1 text-primary me-3" />
							<div class="text-start">
								<h6 class="text-uppercase mb-1">Email Us</h6>
								<span>Cakini@gmail.com</span>
							</div>
						</div>
					</div>
					<div class="col-lg-4 text-center bg-primary border-inner py-3">
						<div class="d-inline-flex align-items-center justify-content-center">
							<a href="index.html" class="navbar-brand">
								<h1 class="m-0 text-uppercase text-white">
									{" "}
									<FaBirthdayCake className="fs-1 text-dark me-3" />
									CakeZone
								</h1>
							</a>
						</div>
					</div>
					<div class="col-lg-4 text-center bg-secondary py-3">
						<div class="d-inline-flex align-items-center justify-content-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="50"
								height="50"
								style={{ marginRight: "15px" }}
								fill="currentColor"
								class="bi bi-phone-vibrate"
								viewBox="0 0 16 16">
								<path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z" />
								<path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z" />
							</svg>
							<div class="text-start">
								<h6 class="text-uppercase mb-1">Call Us</h6>
								<span>+07775000</span>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			{/* <!-- Topbar End --> */}

			{/* <!-- Navbar Start --> */}
			<nav class="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
				<a href="index.html" class="navbar-brand d-block d-lg-none">
					<h1 class="m-0 text-uppercase text-white">
						<i class="fa fa-birthday-cake fs-1 text-primary me-3"></i>CakeZone
					</h1>
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<div class="navbar-nav ms-auto mx-lg-auto py-0">
						<a href="index.html" class="nav-item nav-link active" 
                        onClick={(event) => {
								event.preventDefault();
								changehome();
							}}
                        >
							Home
						</a>
						{/* <a href="about.html" class="nav-item nav-link">About Us</a> */}
						<a
							href="menu.html"
							className="nav-item nav-link"
							onClick={(event) => {
								event.preventDefault();
								changemenu();
							}}>
							Menu & Pricing
						</a>
						<a
						href="#"
						className="nav-item nav-link"
						onClick={(event) => {
						  event.preventDefault();
						  changemasterchefs();
						}}
					  >
						Master Chefs
					    </a>
						<a href="#" 
						className="nav-item nav-link"
						onClick={(event) => {
						event.preventDefault();
						changecontact();
						}}>
							Contact Us
						</a>
					

						<a
						href="menu.html"
						className="nav-item nav-link"
						onClick={(event) => {
							event.preventDefault();
							changeRc();
						}}>
							tutorials
						</a>
				
							
							
							
							
						



					</div>
				<form className="search-bar" role="search">
                        <input
                          className="form-control me-2 search-input"
                          type="search"
                          placeholder="Type something ..."
                          aria-label="Search"
                          value={searchText}
                          onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button
                        className="btn btn-outline-success search-btn"
                        type="button"  
                        onClick={handleSearch}
						style={{    "min-width":" 100px"}}
                      >
                        Search
                      </button>
                    
                    
                      </form>
				</div>
			</nav>

			{/* hero */}
		
		</div>
	);
}

export default Navbar;