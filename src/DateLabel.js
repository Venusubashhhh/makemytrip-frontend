import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Data4,Data6 } from './Search';
import { Flightcontext } from './App';
const DateLabel = () => {
  const[depaturedate,setdepaturedate]=useState('')
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
const{setStartDate}=useContext(Data4);
const {day,setday,year,setyear,month,setmonth,flag4,setflag4}=useContext(Data6)

  const{from,setfrom,to,setto,flightname,setflightname,arrtime,setarrtime,deptime,setdeptime,price,setprice,durationh,setdurationh,durationm,setdurationm,logo,setlogo,date,setdate}=useContext(Flightcontext)

  // const toggleDatePicker = () => {
  //   setShowDatePicker(!showDatePicker);
  // };

  const handleDateChange = date => {
    setSelectedDate(date);
    const datee = new Date(date);
    const year = datee.getFullYear();
    const month = ('0' + (datee.getMonth() + 1)).slice(-2); 
    const day = ('0' + datee.getDate()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;
  setStartDate(formattedDate);
  setflag4(false);
    // setShowDatePicker(false);
 console.log(formattedDate)
    formatDate(datee);
   
  };
  const formatDate = (date) => {
    const options = {
      weekday: 'long',
      year: '2-digit',
      month: 'short',
      day: 'numeric',
    };
    
    const formattedDate = date.toLocaleDateString(undefined, options);
  
    // Extracting day, month, and year
    const [dayy, monthh, yearr] = formattedDate.split(', ');
    setday(dayy);
    setmonth(monthh);
    setyear(yearr);
    setdate(monthh);
    console.log({ selectedDate });
  
    // Splitting the day into individual digits
    const dayDigits = dayy.split('').map((digit, index) => (
      <span key={index} className="dayDigit">{digit}</span>
    ));
  
    const optionsDay = { weekday: 'long' };
    const formattedDay = date.toLocaleDateString(undefined, optionsDay);
    const [dayInLetters] = formattedDay.split(',');

   
    return (
      <>
    
 
   
     </>
    );
  };

  var datePickerStyle = {
    width: '150px', // Adjust the width as needed
    // Add any other desired styles here
  };

  return (
    <div>
    
       { flag4 && <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          withPortal
        />}
   
    </div>
  );
};

export default DateLabel;
