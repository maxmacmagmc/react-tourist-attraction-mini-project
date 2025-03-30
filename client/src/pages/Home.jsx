import React, { useState, useEffect } from "react";
import axios from "axios";
import TripList from "../components/TripList";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async (keywords = "") => {
    try {
      const response = await axios.get(`http://localhost:4001/trips?keywords=${keywords}`);
      setTrips(response.data.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  // อัปเดตคำค้นหาและค้นหาใหม่
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    fetchTrips(e.target.value);
  };

  // เมื่อคลิกหมวดหมู่ ให้เพิ่มคำลงในช่องค้นหา
  const handleTagClick = (tag) => {
    const newQuery = searchQuery ? `${searchQuery} ${tag}` : tag;
    setSearchQuery(newQuery);
    fetchTrips(newQuery);
  };

  // คัดลอกลิงก์ไปยัง Clipboard
  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url);
    alert("คัดลอกลิงก์เรียบร้อย!");
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Input ค้นหา */}
      <input
        type="text"
        placeholder="ค้นหาสถานที่ท่องเที่ยว..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* แสดงรายการสถานที่ท่องเที่ยว */}
      <div className="mt-6">
        <TripList trips={trips} onTagClick={handleTagClick} onCopyLink={handleCopyLink} />
      </div>
    </div>
  );
};

export default Home;
