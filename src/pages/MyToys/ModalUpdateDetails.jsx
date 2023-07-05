/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const ModalUpdateDetails = ({ toy, toggleVisible,setUpdated,updated }) => {
  const { _id, name, price, availableQuantity, detailDescription } = toy || {};

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const detailDescription = form.detailDescription.value;

    const updatedToy = { price, availableQuantity, detailDescription };

    fetch(`https://battle-zone-toys-server.vercel.app/updateToy/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setUpdated(!updated)
          Swal.fire({
            icon: "success",
            title: "Toy Update success",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Toy Update unsuccessful",
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-2xl  whitespace-break-spaces text-center font-semibold text-gray-600 mb-8">
        Update Toy Details : <span className=" text-blue-500">{name}</span>
      </h2>

      <form onSubmit={handleUpdate}>
        {/* 1 Price and Available quantity */}

        <div className="md:flex gap-10 md:px-0 px-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Price <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input-form w-full"
              defaultValue={price}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Available Quantity <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              name="availableQuantity"
              type="number"
              placeholder="Quantity"
              className="input-form w-full"
              defaultValue={availableQuantity}
              required
            />
          </div>
        </div>

        {/* Detail description */}
        <div className="md:flex gap-10 md:px-0 px-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Detail Description <span className="text-red-500">*</span>
              </span>
            </label>
            <textarea
              name="detailDescription"
              type="text"
              placeholder="Write here Description in Details..."
              className=" border-[1px] border-gray-300  rounded focus:outline-blue-400 pl-3  w-full focus:transition"
              rows="4"
              cols="50"
              defaultValue={detailDescription}
              required
            />
          </div>
        </div>
        <div className="mx-auto md:w-1/2 !mt-8">
          <button
            onClick={toggleVisible}
            type="submit"
            className="button-primary w-full "
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalUpdateDetails;
