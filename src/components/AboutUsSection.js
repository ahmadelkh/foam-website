import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import { FaClipboardCheck, FaUsers } from "react-icons/fa"; // Example icons

const AboutUsSection = () => {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <section className="about-us">
      <div className="about-us-header">
        <p className="subheading">{t("ourJourneyToComfort")}</p>
        <h2>{t("aboutUs")}</h2>
        <p className="description">{t("aboutUsDescription1")}</p>
      </div>

      <div className="about-us-content">
        <div className="about-us-item">
          <div className="about-us-icon">
            <FaClipboardCheck />
          </div>
          <div>
            <h3>{t("yourComfortPriority")}</h3>
            <p>{t("aboutUsDescription2")}</p>
          </div>
        </div>
        <div className="about-us-item">
          <div className="about-us-icon">
            <FaUsers />
          </div>
          <div>
            <h3>{t("ourTeamOfExperts")}</h3>
            <p>{t("teamDescription")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
