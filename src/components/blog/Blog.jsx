import PropTypes from 'prop-types'

const Blog = ({ data }) => {
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
    <div>
      <div>
        <div>
          <img src={cover} alt="" className="w-[800px] h-[400px] rounded-lg" />
        </div>
        <div>
          <div>
            <img src={author_img} alt="" className="w-12 h-12 rounded-full" />
          </div>
          <div>
            <div>
              <h4>{author}</h4>
            </div>
            <div>
              <p>{posted_date}</p>
            </div>
          </div>
          <div>
            <p>{reading_time}</p>
          </div>
        </div>
        <title>{title}</title>
        <p>{hashtags}</p>
        <a href="">Mark as read</a>
      </div>
    </div>
  );
};


Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;
