import React from 'react'

import Styles from '../../styles/modules/adv-search.module.css'

export default function AdvSearch() {
  return (
  <form className={`form container-fluid p-2 position-relative justify-content-center align-items-center border border-dark bg-dark ${Styles.advSearch}`}>
   <div className="form-group d-block position-relative w-100">
    <select className="form-control" placeholder="location" id="exampleFormControlSelect1">
    <option className="form-text text-muted" selected disabled>Location</option>
    </select>
  </div>
  <div className="form-group d-block position-relative w-100">
    <select className="form-control" placeholder="location" id="exampleFormControlSelect1">
    <option className="form-text text-muted" selected disabled>Depature Airport</option>
    </select>
  </div>
  <div className="form-group d-block position-relative w-100">
    <select className="form-control" placeholder="location" id="exampleFormControlSelect1">
    <option className="form-text text-muted" selected disabled>Arrival Airport</option>
    </select>
  </div>
  <div className='row'>
  <div className='col-6'>
  <div className="form-group">
    <select className="form-control" placeholder="location" id="exampleFormControlSelect1">
    <option className="form-text text-muted" selected disabled>Depature Date</option>
    </select>
  </div>
  </div>
  <div className='col-6'>
  <div className="form-group">
    <select className="form-control" placeholder="location" id="exampleFormControlSelect1">
    <option className="form-text text-muted" selected disabled>Return Date</option>
    </select>
  </div>
  </div>
  </div>
  <div className='row'>
  <div className='col-6'>
  <div className="form-group">
    <select className="form-control" placeholder="location" id="exampleFormControlSelect1">
    <option className="form-text text-muted" selected disabled>Adult Passengers</option>
    </select>
  </div>
  </div>
  <div className='col-6'>
  <div className="form-group">
    <select className="form-control" placeholder="location" id="exampleFormControlSelect1">
    <option className="form-text text-muted" selected disabled>Child Passengers (0-16)</option>
    </select>
  </div>
  </div>
  </div>
  <button type="submit" class="btn btn-primary d-block w-25 mx-auto">Search</button>
  </form>
  )
}