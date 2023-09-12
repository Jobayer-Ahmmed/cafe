import { useState } from "react"
import Blog from "./Blog"


const Blogs = () => {
    const [datas, setDatas] = useState([])

    fetch("myData.json")
    .then(res=>res.json())
    .then(data=>setDatas(data))
  return (
    <div className="w-2/3">
      {
        datas.map(data=><Blog key={data.id} data={data}/>)

      }
    </div>
  )
}

export default Blogs
