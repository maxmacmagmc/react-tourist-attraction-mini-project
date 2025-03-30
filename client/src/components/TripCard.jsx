function TripCard({ trip }) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={trip.photos[0]} alt={trip.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">
            <a href={trip.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {trip.title}
            </a>
          </h3>
          <p className="text-sm text-gray-600">
            {trip.description.length > 100 ? trip.description.substring(0, 100) + "..." : trip.description}
          </p>
          <div className="mt-2 flex items-center gap-2">
            {trip.tags.map((tag) => (
              <span key={tag} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            <a href={trip.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              อ่านต่อ
            </a>
            <button
              onClick={() => navigator.clipboard.writeText(trip.url)}
              className="px-2 py-1 bg-blue-500 text-white text-xs rounded"
            >
              คัดลอกลิงก์
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TripCard;
  