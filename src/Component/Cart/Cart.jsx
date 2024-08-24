import React, { useEffect, useState } from "react";
import "./cart.css";
import logo from "../../Image/logo.png";
import cart from "../../Image/shopping-cart.gif";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Cart() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);

  const handleRemove = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const money = item.money ? item.money.toString() : "0";
        const price = parseFloat(money.replace(/[^\d.-]/g, "")) || 0;
        const quantity = item.quantity || 1;
        return total + price * quantity;
      }, 0)
      .toFixed(2);
  };

  const handleSubmit = async (e) => {
    if (!name || !email || !phone) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setLoading(true);
    // e.preventDefault();

    try {
      const cinemaItems = cartItems.filter((item) => item.type === "cinema");
      const hoadingItems = cartItems.filter((item) => item.type === "outdoor");
      
      if (cinemaItems.length > 0) {
        const cinemaData = {
          name,
          email,
          phone,
          state,
          message,
          item: cinemaItems.map((item) => ({
            cinemaName: item.cinema || "",
            category: item.category || "",
            state: item.state || "",
            city: item.city || "",
            screen: item.audi || "",
            seating: item.seatingCapacity || "",
            money: item.baseRate10SecWeek || "",
            image: item.image || "",
            type: item.type || "cinema",
          })),
        };
        await axios.post("http://localhost:8000/api/cinemaCart", cinemaData);
      }

      if (hoadingItems.length > 0) {
        const hoadingData = {
          name,
          email,
          phone,
          state,
          message,
          hoadingcart: hoadingItems.map((item) => ({
            media: item.media || "",
            state: item.state || "",
            city: item.city || "",
            location: item.location || "",
            width: item.width || "",
            height: item.height || "",
            rpm: item.rpm || "",
            amount: item.total || "", // Ensure this matches the schema
            image: item.image || "",
            type: item.type || "outdoor",
          })),
        };
        console.log(hoadingData); // Debug log
        await axios.post("http://localhost:8000/api/hoadingcart", hoadingData);
      }
      
      localStorage.removeItem("cartItems");
      toast.success("Enquiry submitted successfully.");
      window.location.href='/cart'
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="cart-section">
      <div className="cart-container">
        <div className="container">
          <div className="mb-5">
            <h2>Media Man Cart</h2>
            <hr />
          </div>
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-container">
                <div className="empty-cart-content">
                  <img src={cart} width={"30%"} alt="Empty Cart" />
                  <h2>Your Cart is Empty</h2>
                  <p>Looks like you haven't added anything to your cart yet.</p>
                  <Link to="/cinema" className="shop-now-btn">
                    Add item
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <table id="cart" className="table table-hover table-condensed">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Type</th>
                  {cartItems[0]?.type === "cinema" ? (
                    <>
                      <th>Cinema Name</th>
                      <th>Category</th>
                      <th>Seating</th>
                      <th>Screen</th>
                      <th>State</th>
                      <th>City</th>
                      <th>Price</th>
                    </>
                  ) : (
                    <>
                      <th>Media</th>
                      <th>State</th>
                      <th>City</th>
                      <th>Location</th>
                      <th>Width</th>
                      <th>Height</th>
                      <th>RPM</th>
                      <th>Amount</th>
                    </>
                  )}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td data-th="Image">
                      <img
                        src={item.image}
                        alt="Item"
                        className="img-responsive"
                        style={{ height: "100px" }}
                      />
                    </td>
                    <td data-th="Type">
                      {item.type === "cinema" ? "Cinema" : "outdoor"}
                    </td>
                    {item.type === "cinema" ? (
                      <>
                        <td data-th="Cinema Name">{item.cinema}</td>
                        <td data-th="Category">{item.category}</td>
                        <td data-th="Seating">{item.seatingCapacity}</td>
                        <td data-th="Screen">{item.audi}</td>
                        <td data-th="State">{item.state}</td>
                        <td data-th="City">{item.city}</td>
                        <td data-th="Price">{item.baseRate10SecWeek} Rs.</td>
                      </>
                    ) : (
                      <>
                        <td data-th="Media">{item.media}</td>
                        <td data-th="State">{item.state}</td>
                        <td data-th="City">{item.city}</td>
                        <td data-th="Location">{item.location}</td>
                        <td data-th="Width">{item.width}W</td>
                        <td data-th="Height">{item.height}H</td>
                        <td data-th="RPM">{item.rpm}</td>
                        <td data-th="Amount">{item.total} Rs.</td>
                      </>
                    )}
                    <td className="actions" data-th="">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemove(index)}
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <Link to="/cinema" className="btn btn-warning">
                      <i className="fa fa-angle-left"></i> Continue Shopping
                    </Link>
                  </td>
                  <td colSpan="5" className="hidden-xs"></td>
                  <td className="hidden-xs text-center">
                    {/* <strong>Total {calculateTotal()} Rs.</strong> */}
                  </td>
                  <td>
                    <button
                      className="btn btn-success btn-block"
                      data-bs-toggle="modal"
                      data-bs-target="#enquiryModal"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Enquiry"}{" "}
                      <i className="fa fa-angle-right"></i>
                    </button>
                    <div
                      className="modal fade"
                      id="enquiryModal"
                      aria-hidden="true"
                      aria-labelledby="enquiryModalLabel"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="enquiryModalLabel">
                              Enquiry Form
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <input
                              type="text"
                              className="form-control modalInput"
                              placeholder="Enter Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                            <input
                              type="email"
                              className="form-control modalInput"
                              placeholder="Enter Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                            <input
                              type="tel"
                              className="form-control modalInput"
                              placeholder="Enter Phone Number"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              required
                            />
                             <input
                              type="tel"
                              className="form-control modalInput"
                              placeholder="Enter State Or city"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                              required
                            />
                            <textarea
                              className="form-control modalInput"
                              rows="3"
                              placeholder="Enter Your Message (Optional)"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              required
                            ></textarea>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={handleSubmit}
                              disabled={loading}
                            >
                              {loading ? "Submitting..." : "Submit"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    </section>
  );
}

export default Cart;
