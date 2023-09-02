import React from 'react'
import { FaHeartbeat , FaAward } from 'react-icons/fa';
import { FaStar, FaUsers, FaCheck, FaMugHot } from 'react-icons/fa';
import about from "../img/about.jpg";
import AddPost from "./AddPost.jsx"
function Home({user}) {
console.log("inhome",user);
  return (
    <div>
    	<div class="container-fluid bg-primary py-5 mb-5 hero-header">
				<div class="container py-5">
					<div class="row justify-content-start">
						<div class="col-lg-8 text-center text-lg-start">
							<h1 class="font-secondary text-primary mb-4">Super Crispy</h1>
							<h1 class="display-1 text-uppercase text-white mb-4">CakeZone</h1>
							<h1 class="text-uppercase text-white">The Best Cake In London</h1>
							<div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
								<a href="" class=" custom-btn  border-inner py-3 px-5 me-5">
									Read More
								</a>
								<a href="https://www.youtube.com/watch?v=nI2tfHUAN1s"><button
									type="button"
									class="btn-play"
									// data-bs-toggle="modal"
									data-src="https://www.youtube.com/watch?v=nI2tfHUAN1s"
									data-bs-target="#videoModal">
									<span></span>
								</button>
                </a>
								<h5 class="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">
									Play Video
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
   <div className="container-fluid pt-5">
      <div className="container">
        <div
          className="section-title position-relative text-center mx-auto mb-5 pb-3"
          style={{ maxWidth: '600px' }}
        >
          <h2 className="text-primary font-secondary">About Us</h2>
          <h1 className="display-4 text-uppercase">Welcome To CakeZone</h1>
        </div>
        <div className="row gx-5">
          <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100"
                src={about}
                style={{ objectFit: 'cover' , "border-radius":"25px"}}
                alt="About CakeZone"
              />
            </div>
          </div>
          <div className="col-lg-6 pb-5">
            <h4 className="mb-4">
              Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem sed stet labore lorem
              sit clita duo
            </h4>
            <p className="mb-5">
              Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita
              erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet magna
            </p>
            <div className="row g-5">
              <div className="col-sm-6">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                  style={{ width: '90px', height: '90px' , "border-radius": "25px" }}
                >
                 <FaHeartbeat className="text-white" size="2rem" />
                </div>
                <h4 className="text-uppercase">100% Healthy</h4>
                <p className="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor
                  vero
                </p>
              </div>
              <div className="col-sm-6">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4 rounded-25"
                  style={{ width: '90px', height: '90px' , "border-radius": "25px" }}
                >
                  <FaAward className="text-white" size="2rem" />
                </div>
                <h4 className="text-uppercase">Award Winning</h4>
                <p className="mb-0">
                  Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor
                  vero
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
<div className="container-fluid bg-img py-5 mb-5" style={{"margin-top":"30px"}}>
    <div className="container py-5" >
        <div className="row gx-5 gy-4" style={{ flexDirection: 'column' }}>
            {user.using=== 'selling' && <AddPost  />}
        </div>
    </div>
</div>
 
    </div>

  )
}

export default Home