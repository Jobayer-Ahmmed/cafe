import React, { useState } from 'react'
import Header from './components/header/Header'
import Blogs from './components/blog/Blogs'
import Bookmarks from './components/bookmark/Bookmarks'

const App = () => {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)
 

  const handleBookmark = (data)=>{
    const newBookmarks = [...bookmarks, data]
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = (time)=>{
    const intTime = parseInt(time);
    const intReadingTime =parseInt(readingTime)
    const newReadingTime = intReadingTime + intTime
    setReadingTime(newReadingTime)
    console.log(newReadingTime)
 
  }

  return (
    <div className='px-56 mb-44'>
      <Header/>
      <main className='flex  gap-6'>
        <Blogs handleBookmark = {handleBookmark}  handleReadingTime={handleReadingTime}/>
        <Bookmarks bookmarks = {bookmarks}  readingTime = {readingTime}/>
      </main>
    </div>
  )
}

export default App
