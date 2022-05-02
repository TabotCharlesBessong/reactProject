
import React, { useState } from 'react'
import './Header.css' 
import {FaBed, FaCalendar, FaCar, FaPersonBooth, FaPlane, FaTaxi} from 'react-icons/fa'
import {DateRange} from 'react-date-range'
// import DateFnsAdapter from '@date-io/date-fns';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from 'date-fns';

const Header = () => {
  const [destination,setDestination] = useState('')
  const [openDate,setOpenDate] = useState(false)
  const [date,setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key:'selection'
    }
  ])

  const [openOptions,setOpenOptions] = useState(false)
  const [options,setOptions] = useState({
     adults:1,
     children:0,
     room:1
  })

  const handleOption = (name,operation)=>{
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  }
  return (
    <div className='header' >
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem">
          <div className="headerList">
            <div className="headerListItem active">
              <FaBed />
              <span>Stays</span>
            </div>
            <div className="headerListItem ">
              <FaPlane />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FaCar />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FaBed />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FaTaxi />
              <span>Airport taxis</span>
            </div>
          </div>
          </div>
        </div>
        <h1 className="headerTitle">
          <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
          </p>
          <button className="headerBtn">
            sign in / register
          </button>
          <div className="headerSearch">
              <div className="headerSearchItem">
                <FaBed className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <FaCalendar className="headerIcon" />
                <span  onClick={()=>setOpenDate(!openDate)} className='headerSearchText date' >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`} </span>
                {openDate && 
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    // minDate={new Date()}
                  />
                  }
                
              </div>
              <div className="headerSearchItem">
                <FaPersonBooth className="headerIcon" />
                <span onClick={()=> setOpenOptions(!openOptions) } className='headerSearchText' > {`${options.adults} adults ${options.children} children , ${options.room} room `} </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adults <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adults}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adults", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">search</button>
              </div>
            </div>
        </h1>
      </div>
    </div>
  )
}

export default Header