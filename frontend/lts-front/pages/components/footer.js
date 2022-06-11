import React from 'react'

import Styles from '../../styles/modules/footer.module.css'

import Copyright from '../assets/copyright'

export default function Footer() {
  return (
  <div className={`container-fluid d-flex py-5 border-top border-dark position-relative justify-content-center align-items-center bg-white ${Styles.footer}`}>
   <p className="text-center">Technical Test for Liberty Travel Systems Limited<br/>
   Copyright 2022 - All Rights Reserved<Copyright/></p>
  </div>
  )
}