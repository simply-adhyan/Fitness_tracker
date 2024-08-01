// src/firestoreService.ts

import { firestore } from './firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const foodCollection = collection(firestore, 'foods');

export const getFoods = async () => {
  const foodSnapshot = await getDocs(foodCollection);
  const foodList = foodSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return foodList;
};

export const addFood = async (food: { name: string; calories: number; quantity: string }) => {
  try {
    await addDoc(foodCollection, food);
  } catch (error) {
    console.error('Error adding food:', error);
  }
};
