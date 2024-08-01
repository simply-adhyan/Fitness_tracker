import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Define the path to the JSON file
const filePath = path.join(__dirname, 'foodData.json');

// Define the TypeScript interface for food items
interface FoodItem {
  name: string;
  calories: number;
  quantity: string;
}

// Function to read and parse the JSON file
const readFoodData = (): FoodItem[] => {
  try {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(rawData) as FoodItem[];
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    return [];
  }
};

// Load food data from the JSON file
const foodData = readFoodData();

app.get('/api/food', (req: Request, res: Response) => {
  res.json(foodData);
});

app.get('/api/food/:name', (req: Request, res: Response) => {
  const foodName = req.params.name;
  const foodItem = foodData.find((item: FoodItem) => item.name.toLowerCase() === foodName.toLowerCase());
  if (foodItem) {
    res.json(foodItem);
  } else {
    res.status(404).json({ message: 'Food item not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
