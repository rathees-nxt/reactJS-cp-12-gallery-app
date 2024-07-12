// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbNailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? 'img-item active' : 'img-item'

  const onClickThumbNail = () => {
    setActiveThumbNailId(id)
  }

  return (
    <li className="img-card-item">
      <button
        type="button"
        className="img-card-button"
        onClick={onClickThumbNail}
      >
        <img
          className={thumbnailClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
