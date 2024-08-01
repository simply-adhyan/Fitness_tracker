import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const Fitness: React.FC = () => {
  const [weight, setWeight] = useState<number | ''>('');
  const [time, setTime] = useState<number | ''>('');
  const [calories, setCalories] = useState<number | null>(null);

  const calculateCalories = () => {
    const MET = 9.8; // MET value for running
    if (weight && time) {
      const result = (MET * weight * (time / 60)).toFixed(2);
      setCalories(Number(result));
    }
  };

  return (
    <div>
      <Navigation/>
      <main>
        <h2>Calculate Calories Burned</h2>
        <form>
          <label>
            Weight (kg):
            <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
          </label>
          <label>
            Time (minutes):
            <input type="number" value={time} onChange={(e) => setTime(Number(e.target.value))} />
          </label>
          <button type="button" onClick={calculateCalories}>Calculate</button>
        </form>
        {calories !== null && <p>Calories Burned: {calories}</p>}
      </main>
    </div>
  );
};

export default Fitness;
