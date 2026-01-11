import "./ProductCard.css";
import { useState } from "react";

export const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    alert("You liked this product");
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 hover-effect">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt={product.name} />

        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6 className="text-success">{product.price}</h6>
          <p className="card-text">{product.description}</p>

          <button
            className="btn btn-primary w-100"
            onClick={handleLike}
            disabled={liked}
          >
            {liked ? "Liked" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
};
