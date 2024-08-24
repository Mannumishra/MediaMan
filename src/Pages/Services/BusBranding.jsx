import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bus1 from "../../Image/bus1.jpg";
import bus2 from "../../Image/bus2.jpg";
import bus3 from "../../Image/bus3.jpg";
import bus4 from "../../Image/bus4.jpg";
import bus5 from "../../Image/bus5.jpg";
import bus6 from "../../Image/bus6.jpg";
import location from '../../Image/location.png'
import spendcinema from '../../Image/spending.png'

function BusBranding() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  const delhiCinemas = [
    "PVR Anupam Saket",
    "PVR Select Citywalk",
    "Cinepolis DLF Place",
    "INOX Nehru Place",
    "Carnival Cinemas",
    "DT Cinemas DLF Promenade",
    "M Cinemas",
    "Liberty Cinema",
    "Delite Cinema",
    "Regal Cinema",
    // Add more cinemas as needed
  ];
  const indianCities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
    // Add more cities as needed
  ];
  const states = [
   "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const cinema = [
    {
      image: bus1,
      title: "Cinepolis Fun Republic Mall, Screen - 3, Andheri West",
      location:'rohini',
      spend: "₹ 7,00,000Min Spend",
    },
    {
      image: bus2,
      title: "PVR INOX Vishnu Shivam Mall, Screen - 1, Kandivali",
      location:'rohini',
      spend: "₹ 2800 Min Spend",
    },
    {
      image: bus3,
      title: "PVR INOX Phoenix Mall(Mumbai), Screen - 5,",
      location:'rohini',
      spend: "₹ 7,00,000Min Spend",
    },
    {
      image: bus4,
      title: "Cinepolis Fun Republic Mall, Screen - 3, Andheri West",
      location:'rohini',
      spend: "₹ 7,00,000Min Spend",
    },
    {
      image: bus5,
      title: "Carnival Cinemas Sangam Theatre, Screen - 2, Andheri",
      location:'rohini',
      spend: "₹ 7,00,000Min Spend",
    },
    {
      image: bus6,
      title: "PVR INOX Oberoi Mall, Screen - 2, Goregaon",
      location:'rohini',
      spend: "₹ 7,00,000Min Spend",
    },
  ];
  const truncateTitle = (title) => {
    const words = title.split(' ');
    if (words.length > 4) {
      return `${words.slice(0, 5).join(' ')}...`;
    }
    return title;
  };
  return (
    <>
      <div style={{ borderBottom: "3px solid black" }}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6" style={{ alignItems: "center" }}>
              <div className="filter">
                <h3 style={{ color: "red", textAlign: "start" }}>
                  Airport <span style={{ color: "black" }}>Advertising</span>
                </h3>
                <hr />
              </div>
            </div>
            <div className="col-md-6">
              <div
                onClick={toggleFilter}
                style={{ textAlign: "end", cursor: "pointer" }}
              >
                <p
                  className="addbutton"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <button class="cssbuttons-io">
                    <span>
                      {" "}
                      Filter &nbsp; <i class="bi bi-cart4"></i>{" "}
                    </span>{" "}
                  </button>
                </p>
              </div>

              {isFilterVisible && (
                <div className="col-md-12">
                  <div className="filteration mb-3">
                    <div>
                      <label
                        htmlFor="stateSelect"
                        style={{ fontSize: "14px", color: "black" }}
                        className="form-label"
                      >
                        Select State
                      </label>
                      <select className="form-select" aria-label="State select">
                        <option selected>Select State</option>
                        {states.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="citySelect"
                        style={{ fontSize: "14px", color: "black" }}
                        className="form-label"
                      >
                        Select City
                      </label>
                      <select id="citySelect" className="form-select">
                        <option value="">Select a city</option>
                        {indianCities.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="cinemaSelect"
                        style={{ fontSize: "14px", color: "black" }}
                        className="form-label"
                      >
                        Select Cinema
                      </label>
                      <select id="cinemaSelect" className="form-select">
                        <option value="">Select cinema</option>
                        {delhiCinemas.map((cinema, index) => (
                          <option key={index} value={cinema}>
                            {cinema}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <hr />
            {cinema.map((item) => (
              <div className="col-md-3 mb-4">
                <div className="cinema-card">
                  <img src={item.image} alt="Cinema-image" />
                  <div>
                  <h4>{truncateTitle(item.title)}</h4>
                  <hr style={{margin:'5px'}} />
                    <p className="person">
                    <img src={location} alt="rating" />&nbsp; &nbsp; Location: {item.location}
                    </p>
                    <p className="person">
                    <img src={spendcinema} alt="rating" />&nbsp; &nbsp; {item.spend}
                    </p>
                    {/* <p className="addbutton">
                      <button class="cssbuttons-io">
                        <Link to={"/cart"}>
                          <span>
                            Add To Cart &nbsp;
                            <i class="bi bi-cart4"></i>
                          </span>
                        </Link>
                      </button>
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BusBranding;
