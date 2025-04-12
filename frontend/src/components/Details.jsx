import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFood } from '../context/FoodContext';

const Details = () => {
  const { selectedFood } = useFood();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedFood) {
      navigate('/');
    }
  }, [selectedFood, navigate]);

  if (!selectedFood) return null;

  const post = selectedFood;

  return (
    <div className="...">
      <div className="...">
        <img src={post.image} alt={post.foodName} className="..." />
        <div className="...">
          <h2 className="...">{post.foodName}</h2>
          <div className="...">
            <p><strong>Type:</strong> {post.foodType}</p>
            <p><strong>Quantity:</strong> {post.quantity} {post.unit}</p>
            <p><strong>Freshness:</strong> {post.freshness}</p>
            <p><strong>Posted On:</strong> {post.postedOn}</p>
            <p><strong>Location:</strong> {post.location}</p>
          </div>
          <div className="...">
            <h3 className="...">Donor Information</h3>
            <p>{post.donor.name}</p>
            <p>{post.donor.organization}</p>
            <p>{post.donor.email}</p>
          </div>
          <button onClick={() => navigate(-1)} className="...">← Back</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
