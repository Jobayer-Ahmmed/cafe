import React from 'react'
import Header from './components/header/Header'
import Blogs from './components/blog/Blogs'
import Bookmark from './components/bookmark/Bookmark'
const App = () => {
  return (
    <div className='px-56'>
      <Header/>
      <main className='flex  gap-6'>
        <Blogs/>
        <Bookmark/>
      </main>
    </div>
  )
}

export default App
