import ReactPlayer from "react-player";


const PlayerScreen = ({reciterDetail, chapterDetail}) => {
  const audioLink =(reciter, number)=>{
    return  reciter + '/' + ('00' + number).slice(-3)+'.mp3'
   }
  return (
    <div className='min-vh-screen w-100 bg-orange-400 shadow-lg rounded-md space-y-3 font-serif  border d-inline-block border-5 p-3 '>
    <h1 className='fs-5 fw-bold text-center title bg-white text-black'>Player</h1>
    {reciterDetail!==null && chapterDetail!==null ?(
       <ul className='list-group text-end'>
       <div>
         <li className='list-group-item bg-transparent border-0 py-0  d-flex justify-content-between  cursor fs-6 ps-0 mb-2'>
          <span>Reciter:</span>
            <span className='fs-6 '>{reciterDetail.name}</span>
         </li>
         <hr />

         <li className='list-group-item bg-transparent border-0  py-0  d-flex justify-content-between  cursor fs-6 ps-0'>
          <span>Chapter In Arabic:</span>
            <span className='fs-6 '>{chapterDetail.name_arabic}</span>
         </li>
         <hr/>
         <li className='list-group-item bg-transparent border-0  py-0  d-flex justify-content-between  cursor fs-6 ps-0'>
          <span>Chapter In English:</span>
            <span className='fs-6 '>{chapterDetail.name_complex}</span>
         </li>
         <hr/>
         <li className='list-group-item bg-transparent border-0  py-0  d-flex justify-content-between  cursor fs-6 ps-0'>
          <span>Revelation place:</span>
            <span className='fs-6 '>{chapterDetail.revelation_place}</span>
         </li>
         <hr/>
         <li className='list-group-item bg-transparent border-0  py-0  d-flex justify-content-between  cursor fs-6 ps-0'>
          <span>Translated Name:</span>
            <span className='fs-6 '>{chapterDetail.translated_name.name}</span>
         </li>
         <hr/>
         <div>
           <ReactPlayer 
              url={
                audioLink(reciterDetail.Server, chapterDetail.id)
              }
               controls={true} 
               playing={true}
               width='100%'
               height='60px'
               />
         </div>
       </div>
    </ul>
    ):(
      <div className="text-center">
        <span className="spinner-border"></span>
      </div>
    )
  }
   
    </div>
  )
}

export default PlayerScreen
