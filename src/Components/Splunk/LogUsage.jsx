import React, { useState } from "react";
import "./LogUsage.css";
import { DatePicker, Space, message } from 'antd';
import dayjs from 'dayjs';
import { FaRegCalendarAlt } from "react-icons/fa";
  const { RangePicker } = DatePicker;

const LogUsage = () => {
  // const [dateRange, setDateRange] = useState("08/12/2023 - 08/15/2024");
  const [dates, setDates] = useState([]);
  const [selectedDates, setSelectedDates] = useState(null);

  const onDateChange = (dates) => {
    if (dates) {
      setSelectedDates(dates);
      //message.success(`Selected range: ${dates[0].format('YYYY-MM-DD')} to ${dates[1].format('YYYY-MM-DD')}`);
    } else {
      setSelectedDates(null);
      //message.info('Selection cleared.');
    }
  };

  const handleDateChange = (e) => {
    setDateRange(e.target.value);
  };
  
  return (
    <div>
    <div className="log-usage-container">
      <h3>Logs Usage Details</h3>
      <div className="controls">
     
        <label>
        <FaRegCalendarAlt />
          <span>Date Range</span>
          <Space direction="vertical" size={13}>
            <RangePicker
              value={selectedDates}
              onChange={onDateChange}
              disabledDate={(current) => {
                // Disable dates before today
                return current && current < dayjs().startOf('day');
              }}
              style={{ width: "100%" }} // Added this line to make the Date Range picker full width
            />
          </Space>
        </label>
        <button className="apply-button">Apply</button>
        <button className="reset-button">Reset</button>
      </div>
      
    </div>
    <div>
      <table className="log-usage-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Price per click</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23-01-2024</td>
            <td>11.00 AM</td>
            <td>2.00 $</td>
          </tr>
          <tr>
            <td>23-01-2024</td>
            <td>02.23 PM</td>
            <td>2.00 $</td>
          </tr>
          <tr>
            <td>23-01-2024</td>
            <td>04.33 PM</td>
            <td>2.00 $</td>
          </tr>
          <tr>
            <td>23-01-2024</td>
            <td>10.25 PM</td>
            <td>2.00 $</td>
          </tr>
          <tr>
            <td>24-01-2024</td>
            <td>11.00 AM</td>
            <td>2.00 $</td>
          </tr>
          <tr>
            <td>25-01-2024</td>
            <td>11.30 AM</td>
            <td>2.00 $</td>
          </tr>
        </tbody>
      </table>
      <a href="/" className="back-button">← Back</a>
    </div>
    </div>
  );
};

export default LogUsage;