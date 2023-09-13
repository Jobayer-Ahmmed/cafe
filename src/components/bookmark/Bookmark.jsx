import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
  const {title} = bookmark
  return (
    <div className='my-4 p-5 bg-white rounded-lg'>
      <h2>{title}</h2>
    </div>
  )
}

Bookmark.propTypes = {
  bookmark: PropTypes.object,
}
export default Bookmark
