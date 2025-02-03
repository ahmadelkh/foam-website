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
            imageURL: formatGoogleDriveLink(data.imageURL), // Fix image links
          };
        });

        console.log("Fetched items:", items); // Debugging
        setCatalogueItems(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCatalogue();
  }, []);

  const formatGoogleDriveLink = (url) => {
    if (url.includes("drive.google.com/file/d/")) {
      const fileId = url.split("/d/")[1].split("/view")[0];
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
    return url; // Return the original if it's already in correct format
  };
  

  return (
    <section id="our-catalogue" className="catalogue-container">
      <h2 className="catalogue-title">Our Catalogue</h2>
      <div className="catalogue-grid">
        {catalogueItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="catalogue-item"
            
 initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
             <img 
    src={item.imageURL} 
    alt={item.name} 
    className="catalogue-image"
    onError={(e) => { 
      console.error("Image failed to load:", item.imageURL); 
      e.target.onerror = null; 
      e.target.src = "https://via.placeholder.com/300"; 
    }} 
  />
            <div className="catalogue-info">
              <h3>{item.name}</h3>
              <p>${
              item.price}</p>
           </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurCatalogue;