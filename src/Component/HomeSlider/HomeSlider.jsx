import React, { useEffect, useState } from "react";
import "../HomeSlider/home.css";
import cinemaicon from "../../Image/cinema-icon.png";
import advertise from "../../Image/advertising-icon.png";
import { Link } from "react-router-dom";
import india from '../../Image/india.png'
import mumbai from '../../Image/mumbai.png'
import bangalore from '../../Image/bangalore.png'
import chennai from '../../Image/chennai.png'
import hyderabad from '../../Image/hyderabad.png'
import Kolkata from '../../Image/kolkata.png'
function HomeSlider() {
  const stateData = [
    { name: "Delhi", picture: india },
    { name: "Mumbai", picture: mumbai },
    { name: "Bangalore", picture: bangalore },
    { name: "Chennai", picture: chennai },
    { name: "Kolkata", picture: Kolkata },
    { name: "Hyderabad", picture: hyderabad },
  ];
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const suggestions = [
    "Search near cinema",
    "Search hoarding near you",
    "Search cinema in Delhi",
    "Search cinema in Mumbai",
    "Search cinema in Benglore",
  ];

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };
  useEffect(() => {
    const root = document.documentElement;

    const handleMouseMove = (evt) => {
      let x = evt.clientX / window.innerWidth;
      let y = evt.clientY / window.innerHeight;

      root.style.setProperty("--mouse-x", x - 0.5);
      root.style.setProperty("--mouse-y", y - 0.5);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="homeback">
        <div>
          <div className="container">
            <div>
              <div className="homeHeading">
                <h1> Selecting the right media for your business success !</h1>
                <h3>Plane Your Advertisement</h3>
                <div className="input-group" style={{ position: "relative" }}>
                  <input
                    type="text"
                    style={{ border: "none", borderRadius: "2rem" }}
                    className="form-control"
                    placeholder="Search Channel Media"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() =>
                      setTimeout(() => setShowSuggestions(false), 100)
                    }
                  />
                  &nbsp;
                  <div className="input-group-append">
                    <span className="input-group-text">
                      Search &nbsp;
                      <i className="bi bi-search"></i>
                    </span>
                  </div>
                  {showSuggestions && (
                    <ul
                      className="list-group"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        width: "100%",
                        zIndex: 1,
                      }}
                    >
                      {suggestions
                        .filter((suggestion) =>
                          suggestion
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                        )
                        .map((suggestion, index) => (
                          <li
                            key={index}
                            className="list-group-item"
                            onMouseDown={() =>
                              handleSuggestionClick(suggestion)
                            }
                          >
                            {suggestion}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="workingcard">
        <Link to={"/cinema"}>
          <div class="card">
            <div class="card-black card-content">
              <div className="mb-0">
                <img src={cinemaicon} width={"20%"} alt="" />
              </div>
              <h3>Cinema</h3>
            </div>
          </div>
        </Link>
        <Link to={"/hoarding"}>
          <Link to={"/outdoor-hoardings"}>
            <div class="card">
              <div class="card-black card-content">
                <div className="mb-0">
                  <img src={advertise} width={"20%"} alt="" />
                </div>
                <h3>Hoardings</h3>
              </div>
            </div>
          </Link>
        </Link>
      </div>
      <div className="container mt-4">
        <div className="row">
          {stateData.map((state, index) => (
            <div className="col-6 col-md-2 mb-4" key={index}>
              <div className="statesforhomepage text-center">
                <div className="card-body">
                  <img className="mb-2" src={state.picture} alt="" />
                  <h5 className="card-title">{state.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeSlider;
