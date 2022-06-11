import React,{useState} from 'react'
import Link from 'next/link'

import Styles from '../../styles/modules/header.module.css'

import Search from '../assets/search'

export default function Header(props) {
  const [search, setSearch] = useState('');
  return (
    <nav className={`navbar navbar-light bg-white align-items-center justify-content-around mx-auto border-bottom border-dark ${Styles.header}`}>
    <div className='container-fluid px-5 mx-lg-5'>
    <div className={`title`}>
    <Link href='/'><a><img src='/logo.png' alt='logo img for LTS'/></a></Link>
  </div>
 <div className={`d-flex align-items-center mx-sm-0 flex-column flex-sm-row ${Styles.header__content}`}>
   <Link href='/'>Home</Link>
   <Link href='/about'>About</Link>
   <Link href='/contact'>Contact</Link>
   <form onSubmit={props.method} className='form-inline'>
      <input className='form-control rounded-pill' type='search' id='searchInput' name='searchInput' placeholder='Search' aria-label='Search' onChange={(e)=> {setSearch(e.target.searchInput)}} />
      <button className='btn mr-2' type='submit'><Search /></button>
    </form>
    </div>
    </div>
</nav>
  )
}