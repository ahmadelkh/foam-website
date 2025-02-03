import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig"; // Ensure correct import
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import "../index.css";

const OurCatalogue = () => {
  const [catalogueItems, setCatalogueItems] = useState([]);

  // Fetch catalogue items from Firestore
  useEffect(() => {
    const fetchCatalogue = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "catalogue"));
        const items = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            price: data.price,
            imageURL: formatGoogleDriveLink(data.imageURL),
          };
        });

        setCatalogueItems(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCatalogue();
  }, []);

  // 🔥 Function to format Google Drive links correctly
  const formatGoogleDriveLink = (url) => {
    if (!url) return ""; // Prevents errors if URL is missing

    if (url.includes("drive.google.com/file/d/")) {
      const fileId = url.split("/d/")[1].split("/view")[0];
      return `https://lh3.googleusercontent.com/d/${fileId}`; // Faster Google CDN
    }

    return url; // Return the original if already correct
  };

  return (
    <section id="our-catalogue" className="catalogue-container">
      <h2 className="catalogue-title">Our Catalogue</h2>

      {/* Auto-Scrolling Slider */}
      <div className="catalogue-slider">
        <motion.div 
          className="catalogue-grid"
          animate={{ x: ["0%", "-100%"] }} // Move from right to left
          transition={{ ease: "linear", duration: 20, repeat: Infinity }} // Infinite scrolling
        >
          {/* Duplicate items for smooth infinite loop */}
          {[...catalogueItems, ...catalogueItems].map((item, index) => (
            <motion.div
              key={index}
              className="catalogue-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="image-container">
                <img 
                  src={item.imageURL} 
                  alt={item.name} 
                  className="catalogue-image"
                  referrerPolicy="no-referrer"
                  onError={(e) => { 
                    console.error("Image failed to load:", e.target.src); 
                    e.target.onerror = null; 
                    e.target.src = "https://dummyimage.com/300x200/cccccc/000000&text=No+Image"; 
                  }} 
                />
              </div>
              <div className="catalogue-info">
                <h3>{item.name}</h3>
                <p className="price">${item.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurCatalogue;
