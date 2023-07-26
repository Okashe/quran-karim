import React , {useState} from 'react';



const TextScreen = ({verses, verseHandler}) => {

  const [activeId , setActiveId] =useState('');

  return (

    <div className='min-vh-100 shadow-lg p-3 bg-red'>
    <h1 className='fs-5 fw-bold text-center title sticky'>Mushaf</h1> <hr />
    <ul className='list-group text-start'>
    {verses && verses.length>0?(
      verses.map((verse) => (
        <div key={verse.id}>
         <li onClick={(e)=>{
          verseHandler(verse) 
          setActiveId(verse.id)
        }} 
          className={`list-group-item bg-transparent border-0 text-light py-0 justify-content-between cursor fs-6 
          ${
            verse.id === activeId && 'active'
          }`}
          >
           <p>
            {verse.text_madani}
           </p>
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

export default TextScreen
