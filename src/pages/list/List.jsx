import React, { useState } from 'react'
import "./list.css"
import { format } from "date-fns";
import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range';

const List = () => {
  const location = useLocation()
 const [destination,setDestination] =useState(location.state.destination)
 const [date,setDate] =useState(location.state.date)
 const [openDate,setOpenDate] =useState(false)
 const [options,setOptions] =useState(location.state.options)
  return (
   <div className="List">
    <div className="ListContainer">
      <div className="ListWrapper">
        <div className="ListSearch">
          <h1 className="LsTitle">Search</h1>
          <div className="LsItem">
            <label>Destination</label>
            <input type="text" placeholder={destination} />
          </div>
          <div className="LsItem">
            <label>Check-in Date</label>
           <span onClick={()=>setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
           { openDate && <DateRange 
            onChange={item=>setDate([item.selection])} minDate={new Date()}
            ranges={date}
            />}
          </div>
          <div className="LsItem">
            <label>Options</label>
            <div className="LsOptionItem">
              <span className="LsOptionText">
                Min price <small>Per night</small>
              </span>
              <input type="Number" className="LsOptionInput" />
            </div>
            <div className="LsOptionItem">
              <span className="LsOptionText">
                Max price <small>Per night</small>
              </span>
              <input type="Number" className="LsOptionInput" />
            </div>
            <div className="LsOptionItem">
              <span className="LsOptionText">
                Adult 
              </span>
              <input type="Number" className="LsOptionInput" />
            </div>
            <div className="LsOptionItem">
              <span className="LsOptionText">
                Children 
              </span>
              <input type="Number" className="LsOptionInput" />
            </div>
            <div className="LsOptionItem">
              <span className="LsOptionText">
              Room
              </span>
              <input type="Number" className="LsOptionInput" />
            </div>
          </div>
        </div>
        <div className="ListResult"></div>
      </div>
    </div>
   </div>
  )
}

export default List
