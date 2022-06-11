import React, { useState } from 'react'

import Styles from '../../styles/modules/adv-search.module.css'

export default function AdvSearch() {

 const [location, setLocation] = useState('Location');
 const [depAirport, setDepAirport] = useState('Departure Airport');
 const [arrAirport, setArrAirport] = useState('Arrival Airport');
 const [depDate, setDepDate] = useState('Departure Date');
 const [retDate, setRetDate] = useState('Return Date');
 const [adtPassengers, setAdtPassengers] = useState('Adult Passengers');
 const [chdPassengers, setChdPassengers] = useState('Child Passengers');

 const handleChange = () => {/*do something*/}


  return (
  <form className={`form container-fluid p-4 position-relative justify-content-center align-items-center border border-dark bg-dark ${Styles.advSearch}`}>
   <div className="form-group d-block position-relative w-100">
    <select className="form-control" placeholder="location" value={location} onChange={handleChange}>
    <option className="form-text text-muted" disabled>{location}</option>
    </select>
  </div>
  <div className="form-group d-block position-relative w-100">
    <select className="form-control" placeholder="location" value={depAirport} onChange={handleChange}>
    <option className="form-text text-muted" disabled>{depAirport}</option>
    </select>
  </div>
  <div className="form-group d-block position-relative w-100">
    <select className="form-control" placeholder="location" value={arrAirport} onChange={handleChange} >
    <option className="form-text text-muted"  disabled>{arrAirport}</option>
    </select>
  </div>
  <div className='row'>
  <div className='col-6'>
  <div className="form-group">
    <select className="form-control" placeholder="location" value={depDate} onChange={handleChange} >
    <option className="form-text text-muted"  disabled>{depDate}</option>
    </select>
  </div>
  </div>
  <div className='col-6'>
  <div className="form-group">
    <select className="form-control" placeholder="location" value={retDate} onChange={handleChange} >
    <option className="form-text text-muted"  disabled>{retDate}</option>
    </select>
  </div>
  </div>
  </div>
  <div className='row'>
  <div className='col-6'>
  <div className="form-group">
    <select className="form-control" placeholder="location" value={adtPassengers} onChange={handleChange} >
    <option className="form-text text-muted"  disabled>{adtPassengers}</option>
    </select>
  </div>
  </div>
  <div className='col-6'>
  <div className="form-group">
    <select className="form-control" placeholder="location" value={chdPassengers} onChange={handleChange} >
    <option className="form-text text-muted"  disabled>{chdPassengers}</option>
    </select>
  </div>
  </div>
  </div>
  <button type="submit" className="btn btn-primary d-block w-25 mx-auto">Search</button>
  </form>
  )
}