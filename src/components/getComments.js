import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Thread from './Threads'

const Comments = ({ id }) => {

    const key = "AIzaSyCCxklQZFwjHW__l646hMdulU3Hp5e7AEs"
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&key=${key}`
    const [comments, setComments] = useState([])

// https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=[YOUR_API_KEY] HTTP/1.1


    useEffect(() => {
        axios.get(url).then(res => {
            setComments(res.data.items)
            console.log("Response Data",res.data.items);
            console.log(comments)
            // console.log(vdata.statistics)
            // console.log(vdata.snippet)
        }).catch(err => {
            console.error(err);
        })
    }, [])

    const threads = comments?.map(comment => comment.snippet.topLevelComment.snippet)
    console.log("Thread DATA",threads)
  return (
      <div>
          <div>
              {
          threads?.map((comment, i) => (
            <Thread comment={comment} key={i} />
          ))
        }
        </div>
      </div>
  )
}

export default Comments