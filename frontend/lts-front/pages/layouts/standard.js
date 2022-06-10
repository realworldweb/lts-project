import React,{ cloneElement, Children} from "react";

import dynamic from 'next/dynamic'

import Header from '../components/header';

//const Footer = dynamic(() => import('../components/footer'));

 

 

export default function Front({children}) {
  
  return (
<div>
   <div className="d-flex flex-column justify-content-around mx-auto" id="contentContainer">
  <header>
  <Header />
      </header>
      <main id="main" className="d-block position-relative">
      {Children.map(children, child => (
        cloneElement(child, {
        })
      ))}
      </main>
      <footer>
 {/*<Footer/>*/}
 </footer>
  </div>
  </div>

  )
}