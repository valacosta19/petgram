import React, { useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Image, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    })
  }, [ref])

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <ImgWrapper href={`/details/${id}`}>
              <Image src={src} />
            </ImgWrapper>

            <Button>
              <MdFavoriteBorder size='32px' />{likes} likes!
            </Button>
          </>
      }
    </Article>
  )
}
