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
			

			{/* <!-- Navbar Start --> */}
			<nav class="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
				
				<FaBirthdayCake className="logo fs-1 text-lgiht me-3" />

				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse" style={{"text-transform": "lowercase"}}>

				<div class="navbar-nav ms-auto mx-lg-auto py-0" style={{"text-transform": "lowercase"}}>
	
				<a href="index.html" class="nav-item nav-link " 
                        onClick={(event) => {
								event.preventDefault();
								changehome();
							}}
                        style={{"text-transform": "math-auto"
					}}>
							Home
						</a>
						{/* <a href="about.html" class="nav-item nav-link">About Us</a> */}
						<a
							href="menu.html"
							className="nav-item nav-link"
							onClick={(event) => {
								event.preventDefault();
								changemenu();
							}}style={{"text-transform": "math-auto"
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
						style={{"text-transform": "math-auto"
					}}>
						Master Chefs
					    </a>
						<a href="#" 
						className="nav-item nav-link"
						onClick={(event) => {
						event.preventDefault();
						changecontact();
						}}style={{"text-transform": "math-auto"
					}}>
							Contact Us
						</a>
					

						<a
						href="menu.html"
						className="nav-item nav-link"
						onClick={(event) => {
							event.preventDefault();
							changeRc();
						}}style={{"text-transform": "math-auto"
					}}>
							Tutorials
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
                        className="custom-btn search-btn"
                        type="button"  
                        onClick={handleSearch}
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