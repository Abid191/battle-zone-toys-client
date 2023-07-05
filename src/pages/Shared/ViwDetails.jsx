import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Helmet } from "react-helmet";

const ViwDetails = () => {
  const toyData = useLoaderData();
  console.log(toyData);
  const {
    pictureURL,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    subCategory,
    availableQuantity,
    detailDescription,
  } = toyData;

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center lg:justify-between mx-4 lg:mx-auto py-8 lg:py-12">
      <Helmet>
        <title>Battle Zone Toys | View Details</title>
      </Helmet>
      <div className="w-full lg:w-1/2">
        <img
          src={pictureURL}
          alt={name}
          className="w-full md:max-w-sm mx-auto h-auto rounded-lg shadow-lg mb-6 lg:mb-0"
        />
        <div className="mb-6 text-center mt-4">
          <h2 className="text-3xl font-bold text-gray-600 mb-2">{name}</h2>
          <div className="flex items-center mb-2 justify-center text-xl font-semibold">
            <span className="text-gray-600">Price:</span>
            <span className="text-blue-500 ml-2">${price}</span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:ml-8">
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-600 mb-2">Seller</h3>
          <div className="flex items-center mb-2">
            <span className="text-gray-600">Name:</span>
            <span className="ml-2">{sellerName}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-gray-600">Email:</span>
            <span className="ml-2">{sellerEmail}</span>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-600 mb-2">Rating</h3>
          <div className="flex items-center mb-2 ">
            <p className="text-gray-600">Average:</p>
            <div className="h-5 ml-2">
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar className="h-4 w-4 text-yellow-400" />}
              placeholderSymbol={<FaStar className="h-4 w-4 text-yellow-400" />}
              fullSymbol={<FaStar className="h-4 w-4 text-yellow-400" />}
              readonly
            />
            </div>
            <p className="ml-2">{rating}</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-600 mb-2">Category</h3>
          <div className="flex items-center mb-2">
            <span className="text-gray-600">Sub Category:</span>
            <span className="ml-2 capitalize">{subCategory}</span>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-600 mb-2">Availability</h3>
          <div className="flex items-center mb-2">
            <span className="text-gray-600">Quantity:</span>
            <span className="ml-2">{availableQuantity}</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-600 mb-2">Description</h3>
          <p className="text-gray-600">{detailDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ViwDetails;
