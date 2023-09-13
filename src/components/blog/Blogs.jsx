import { useState } from "react"
import Blog from "./Blog"
import PropTypes from 'prop-types'

const Blogs = ({handleBookmark, handleReadingTime}) => {
    const [datas, setDatas] = useState([])

    fetch("myData.json")
    .then(res=>res.json())
    .then(data=>setDatas(data))
  return (
    <div className="w-2/3">
      {
        datas.map(data=><Blog key={data.id} data={data} handleBookmark={handleBookmark}  handleReadingTime={handleReadingTime}/>)

      }
    </div>
  )
}

Blogs.propTypes = {
  handleBookmark: PropTypes.func,
  handleReadingTime:PropTypes.func,
}

export default Blogs
