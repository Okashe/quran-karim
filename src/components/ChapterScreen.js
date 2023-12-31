import React , {useState} from 'react';

const ChapterScreen = ({chapters, chapterHandler}) => {
 const [activeId, setActiveId] = useState('')
  return (
    <div className='min-vh-100 shadow-lg p-3 bg-orange-400 mb-2'>
      <h1 className='fs-5 fw-bold bg-white text-black text-center title sticky-top'>Chapters</h1>
        <ul className='list-group text-end'>
           {chapters&& chapters.length > 0 ?(
            chapters.map((chapter)=>(
              <div key={chapter.id}>
                 <li onClick={(e)=>{
                  chapterHandler(chapter)
                  setActiveId(chapter.id)
                 }} className={`list-group-item bg-transparent border-0 mb-2 py-0 d-flex justify-content-between cursor fs-6
                 ${
                    activeId === chapter.id && 'active'
                 }`}>
                   <span>{chapter.id} </span>
                   <span>{chapter.name_arabic}</span>{' '}
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
  )
}

export default ChapterScreen
