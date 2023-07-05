import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({toy,handleViewDetails,i}) => {
    const { _id, pictureURL, name,sellerName,subCategory,availableQuantity, price} = toy || {}

  return (
    <tr >
      <td>{i+1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={pictureURL}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-semibold ">{name}</div>
            
          </div>
        </div>
      </td>
      <td>
        <p>{sellerName}</p>

      </td>
      <td className="capitalize">{subCategory}</td>
      <td >${price}</td>
      <td>{availableQuantity}</td>
      <th>
      <Link to={`/allToys/details/${_id}`}>
        <button onClick={()=>handleViewDetails(_id)} className="button-primary !font-semibold !py-1">Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default TableRow;
