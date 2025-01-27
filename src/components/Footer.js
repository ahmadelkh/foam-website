import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import footerBg from "../images/Fomalux.png"; // Adjust the path to your logo

const Footer = () => {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <footer
      className="footer"
      style={{
        // backgroundImage: `url(${footerBg})`, // Background image (uncomment if needed)
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <div className="footer-logo">
            <img src={footerBg} alt={t("footerLogoAlt")} />
          </div>
          <p>{t("footerDescription")}</p>
          <div className="social-icons">
            <a href="https://wa.me/123456789" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com/foamlux"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-contact-section">
          <h3>{t("contactUs")}</h3>
          <p>
            {t("email")}:{" "}
            <a href="mailto:info@fomalux.com">info@fomalux.com</a>
          </p>
          <p>
            {t("phone")}: +123 456 789
          </p>
          <p>
            {t("address")}: Lubumbashi, Congo
          </p>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 FomaLux. {t("allRightsReserved")}</p>
      </div>
    </footer>
  );
};

export default Footer;
