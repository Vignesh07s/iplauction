import React, { useState, useEffect } from 'react';
import './CategoryList.css';

export default function MarqueePlayer(props) {
  const { category, basePrices } = props;

  // Initialize players data with base price (in crores) and status (default "Available")
  const [playersData, setPlayersData] = useState([]);

  const teams = ["Mumbai Indians", "Chennai Super Kings", "Delhi Capitals", "Kolkata Knight Riders", "Royal Challengers Bangalore", "Rajasthan Royals", "Sunrisers Hyderabad"];


  // Reset playersData when basePrices prop changes
  useEffect(() => {
    // Reset playersData whenever basePrices changes
    setPlayersData(
      Object.keys(basePrices).map(player => ({
        name: player,
        bidAmount: basePrices[player],
        team: '',
        status: 'Available', // Default status
        showOptions: false // Track whether Sold/Unsold options should be shown
      }))
    );
  }, [basePrices]); // This hook runs whenever basePrices changes

  // Handle changes for bid, team inputs, and status
  const handleChange = (index, field, value) => {
    const updatedData = [...playersData];
    updatedData[index][field] = value;
    setPlayersData(updatedData);
  };

  // Increment the bid amount based on the bid threshold
  const increaseBid = (index) => {
    const updatedData = [...playersData];
    const currentBid = Number(updatedData[index].bidAmount); // Convert bid to number
    let incrementAmount = 0.20; // Default increment ₹20 L (₹0.20 Cr)

    // If the bid amount exceeds ₹10 Cr, increment by ₹50 L (₹0.50 Cr)
    if (currentBid >= 10.00) {
      incrementAmount = 0.50; // ₹50 L (₹0.50 Cr)
    }

    updatedData[index].bidAmount = (currentBid + incrementAmount).toFixed(2); // Increment the bid and round to 2 decimals
    setPlayersData(updatedData);
  };

  // Handle status changes
  const statusChange = (index) => {
    const updatedData = [...playersData];
    const status = updatedData[index].status;

    // If status is 'In Progress', show options to choose Sold or Unsold
    if (status === 'InProgress') {
      updatedData[index].showOptions = !updatedData[index].showOptions;
    } else {
      // Toggle status between Available, Sold, and Unsold
      if (status === 'Available') {
        updatedData[index].status = 'InProgress';
      }
      if (status === 'Unsold') {
        updatedData[index].status = 'Available';
      }
    }

    setPlayersData(updatedData);
  };

  // Set the status to Sold or Unsold based on the selected option
  const handleOptionChange = (index, option) => {
    const updatedData = [...playersData];
    updatedData[index].status = option;
    updatedData[index].showOptions = false; // Hide options after selection
    setPlayersData(updatedData);
  };

  // Calculate total Available, Sold, and Unsold players
  const availableCount = playersData.filter(player => player.status === 'Available').length;
  const soldCount = playersData.filter(player => player.status === 'Sold').length;
  const unsoldCount = playersData.filter(player => player.status === 'Unsold').length;

  return (
    <div className="marquee-container">
      <h2>{category} Auction</h2>

      {/* Sidebar for Available, Sold, and Unsold Counts */}
      <div className="auction-sidebar">
        <div className="sidebar-item">
          <strong>Available :</strong> {availableCount}
        </div>
        <div className="sidebar-item">
          <strong>Sold Players:</strong> {soldCount}
        </div>
        <div className="sidebar-item">
          <strong>Unsold Players:</strong> {unsoldCount}
        </div>
      </div>

      <div className="table-container">
        <div className="table-header">
          <div className="table-column">Player Name</div>
          <div className="table-column">Status</div>
          <div className="table-column">Bid Amount</div>
          <div className="table-column">Sold To</div>
        </div>
        <div className="players-list">
          {playersData.map((player, index) => (
            <div key={index} className="player-item">
              <div className="table-column name">{player.name}</div>
              <div className="table-column">
                {player.status === 'InProgress' && player.showOptions ? (
                  <div className="options">
                    <button className="option sold" onClick={() => handleOptionChange(index, 'Sold')}>Sold</button>
                    <button className="option unsold" onClick={() => handleOptionChange(index, 'Unsold')}>Unsold</button>
                  </div>
                ) : (
                  <span
                    className={`status ${player.status.toLowerCase()}`}
                    onClick={() => statusChange(index)}  // Pass the index of the player
                  >
                    {player.status}
                  </span>
                )}
              </div>
              <div className="table-column">
                <div className="bid-container">
                  <input
                    type="text"
                    value={`₹${player.bidAmount} Cr`}
                    placeholder={`₹${basePrices[player.name]} Cr`}
                    readOnly
                  />
                  <button
                    onClick={() => increaseBid(index)}
                    className="increment-button">+</button>
                </div>
              </div>
              <div className="table-column">
              <select
                  value={player.team}
                  onChange={(e) => handleChange(index, 'team', e.target.value)}
                  className="team-dropdown"
                >
                  <option value="">Select Team</option>
                  {teams.map((team, i) => (
                    <option key={i} value={team}>{team}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
