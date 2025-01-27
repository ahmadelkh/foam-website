import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import CountUp from "react-countup";
import { FaSmile, FaClock, FaCheckCircle } from "react-icons/fa"; // Import icons

const CountersSection = () => {
  const { t } = useTranslation(); // Initialize translation function
  const [startCounting, setStartCounting] = useState(false); // State to trigger counting
  const countersRef = useRef(null); // Ref to observe the component

  useEffect(() => {
    const element = countersRef.current; // Store the current ref value in a local variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true); // Start counting when visible
          observer.disconnect(); // Stop observing after triggering
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Use the stored ref value
      }
    };
  }, []);

  return (
    <div className="counters" ref={countersRef}>
      <div className="counter-box">
        <div className="icon-circle">
          <FaSmile className="counter-icon" /> {/* Icon for Happy Clients */}
        </div>
        <h2>
          {startCounting ? (
            <CountUp start={0} end={1050} duration={6} />
          ) : (
            "0"
          )}
          +
        </h2>
        <p>{t("happyClients")}</p>
      </div>
      <div className="counter-box">
        <div className="icon-circle">
          <FaClock className="counter-icon" /> {/* Icon for Years of Experience */}
        </div>
        <h2>
          {startCounting ? (
            <CountUp start={0} end={20} duration={6} />
          ) : (
            "0"
          )}
          +
        </h2>
        <p>{t("yearsOfExperience")}</p>
      </div>
      <div className="counter-box">
        <div className="icon-circle">
          <FaCheckCircle className="counter-icon" /> {/* Icon for Orders Completed */}
        </div>
        <h2>
          {startCounting ? (
            <CountUp start={0} end={1080} duration={6} />
          ) : (
            "0"
          )}
          +
        </h2>
        <p>{t("ordersCompleted")}</p>
      </div>
    </div>
  );
};

export default CountersSection;
