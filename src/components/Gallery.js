import React, { useRef, useState } from 'react'
import ImageGallery from 'react-image-gallery';
import styles from "react-image-gallery/styles/scss/image-gallery.scss";


const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]
console.log(styles)

const Gallery = (props) => {
  const ref = useRef(null)
  const [isFullScreen, setFullScreen] = useState(false)

  const imgs = props.images ? props.images.map((im) => ({ original: im, thumbnail: im })) : images

  return (
    <ImageGallery
      ref={ref}
      onClick={() => {
        setFullScreen(!isFullScreen)
        if (!isFullScreen)
          ref.current.fullScreen()
        else
          ref.current.exitFullScreen()
      }}
      style={styles}
      items={imgs}
      autoPlay={true}
      infinite={true}
      showNav={false}
      showBullets={false}
      showPlayButton={false}
      showFullscreenButton={false}
      {...props} />
  )
}

export default Gallery