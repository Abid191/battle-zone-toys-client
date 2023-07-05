import {
  FaClock,
  FaHeadset,
  FaCreditCard,
  FaShippingFast,
} from "react-icons/fa";
import { keyframes, styled } from "styled-components";
const Services = () => {
  const moveCar = keyframes`
  0% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(0%);
  }
`;
  const AnimatedFaShippingFast = styled(FaShippingFast)`
    animation: ${moveCar} 2s linear;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  `;
  return (
    <>
      <div className="bg-blue-500 py-10 rounded">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <FaClock className="text-3xl text-blue-500 mb-4 mx-auto" />
              <h2 className="text-xl font-bold text-gray-700 mb-3">
                On-time Delivery
              </h2>
              <p className="text-sm text-gray-600">
                Prompt and on-time delivery for your orders, ensuring you can
                start enjoying your toys without delay.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <FaHeadset className="text-3xl text-blue-500 mb-4 mx-auto" />
              <h2 className="text-xl font-bold text-gray-700 mb-3">
                24/7 Support
              </h2>
              <p className="text-sm text-gray-600">
                Round-the-clock support team available to assist you with any
                inquiries or concerns, ensuring your satisfaction.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <FaCreditCard className="text-3xl text-blue-500 mb-4 mx-auto" />
              <h2 className="text-xl font-bold text-gray-700 mb-3">
                Online Payment
              </h2>
              <p className="text-sm text-gray-600">
                Secure online payment options for a smooth and hassle-free
                shopping experience.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <AnimatedFaShippingFast className="text-3xl text-blue-500 mb-4 mx-auto" />
              <h2 className="text-xl font-bold text-gray-700 mb-3">
                Fast Shipping
              </h2>
              <p className="text-sm text-gray-600">
                Quick and efficient shipping service to ensure you receive your
                toys in no time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
