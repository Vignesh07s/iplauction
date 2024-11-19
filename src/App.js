import React, { useState } from 'react';
import CategoryList from './components/CategoryList';
import './App.css'; // Make sure to import the CSS file for styling

function App() {
  const marqueePlayers = {
    "Virat Kohli": 2.00, "Rohit Sharma": 2.00, "Kane Williamson": 2.00, "David Warner": 2.00, "Rashid Khan": 2.00, "Glenn Maxwell": 2.00, "Ben Stokes": 2.00,
    "Hardik Pandya": 2.00, "Jasprit Bumrah": 2.00, "KL Rahul": 2.00, "Suryakumar Yadav": 2.00, "Ravindra Jadeja": 2.00, "Jos Buttler": 2.00, "Mitchell Starc": 2.00, "Trent Boult": 2.00,
    "MS Dhoni": 2.00, "Nicholas Pooran": 2.00, "Faf du Plessis": 2.00, "Ruturaj Gaikwad": 1.00, "Andre Russell": 2.00, "Mohammed Shami": 2.00, "Kagiso Rabada": 2.00,
    "Shubman Gill": 1.00, "Rishabh Pant": 2.00
  };
  const cappedBatters = {
    "Ajinkya Rahane": 2.00, "Rilee Rossouw": 2.00, "Joe Root": 2.00, "Mayank Agarwal": 2.00, "Harry Brook": 2.00, "Shreyas Iyer": 2.00, "Heinrich Klaasen": 2.00, "Jason Roy": 2.00, "Phil Salt": 2.00, "Dawid Malan": 2.00, "Rassie van der dussen": 2.00, "Manish Pandey": 2.00, "Sherfane Rutherford": 2.00, "Nitish Rana": 2.00, "Devdutt Padikkal": 2.00,
    "Sanju Samson": 2.00, "Prithvi Shaw": 2.00, "Karun Nair": 2.00, "Rachin Ravindra": 2.00, "Chris Lynn": 2.00, "Gurkeerat Singh": 2.00, "Tilak Varma": 2.00,
    "Reeza Hendricks": 2.00, "Najibullah Zadran": 2.00, "Pathum Nissanka": 2.00, "David Miller": 2.00, "Aiden Markram": 2.00, "Rahmanullah Gurbaz": 2.00, "Deepak Hooda": 2.00, "Mitchell Marsh": 2.00, "Harry Tector": 2.00, "Sarfaraz Khan": 2.00, "Rajat Patidar": 2.00, "Marcus Harris": 2.00, "Srikar Bharat": 2.00, "Dinesh Karthik": 2.00,
    "Tim David": 2.00, "Devon Conway": 2.00, "Ishan Kishan": 2.00
  }

  const cappedBowlers = {
    "Adam Zampa": 2.00, "Maheesh Theekshana": 2.00, "Adil Rashid": 2.00, "Tabraiz Shamsi": 2.00, "Ishant Sharma": 2.00, "Jhye Richardson": 2.00, "Reece Topley": 2.00,
    "Chris Jordan": 2.00, "Mohammed Siraj": 2.00, "Navdeep Saini": 2.00, "Noor Ahmed": 2.00, "Bhuvneshwar Kumar": 2.00, "Umran Malik": 2.00, "Avesh Khan": 2.00, "T Natarajan": 2.00, "Arshdeep Singh": 2.00, "Deepak Chahar": 2.00, "Harshal Patel": 2.00, "Kuldeep Yadav": 2.00, "Yuzvendra Chahal": 2.00, "Shardul Thakur": 2.00, "Ravi Bishnoi": 2.00,
    "Lockie Ferguson": 2.00, "Josh Hazlewood": 2.00, "Pat Cummins": 2.00, "Tim Southee": 2.00, "Anrich Nortje": 2.00, "Mustafizur": 2.00, "Andrew Tye": 2.00,
    "Blessing Muzarabani": 2.00, "Jason Behrendorff": 2.00, "Umesh Yadav": 2.00, "Tymal Mills": 2.00, "Matheesha Pathirana": 2.00, "Mitchell Starc": 2.00, "Joshua Little": 2.00
  }

  const cappedAllRounders = {
    "Marco Jansen": 2.00, "Sunil Narine": 2.00, "David Wiese": 2.00, "Shakib Al Hasan": 2.00, "Moeen Ali": 2.00, "Marcus Stoinis": 2.00, "Jason Holder": 2.00, "Sam Curran": 2.00, "Tom Curran": 2.00, "Axar Patel": 2.00, "Washington Sundar": 2.00, "Roston Chase": 2.00, "Daryl Mitchell": 2.00, "Mohammad Nabi": 2.00, "Jimmy Neesham": 2.00,
    "Cameron Green": 2.00, "Sikandar Raza": 2.00, "Romario Shepherd": 2.00, "Vijay Shankar": 2.00, "Dasun Shanaka": 2.00, "Glenn Maxwell": 2.00, "Wanindu Hasaranga": 2.00,
    "Daniel Sams": 2.00, "Keemo Paul": 2.00, "Chamika Karunaratne": 2.00, "Kyle Mayers": 2.00, "Fabian Allen": 2.00, "Dominic Drakes": 2.00, "George Garton": 2.00,
    "Mitchell Santner": 2.00, "Shivam Dube": 2.00, "Riyan Parag": 2.00, "Jalaj Saxena": 2.00, "Harpreet Brar": 2.00, "Prerak Mankad": 2.00, "Raj Angad Bawa": 2.00
  }
  const uncappedBatters = {
    "Rinku Singh": 0.50, "Sai Sudharsan": 0.50, "Priyam Garg": 0.50, "Himmat Singh": 0.50, "Shaik Rasheed": 0.50, "Rohan Kunnummal": 0.50, "Harpreet Bhatia": 0.50,
    "Shoun Roger": 0.50, "Sudip Gharami": 0.50, "Virat Singh": 0.50, "Akash Singh": 0.50, "Ashwin Hebbar": 0.50, "Chethan LR": 0.50, "Shubham Khajuria": 0.50,
    "Himanshu Rana": 0.50, "Karn Sharma": 0.50, "Pukhraj Mann": 0.50, "Sachin Baby": 0.50, "Bhanu Pania": 0.50,
  }
  const uncappedBowlers = {
    "Shivam Mavi": 0.50, "Kartik Tyagi": 0.50, "Sandeep Sharma": 0.50, "Mukesh Kumar": 0.50, "Yash Thakur": 0.50, "Rajvardhan Hangargekar": 0.50, "Mayank Markande": 0.50,
    "Chintal Gandhi": 0.50, "Izharulhaq Naveed": 0.50, "Suyash Sharma": 0.50, "Tejas Baroka": 0.50, "Vaibhav Arora": 0.50, "KM Asif": 0.50, "Ravi Bishnoi": 0.50,
    "Rajan Kumar": 0.50, "Shams Mulani": 0.50, "Arjun Tendulkar": 0.50, "Manav Suthar": 0.50, "Akash Singh": 0.50, "Rahul Chahar": 0.50, "Tushar Deshpande": 0.50
  }
  const uncappedAllRounders = {
    "Ayush Badoni": 0.50, "Nishant Sindhu": 0.50, "Shams Mulani": 0.50, "Samarth Vyas": 0.50, "Saurabh Kumar": 0.50, "Venkatesh Iyer": 0.50, "Suryansh Shedge": 0.50,
    "Abid Mushtaq": 0.50, "Manoj Bhandage": 0.50, "Akash Vashisht": 0.50, "Mayank Dagar": 0.50, "Tanush Kotian": 0.50, "Jagadeesha Suchith": 0.50, "Riyan Parag": 0.50,
    "Jalaj Saxena": 0.50, "Utkarsh Singh": 0.50, "Shivank Vasisht": 0.50, "Rahul Tewatia": 0.50, "Prerak Mankad": 0.50,
  }

  // Categories array to manage and cycle through categories
  const categories = [
    { name: 'Marquee Players', data: marqueePlayers },
    { name: 'Capped Batters', data: cappedBatters },
    { name: 'Capped Bowlers', data: cappedBowlers },
    { name: 'Capped All Rounders', data: cappedAllRounders },
    { name: 'Uncapped Batters', data: uncappedBatters },
    { name: 'Uncapped Bowlers', data: uncappedBowlers },
    { name: 'Uncapped All Rounders', data: uncappedAllRounders }
  ];

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  // Handle next category action
  const handleNextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    window.scrollTo(0, 0); // Scroll to top of the page
  };


  return (
    <div className="blurred-container">
      <h1>Indian Premier League Auction</h1>
      <CategoryList
        category={categories[currentCategoryIndex].name}
        basePrices={categories[currentCategoryIndex].data}
      />
      <div className="button-container">
          <button className="next-btn" onClick={handleNextCategory}>Next Category</button>
      </div>
    </div>

  );
}

export default App;
