import React from 'react'

const Thread = ({ comment }) => {
  const { authorDisplayName,authorProfileImageUrl, publishedAt, textDisplay } = comment
  return (
    <div className="card" style={{ width: '100%' }}>
      <div className="card-body">
        <img src={authorProfileImageUrl} alt='' style={{ width: '5%', display: 'inline' }}className="rounded-circle" />
        <h6 className="name" style={{dispaly:'inline!important'}}>{authorDisplayName} | </h6>
        <span><p className="ctime" style={{dispaly:'inline'}}>{publishedAt}</p></span>
        <p className="card-text">{textDisplay}</p>
      </div>
    </div>
  )
}

export default Thread