import React , {useState} from 'react';



const RecitersScreen = (surahs, surahHandler}) => {
const [activeId , setActiveId] =useState('');
  return (
    <div className='min-vh-100 shadow-lg p-3 bg-red'>
    <h1 className='fs-5 fw-bold text-center title sticky'>Mushaf</h1> <hr />
    <ul className='list-group text-start'>
    {surahs && surahs.length>0?(
      surahs.map((surah) => (
        <div key={surah.id}>
         <li onClick={(e)=>{
          reciterHandler(reciter) 
          setActiveId(reciter.id)
        }} 
          className={`list-group-item bg-transparent border-0 text-light py-0 justify-content-between cursor fs-6 
          ${
            reciter.id===activeId && 'active'
          }`}
          >
           <FaUserCircle className='fs-3 me-3' />
            <span className=''>{reciter.name}</span>
         </li>
         <hr />
       </div>
      ))
    ):(
      <div className='text-center'>
       <span className='spinner-border'></span>
      </div>
    )}
    
       
    </ul>
    </div>
    // <div className='min-vh-100 shadow-lg p-3 bg-red'>
    //   <h1 className='fs-5 fw-bold text-center'>Reciters</h1> < hr />
    //   <div className='d-flex align-items-center py-0 cursor'>
    //       <FaUserCircle className='fs-3 me-3' />{' '}
    //       <span className='fs-6  '>Abdelbari Al- taubayti</span>
    //   </div>{' '}
    //   <hr className='my-1' />
    // </div>
  )
}

export default RecitersScreen
