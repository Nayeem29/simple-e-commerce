import React from 'react';
import './ReviewOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


const ReviewOrder = ({ shoe, handleRemoveProduct }) => {
  const { name, price, quantity, img } = shoe;
  return (
    <div className='review-container'>
      <div className='review-img'>
        <img src={img} alt="" />
      </div>
      <div className="review-details">
        <div className="summary">
          <p title={name}>
            {name.length > 20 ? name.slice(0, 20) + '...' : name}
          </p>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div>
          <button onClick={() => handleRemoveProduct(shoe)} className="delete-btn">
            <FontAwesomeIcon className='dlt-icon' icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;