import PropTypes from 'prop-types'
import Bookmark from "./Bookmark"
import "./bookmarks.css"

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <aside className='w-1/3 mt-16'>
      <div className='p-8 bg-gray-300 rounded-lg mb-8 border border-[#6047EC]'>
        <h2 className='text-[#6047EC] text-6 font-bold'>Spent time on read : {readingTime} min</h2>
      </div>
        <div className='p-8 bg-gray-300 rounded-lg'> 
          <h3 className='text-6 font-bold'>Bookmark Blog : {bookmarks.length}</h3>       
          {
              bookmarks.map((bookmark,id)=><Bookmark key={id} bookmark = {bookmark} readingTime={readingTime} />)
          }
        </div>
    </aside>
  )
}


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime : PropTypes.number,
}


export default Bookmarks
