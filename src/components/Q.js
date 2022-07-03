import React from 'react'
import { useHistory } from 'react-router-dom';

const Query = ({ videoDetail }) => {

    const { title, channelTitle } = videoDetail.snippet

    console.log(videoDetail)
 
    const imgURL = videoDetail.snippet.thumbnails.medium.url
    const history = useHistory();
    const watchVideo = () => {
        history.push({
            pathname: `/${videoDetail.id.videoId}`,
            state: videoDetail
     })
 }
  return (
    <div className='row card m-2 mx-auto' style={{display: '-webkit-inline-box'}} onClick={watchVideo}>
          <div class="col-md-3">
              <img
                  src={ imgURL }
                  alt="Youtube Thumbnail"
                  className='img-thumbnail mt-2'
              />
          </div>
          <div class="col-md-7">
              <h6>{title}</h6>
              <p style={{display:'inline'}}><i>{channelTitle} </i></p>
          </div>
    </div>
  )
}

export default Query