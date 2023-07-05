/* eslint-disable react/prop-types */

import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CardShopByCategory = ({ category, handleViewDetails }) => {
  const { _id, pictureURL, name, price, rating } = category || {};

  return (
    <div className="p-2 bg-gray-100 border border-gray-200 rounded">
      <div className=" rounded overflow-hidden shadow-xl  ">
        <img src={pictureURL} alt={name} className="w-full h-64 " />

        <div className="px-6 py-4">
          <h3 className="font-bold text-gray-600 text-xl mb-2">{name}</h3>
          <p className="text-gray-700 text-lg font-semibold">${price}</p>

          <div className="flex items-center mt-2 gap-2">
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar className="h-5 w-5 text-yellow-400" />}
              placeholderSymbol={<FaStar className="h-5 w-5 text-yellow-400" />}
              fullSymbol={<FaStar className="h-5 w-5 text-yellow-400" />}
              readonly
            />
            <p className="text-lg text-gray-600 font-medium font-montserrat">
              {rating}
            </p>
          </div>

          <Link to={`/allToys/details/${_id}`}>
            <button
              onClick={() => handleViewDetails(_id)}
              className="button-primary mt-3 "
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardShopByCategory;
