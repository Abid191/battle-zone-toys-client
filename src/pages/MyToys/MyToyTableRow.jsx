/* eslint-disable react/prop-types */

import { Button, Modal } from "react-daisyui";
import { AiFillDelete } from "react-icons/ai";
import ModalUpdateDetails from "./ModalUpdateDetails";
import { useState } from "react";

const MyToyTableRow = ({ toy, i, handleDeleteToy, setUpdated, updated }) => {
  const { _id, pictureURL, name, detailDescription, availableQuantity, price } =
    toy || {};
  const [visible, setVisible] = useState(false);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <tr>
      <td>{i + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={pictureURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-semibold ">{name}</div>
          </div>
        </div>
      </td>

      <td>${price}</td>
      <td>{availableQuantity}</td>
      <td className="md:w-1/3">
        <p onClick={toggleReadMore} className=" whitespace-pre-wrap">
          {isReadMore ? detailDescription.slice(0, 70) : detailDescription}
          {detailDescription.length > 70 && (
            <span
              className="text-blue-500 hover:text-blue-600 hover:font-bold cursor-pointer text-sm"
              onClick={toggleReadMore}
            >
              {isReadMore ? "... Read more" : " Show less"}
            </span>
          )}
          {/* {detailDescription}

          <span className="text-blue-500 hover:text-blue-600 hover:font-bold cursor-pointer text-sm">
            ... Read More
          </span> */}
        </p>
      </td>
      <td>
        <button
          onClick={toggleVisible}
          className="button-primary !font-semibold !py-1"
        >
          Update
        </button>
        {/* Modal */}
        <Modal className="max-w-3xl" open={visible}>
          <Button
            size="sm"
            shape="circle"
            className="absolute right-2 top-2 btn-error text-white hover:bg-red-500"
            onClick={toggleVisible}
          >
            ✕
          </Button>

          {/* Modal components */}
          <ModalUpdateDetails
            toy={toy}
            toggleVisible={toggleVisible}
            setUpdated={setUpdated}
            updated={updated}
          />
        </Modal>
      </td>
      <td>
        <button
          onClick={() => handleDeleteToy(_id)}
          className="button-primary !font-semibold !py-1  hover:!bg-red-600 bg-red-500"
        >
          <AiFillDelete className="text-2xl " />
        </button>
      </td>
    </tr>
  );
};

export default MyToyTableRow;
