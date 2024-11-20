import React from "react";
import { Link } from "react-router-dom";
// import {}

const PetPreviewCard = ({name, age, image, id}) => {
  const petDetailLink = `${PET_DETAILS}/${id}`;

  return (
    <div className="bg-white shadow-md w-full max-w-md md:max-w-4xl rounded-xl mx-auto mb-4">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-64 flex-shrink-0">
          <img
            src={image}
            alt={`Image of ${name}`}
            className="w-full h-full object-cover rounded-t-xl md:rounded-none md:rounded-l-xl"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-sm text-gray-700 mb-4">Age: {age} years</p>
          {showDetail ? (
            <Link to={petDetailLink}>
              <button className="bg-primary-3 px-4 py-2 rounded-lg text-white text-sm hover:bg-primary-2">
                View Details
              </button>
            </Link>
          ) : (
            <button className="bg-gray-300 px-4 py-2 rounded-lg text-sm cursor-not-allowed">
              Not Available
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetPreviewCard;