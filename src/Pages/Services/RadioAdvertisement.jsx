import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import radio1 from "../../Image/radio.jpeg";
import radio2 from "../../Image/radio1.jpg";
import radio3 from "../../Image/radio2.webp";
import radio4 from "../../Image/radio.jpeg";
import radio5 from "../../Image/radio1.jpg";
import radio6 from "../../Image/radio2.webp";
import location from '../../Image/location.png'
import spendcinema from '../../Image/spending.png'

function RadioAdvertisement() {
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
      image: radio1,
      title: "Cinepolis Fun Republic Mall, Screen - 3, Andheri West",
      spend: "₹ 7,00,000Min Spend",
        location:'rohini',
    },
    {
      image: radio2,
      title: "PVR INOX Vishnu Shivam Mall, Screen - 1, Kandivali",
      spend: "₹ 2800 Min Spend",
    },
    {
      image: radio3,
      title: "PVR INOX Phoenix Mall(Mumbai), Screen - 5,",
      spend: "₹ 7,00,000Min Spend",
        location:'rohini',
    },
    {
      image: radio4,
      title: "Cinepolis Fun Republic Mall, Screen - 3, Andheri West",
      spend: "₹ 7,00,000Min Spend",
        location:'rohini',
    },
    {
      image: radio5,
      title: "Carnival Cinemas Sangam Theatre, Screen - 2, Andheri",
      spend: "₹ 7,00,000Min Spend",
        location:'rohini',
    },
    {
      image: radio6,
      title: "PVR INOX Oberoi Mall, Screen - 2, Goregaon",
      spend: "₹ 7,00,000Min Spend",
        location:'rohini',
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
                  Radio <span style={{ color: "black" }}>Advertisement</span>
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
                        htmlFor="cinemaChainSelect"
                        style={{ fontSize: "14px", color: "black" }}
                        className="form-label"
                      >
                        Cinema Chain
                      </label>
                      <select
                        className="form-select"
                        aria-label="Cinema Chain select"
                      >
                        <option selected>Select Cinema Chain</option>
                        {states.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
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
                    <hr />
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

export default RadioAdvertisement;
