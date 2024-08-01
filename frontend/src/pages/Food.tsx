import React, { useEffect, useState } from 'react';
import { firestore } from '../firebaseConfig'; // Import Firestore instance
import { collection, getDocs } from 'firebase/firestore';
import Navigation from '../components/Navigation';

interface FoodItem {
  name: string;
  calories: number;
  quantity: string;
}

const Food: React.FC = () => {
  const [foodData, setFoodData] = useState<FoodItem[]>([]);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'food')); // Fetch data from Firestore
        const foods: FoodItem[] = querySnapshot.docs.map(doc => doc.data() as FoodItem);
        setFoodData(foods);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchFoodData();
  }, []);

  return (
    <div>
      
      <main>
        <h2>Food Calorie Information</h2>
        <table>
          <thead>
            <tr>
              <th>Food Item</th>
              <th>Calories</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {foodData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.calories}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Food;
