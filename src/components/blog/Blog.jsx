import PropTypes from 'prop-types'
import {BsBookmark} from "react-icons/bs"

const Blog = ({ data, handleBookmark, handleReadingTime }) => {
  const {
    id,
    cover,
    author_img,
    author,
    title,
    posted_date,
    reading_time,
    hashtags,
  } = data;

  return (
      <div className='mt-16'>
          {/* first div */}
        <div>
          <img src={cover} alt="" className="w-[800px] h-[400px] rounded-lg" />
        </div>
          {/* second div */}
        <div className='flex justify-between items-center mt-4'>
          <div className='flex-1 flex gap-6'>
          <div>
            <img src={author_img} alt="" className="w-12 h-12 rounded-full" />
          </div>
          <div>
            <div>
              <h4 className='text-6 font-bold'>{author}</h4>
            </div>
            <div>
              <p>{posted_date}</p>
            </div>
          </div>
          </div>
          <div>
            <p>{reading_time} read <button onClick={()=>handleBookmark(data)}><BsBookmark/></button> </p>
          </div>
        </div>
          {/* third div */}
        <h3 className='my-4 text-3xl font-bold'>{title}</h3>
          {/* fourth div */}
        <p className='flex gap-3 mb-2'>{hashtags.map((hastag,id)=><span key={id}>#{hastag}</span>)}</p>
          {/* fifth div */}
        <button onClick={()=>handleReadingTime(reading_time, id)} className='underline text-[#6047EC] visited:text-purple-400'>Mark as read</button>
        
      </div>
  );
};


Blog.propTypes = {
    data: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleReadingTime:PropTypes.func,
}

export default Blog;
