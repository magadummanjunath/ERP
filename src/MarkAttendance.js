import React, { useState } from 'react';

const BenchmarkLocation = {
  latitude: 12.9716,
  longitude: 77.5946,
};

const MarkAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [isAttendanceMarked, setIsAttendanceMarked] = useState(false);
  const [markOffTime, setMarkOffTime] = useState(null);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const markAttendance = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;
        const distance = calculateDistance(
          userLatitude,
          userLongitude,
          BenchmarkLocation.latitude,
          BenchmarkLocation.longitude
        );

        const now = new Date();

        const attendanceRecord = {
          markInTime: now,
          markInPlace: {
            latitude: userLatitude,
            longitude: userLongitude,
          },
          markInDistance: distance.toFixed(2),
          markOutTime: null,
          markOutPlace: null,
          markOutDistance: null,
          workedMinutes: 0,
        };

        setAttendanceData([...attendanceData, attendanceRecord]);
        setIsAttendanceMarked(true);
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const markOff = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;
        const now = new Date();

        setMarkOffTime(now);
        setIsAttendanceMarked(false);

        const updatedAttendanceData = [...attendanceData];
        if (updatedAttendanceData.length > 0) {
          const lastIndex = updatedAttendanceData.length - 1;
          updatedAttendanceData[lastIndex].markOutTime = now;
          updatedAttendanceData[lastIndex].markOutPlace = {
            latitude: userLatitude,
            longitude: userLongitude,
          };
          const markOutDistance = calculateDistance(
            userLatitude,
            userLongitude,
            BenchmarkLocation.latitude,
            BenchmarkLocation.longitude
          );
          updatedAttendanceData[lastIndex].markOutDistance = markOutDistance.toFixed(2);

          // Calculate worked minutes
          const markInTime = updatedAttendanceData[lastIndex].markInTime;
          const markOutTime = updatedAttendanceData[lastIndex].markOutTime;
          if (markInTime && markOutTime) {
            const timeDiff = markOutTime - markInTime;
            const minutes = Math.floor(timeDiff / 60000);
            updatedAttendanceData[lastIndex].workedMinutes = minutes;
          }
        }

        setAttendanceData(updatedAttendanceData);
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const formatWorkedHours = (workedMinutes) => {
    const hours = Math.floor(workedMinutes / 60);
    const minutes = workedMinutes % 60;
    return `${hours} hours ${minutes} minutes`;
  };

  return (
    <div className="container mt-4">
      <h2>Mark Attendance</h2>
      {isAttendanceMarked ? (
        <button className="btn btn-success" onClick={markOff}>
          Mark Off
        </button>
      ) : (
        <button className="btn btn-primary" onClick={markAttendance}>
          Mark Attendance
        </button>
      )}
      <div>
        <h3>Attendance Data</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mark In Time</th>
              <th>Mark In Place</th>
              <th>Mark In Distance (km)</th>
              <th>Mark Out Time</th>
              <th>Mark Out Place</th>
              <th>Mark Out Distance (km)</th>
              <th>Worked Hours</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((attendance, index) => (
              <tr key={index}>
                <td>{attendance.markInTime.toLocaleString()}</td>
                <td>
                  {attendance.markInPlace ? (
                    `Latitude: ${attendance.markInPlace.latitude}, Longitude: ${attendance.markInPlace.longitude}`
                  ) : 'Not Marked'}
                </td>
                <td>{attendance.markInDistance}</td>
                <td>
                  {attendance.markOutTime ? attendance.markOutTime.toLocaleString() : 'Not Marked'}
                </td>
                <td>
                  {attendance.markOutPlace ? (
                    `Latitude: ${attendance.markOutPlace.latitude}, Longitude: ${attendance.markOutPlace.longitude}`
                  ) : 'Not Marked'}
                </td>
                <td>{attendance.markOutDistance}</td>
                <td>
                  {attendance.workedMinutes > 0
                    ? formatWorkedHours(attendance.workedMinutes)
                    : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarkAttendance;
