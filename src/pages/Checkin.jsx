import React, { useState, useEffect } from "react";

const CheckIn = () => {
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkIns, setCheckIns] = useState([]);

  useEffect(() => {
    const savedCheckInTime = localStorage.getItem("checkInTime");
    if (savedCheckInTime) {
      setCheckInTime(new Date(savedCheckInTime));
    }
    const savedCheckIns = localStorage.getItem("checkIns");
    if (savedCheckIns) {
      setCheckIns(JSON.parse(savedCheckIns));
    }
  }, []);

  const handleCheckIn = () => {
    const currentTime = new Date();
    setCheckInTime(currentTime);
    const newCheckIns = [
      ...checkIns,
      { id: Date.now(), time: currentTime.toLocaleString(), day: currentTime.toLocaleDateString('en-US', { weekday: 'long' }) },
    ];
    setCheckIns(newCheckIns);
    localStorage.setItem("checkInTime", currentTime.toString());
    localStorage.setItem("checkIns", JSON.stringify(newCheckIns));
  };

  const handleDeleteCheckIn = (id) => {
    const updatedCheckIns = checkIns.filter(checkIn => checkIn.id !== id);
    setCheckIns(updatedCheckIns);
    localStorage.setItem("checkIns", JSON.stringify(updatedCheckIns));
  };

  return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-3xl mb-4">Check-In Page</h1>
      <button
        onClick={handleCheckIn}
        className="bg-[#C3A29E] hover:bg-[#FFF4E9] hover:text-black text-white font-bold py-2 px-4 rounded"
      >
        Check In
      </button>
      {checkInTime && (
        <p className="mt-4 text-lg">
          Last Check-In: {checkInTime.toLocaleString()}
        </p>
      )}
      <div className="mt-8">
        <h2 className="text-xl mb-2">Recent Check-Ins:</h2>
        <table className="mx-auto border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">User</th>
              <th className="border border-gray-300 px-4 py-2">Day</th>
              <th className="border border-gray-300 px-4 py-2">Time</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {checkIns.map((checkIn) => (
              <tr key={checkIn.id}>
                <td className="border border-gray-300 px-4 py-2">User {checkIn.id}</td>
                <td className="border border-gray-300 px-4 py-2">{checkIn.day}</td>
                <td className="border border-gray-300 px-4 py-2">{checkIn.time}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDeleteCheckIn(checkIn.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckIn;
