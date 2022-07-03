import React, { useEffect, useState } from 'react';
import Video from './detailVideo';
import axios from 'axios';
const Videos = () => {

  const key = "AIzaSyCCxklQZFwjHW__l646hMdulU3Hp5e7AEs";

  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=60&key=${key}`
  // const loaded = false;
  const [videos, setVideos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(url).then(res => {
      setVideos(res.data.items)
      // console.log('VIDEOS:')
      console.log(res.data.items)
      setLoaded(true)
    }).catch(err => {
      console.log(err)
    })
  }, [])
 
  
    


  return (
    <div className="home container">
      <div class="row">
        {loaded?(videos.map((video) => (
            <div class="col-md-3" key={video.id}>
            <Video videoDetail={video} />
            </div>
        ))
        ) : (
            <h5>Videos Loading...</h5>
        )
        }
      </div>
    </div>
  )
}

export default Videos