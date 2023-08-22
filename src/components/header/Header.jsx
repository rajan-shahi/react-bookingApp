import React, { useState } from "react";
import "./header.css";
import { BiSolidBed } from "react-icons/bi";
import { MdFlightTakeoff } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { GrAttraction } from "react-icons/gr";
import { FaTaxi } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { DateRange } from 'react-date-range';

const Header = () => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <BiSolidBed />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <MdFlightTakeoff />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <AiFillCar />
            <span>Cars rentals</span>
          </div>
          <div className="headerListItem">
            <GrAttraction />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FaTaxi />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A Lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
             <span className="headerIcon"> <BiSolidBed /></span>
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearchItem">
           <span className="headerIcon"><AiFillCalendar /></span>
           <span className="headerSearchText">
            date to date
           </span>
           <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
          </div>

          <div className="headerSearchItem">
           <span className="headerIcon"> <BsFillPersonFill /></span> 
            <span className="headerSearchText">2 adults 2 children 1 room</span>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
