// src/components/FoodList.tsx

import React, { useEffect, useState } from 'react';
import { getFoods } from '../firestoreService';

const FoodList: React.FC = () => {
  const [foods, setFoods] = useState<any[]>([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const foodData = await getFoods();
      setFoods(foodData);
    };

    fetchFoods();
  }, []);

  return (
    <div>
      <h2>Food List</h2>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>{food.name}: {food.calories} calories, {food.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
