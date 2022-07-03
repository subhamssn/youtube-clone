import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Comments from './getComments';
const Watch = () => {
  
  const { id } = useParams();
  const location = useLocation();
  const videoData = location.state;
   
    
    const { viewCount, likeCount, commentCount } = videoData?.statistics
    const {title, description, publishedAt, channelTitle} = videoData?.snippet
    
  return (
      <div className='player-container' style={{marginLeft:'15%' }}>
          <div className="player">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                  allowFullScreen
                  title={title}
                width="100%"
                height="100%">
                  
            </iframe>
          </div>
          <div className="details">
              <h3>{title}</h3>
              <hr />
              <h4>{channelTitle}</h4>
              <hr/>
              <p className='text-right'> <b>Publish Date: {publishedAt} |  
              <hr/>
              {viewCount} Views |
              <hr/>
              {likeCount} Likes </b>
              </p>

              
              <p>{description}</p>
              <hr />
              <h4>{commentCount} Comments: </h4>
      </div>
      <Comments id={id} />
    </div>
  )
}

export default Watch