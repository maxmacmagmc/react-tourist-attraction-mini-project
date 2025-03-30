import React from "react";
import { FiCopy } from 'react-icons/fi';

const TripList = ({ trips, onTagClick, onCopyLink }) => {
  return (
    <div className="flex flex-col gap-6">
      {trips.map((trip) => (
        <div
          key={trip.eid}
          className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
        >
          {/* รูปภาพด้านซ้าย */}
          <img
            src={trip.photos[0]}
            alt={trip.title}
            className="w-full md:w-1/3 h-48 object-cover"
          />

          {/* ข้อมูลด้านขวา */}
          <div className="p-4 flex flex-col justify-between flex-1">
            <div>
              {/* ชื่อสถานที่ (ลิงก์เปิดแท็บใหม่) */}
              <a
                href={trip.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {trip.title}
              </a>

              {/* คำอธิบาย (ตัดให้ไม่เกิน 100 ตัวอักษร) */}
              <p className="text-gray-600 mt-2">
                {trip.description.length > 100
                  ? trip.description.substring(0, 100) + "..."
                  : trip.description}
              </p>
              </div>
           {/* หมวดหมู่ (tags) */}
<div className="mt-3 flex justify-between items-center">
  <div className="flex flex-wrap gap-2">
    {trip.tags.map((tag) => (
      <button
        key={tag}
        onClick={() => onTagClick(tag)}
        className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-300 transition"
      >
        {tag}
      </button>
    ))}
  </div>

  {/* ปุ่ม Copy Link */}
  <button
    onClick={() => onCopyLink(trip.url)}
    className="ml-4 flex items-center text-center gap-1 bg-blue-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-blue-600 transition-all"
  >
    <FiCopy /> 
  </button>
</div>

            
          </div>
        </div>
      ))}
    </div>
  );
};

export default TripList;
