import React, {useRef, useEffect } from 'react';

import Styles from '../../styles/modules/search-results.module.css'

import Axios from 'axios';

export default function MainContent(props) {
	const  data = useRef(null);
	 const search = data&& props.search;


	useEffect(() => {
		Axios.get(
			`http://localhost:3001/api/data`
		)
			.then((result) => {

                data.current = result.data.data;
            })
			.catch((err) => console.log(err));
        }
	, [search]);

    
        
        const results = search && data.current&&  data.current.filter((el,i) => {
        const  {name, price, description} = el;
       
        if(name.includes(search)|| price.value.toString() === search || description.includes(search)){

          return true;
        }
        else
        {
          return false;
        }
      }).map(
          (el,i) =>{
          const  {name, price, description} = el;
              return (
              <div className={`col-5 ml-5 mt-5 mb-5 ${Styles.searchResults}`} key={i}>
              <p className={Styles.searchTitle}>{name}&nbsp; 9 day stay at {name}</p>
              <img className={`mr-5 ${Styles.searchImg}`} src='/dest-img.png' alt='destination image'/>
              <h3 className={'font-weight-bold ${Styles.searchPrice}'} >only &pound;{price.value}&nbsp;{price.unit}</h3>
              <p className={Styles.searchDesc}>{description}</p>
              </div>
              );
          }
      );
      

	return (
		<div
			className={`container-fluid d-flex flex-column position-relative mx-auto align-items-center ${Styles.resultsContainer}`}
		>
			{search && data.current? (
                <>
                <h1 className='d-block text-center font-weight-bolder'>Search Results</h1>
				<div className={`d-flex position-relative ml-5 justify-content-center flex-wrap ${Styles.resultsCard}`}>
                {results.filter((el) => {return el}).length > 0? results.map((el) => { return el }) : 'Sorry no matching results'}</div>
                </>
			) : (
				<div className='text-center'>
					<h1 className='font-weight-bolder'>Welcome!</h1>
					<p className='font-weight-bold'>Your perfect holiday is just a search away!</p>
				</div>
			)}
		</div>
	);
}
