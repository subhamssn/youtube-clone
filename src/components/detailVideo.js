import React from 'react'
import moment from 'moment';
import numeral from 'numeral';
import { useHistory } from 'react-router-dom';
    
const Video = ({ videoDetail }) => {
    
    const { title, channelTitle } = videoDetail.snippet
    const { viewCount, likeCount } = videoDetail.statistics
    const { duration } = videoDetail.contentDetails
    const imgURL = videoDetail.snippet.thumbnails.medium.url
    const _moment = moment.duration(duration)
    const kFormatted = numeral(viewCount).format("0a");
    const likes = numeral(likeCount).format("0a");
    const { hours, minutes, seconds } = _moment._data
    const duration_ = `${hours}:${minutes}:${seconds}`
    const history = useHistory();
    const watchVideo = () => {
        history.push({
            pathname: `/${videoDetail.id}`,
            state: videoDetail,
        });
    }

  return (
      <div className="video mt-4" style={{cursor: 'pointer'}} onClick={watchVideo}>
          <div className="thumbnail">
              <img className='video-thumbnail img-thumbnail'
                  src={imgURL}
                  alt=""
              />

<div class="stats">
              <span>{kFormatted} <b> views</b>  •  {likes} <b> likes</b></span>
          </div>
              
          </div>
          <div className="video-title"><b>{title}</b></div>
          <div className="channel-details "><b>•{channelTitle}</b></div>
          
    </div>
  )
}

export default Video