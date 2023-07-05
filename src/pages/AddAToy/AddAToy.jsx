import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddAToy = () => {
  const [subCategory, setSubCategory] = useState("");

  const SelectCategory = ["marvel", "starWars", "avengers"];

  const handleSelectChange = (e) => {
    setSubCategory(e.target.value);
  };

  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const pictureURL = form.pictureURL.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const detailDescription = form.detailDescription.value;
    const createdAt = new Date();

    const addAToy = {
      pictureURL,
      name,
      sellerName,
      sellerEmail,
      price,
      rating,
      availableQuantity,
      detailDescription,
      subCategory,
      createdAt,
    };

    fetch(`https://battle-zone-toys-server.vercel.app/addAToy`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addAToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset()
          Swal.fire({
            icon: "success",
            title: "Toy added successfully",
          });
        }
      });
  };

  return (
    <div className="mb-16 mt-10 mx-3 md:mx-0">
      <Helmet>
        <title>Battle Zone Toys | Add A Toy</title>
      </Helmet>
      <h2 className="text-3xl text-center font-semibold text-blue-500 mb-8">
        Add a Toy
      </h2>
      <form onSubmit={handleSubmit} className="md:w-3/4 mx-auto space-y-4">
        {/* 1 Toy name, Image URL */}
        <div className="md:flex gap-10 md:px-0 ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Toy Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input-form w-full"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Picture URL <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              name="pictureURL"
              type="url"
              placeholder="URL"
              className="input-form w-full"
              required
            />
          </div>
        </div>

        {/* 2 Seller name and seller email */}
        <div className="md:flex gap-10 md:px-0 ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Seller Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              name="sellerName"
              value={user?.displayName}
              type="text"
              placeholder="Seller Name"
              className="input-form w-full"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Seller Email <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              name="sellerEmail"
              value={user?.email}
              type="text"
              placeholder="Email"
              className="input-form w-full"
              required
            />
          </div>
        </div>

        {/* 3 sub category and price */}
        <div className="md:flex gap-10 md:px-0 ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Select Toy Sub Category <span className="text-red-500">*</span>
              </span>
            </label>
            <select
              onChange={handleSelectChange}
              className="input-form"
              defaultValue="Select category"
              required
            >
              <option disabled>Select category</option>

              {SelectCategory.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

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
              required
            />
          </div>
        </div>

        {/* 4 Rating and Available quantity */}

        <div className="md:flex gap-10 md:px-0 ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Rating <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              name="rating"
              type="text"
              placeholder="Rating"
              className="input-form w-full"
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
              required
            />
          </div>
        </div>

        {/* Detail description */}
        <div className="md:flex gap-10 md:px-0 ">
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
              required
            />
          </div>
        </div>
        <div className="mx-auto md:w-1/2 !mt-8">
          <button type="submit" className="button-primary w-full ">
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
