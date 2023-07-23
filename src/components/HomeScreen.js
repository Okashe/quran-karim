import React, {useEffect, useState} from 'react';
import RecitersScreen from './RecitersScreen';
import ChapterScreen from './ChapterScreen';
import PlayerScreen from './PlayerScreen';
import axios from 'axios';
import Navbar from './Navbar';

const HomeScreen = () => {
    const [reciters, setReciters] =useState([]);
    const [chapters, setChapters] =  useState([]);

    const [reciterDetail, setReciterDetail] = useState(null);
    const [chapterDetail, setChapterDetail] = useState(null);
   
    //get all reciters with audio
    useEffect(()=>{
        async function fetchData(){
            const {
                data: {reciters},
               
            } = await axios.get(`https://mp3quran.net/api/_english.php`)
            setReciters(reciters)
         
        }

        fetchData()
    }, [])

    //get all chapters
    useEffect(()=>{
        async function fetchData(){
            const {
                 data: chapters,
                }= await axios.get(
                `https://api.quran.com/api/v4/chapters`
                )
                setChapters(chapters)
              
        }
        reciters&& reciters.length > 0 && fetchData() 
    }, [reciters])

    
    const reciterHandler = (reciter) =>{
        
        setReciterDetail(reciter)
    }
    const chapterHandler = (chapter) =>{
       
        setChapterDetail(chapter)
    }
    
  return (
    <div className='container grid grid-cols-3 '>
        <div className=' row p-5  vh-100  '>
        <Navbar />
       <div className='col-lg-4 col-md-4 col-sm-12 col-12 scroll '>
          <RecitersScreen 
            reciters={reciters} 
            reciterHandler={reciterHandler} 
          />
       </div>
       <div className='col-lg-4 col-md-4 col-sm-12 col-12 scroll '>
        
          <ChapterScreen chapters={chapters&&chapters.chapters}
           chapterHandler={chapterHandler}
            />
       </div>
       <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
          <PlayerScreen 
          reciterDetail={reciterDetail}
          chapterDetail={chapterDetail}
          />
       </div>
    </div>
    </div>
    
  )
}

export default HomeScreen
