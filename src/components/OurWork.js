import React from "react";
import { FaBed, FaCouch, FaBuilding, FaTruck, FaRecycle, FaWarehouse } from "react-icons/fa"; // Icons related to foam products
import "../index.css"; // Ensure you add relevant CSS styles

const FoamIndustriesComponent = () => {
  return (
    <section className="industries-section">
      <div className="industries-container">
        {/* Left Section - Text */}
        <div className="industries-text">
          <p className="industries-subtitle">INDUSTRIES WE SERVE</p>
          <h2 className="industries-title">Redefining Comfort Across Domains</h2>
          <p className="industries-description">
            At FomaLux, we deliver premium foam solutions tailored for diverse industries, ensuring comfort, durability, and innovation in every product.
          </p>
        </div>

        {/* Right Section - Boxes */}
        <div className="industries-boxes">
          <div className="industries-box" style={{ backgroundColor: "#b2f0f0" }}>
            <FaBed className="industries-icon" />
            <p className="industries-label">Mattress Manufacturing</p>
          </div>
          <div className="industries-box" style={{ backgroundColor: "#fde293" }}>
            <FaCouch className="industries-icon" />
            <p className="industries-label">Furniture Upholstery</p>
          </div>
          <div className="industries-box" style={{ backgroundColor: "#b9ffde" }}>
            <FaBuilding className="industries-icon" />
            <p className="industries-label">Construction & Insulation</p>
          </div>
          <div className="industries-box" style={{ backgroundColor: "#fccb93" }}>
            <FaTruck className="industries-icon" />
            <p className="industries-label">Logistics & Packaging</p>
          </div>
          <div className="industries-box" style={{ backgroundColor: "#eff59c" }}>
            <FaRecycle className="industries-icon" />
            <p className="industries-label">Eco-Friendly Solutions</p>
          </div>
          <div className="industries-box" style={{ backgroundColor: "#ffc8e1" }}>
            <FaWarehouse className="industries-icon" />
            <p className="industries-label">Warehouse Storage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoamIndustriesComponent;
