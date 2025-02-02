import React from "react";

const Card = ({ name, description, img }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl mx-auto mb-4">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{description}</p>
        <div className="card-actions mt-6 justify-center">
          <button className="btn btn-primary uppercase text-orange-400 bg-slate-100 border-gray-500 shadow-md shadow-gray-700 hover:bg-slate-600 active:bg-gray-800 hover:text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
